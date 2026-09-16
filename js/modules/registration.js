/**
 * Módulo do Portal de Registros: Alternância de Abas e Envio
 */
import { escapeHtml, escapeAttr } from './utils.js';
import { supabase } from './supabaseClient.js';

export function initRegistration(regData) {
  if (!regData) return;

  const titleEl = document.getElementById('registration-title');
  const subtitleEl = document.getElementById('registration-subtitle');
  const btnBeneficiario = document.getElementById('tab-beneficiario');
  const btnVoluntario = document.getElementById('tab-voluntario');
  const formBeneficiario = document.getElementById('form-beneficiario');
  const formVoluntario = document.getElementById('form-voluntario');
  const selectAjuda = document.getElementById('benef-ajuda');
  const selectInteresse = document.getElementById('vol-interesse');
  const feedbackEl = document.getElementById('registration-feedback');

  if (titleEl && regData.title) titleEl.textContent = regData.title;
  if (subtitleEl && regData.subtitle) subtitleEl.textContent = regData.subtitle;

  // 1. Preencher opções do select de Beneficiário a partir de data.json
  if (selectAjuda && regData.beneficiary?.options) {
    selectAjuda.innerHTML = `
      <option value="" disabled selected>Selecione uma área</option>
      ${regData.beneficiary.options
        .map((opt) => `<option value="${escapeAttr(opt.value)}">${escapeHtml(opt.label)}</option>`)
        .join('')}
    `;
  }

  // 2. Preencher opções do select de Voluntário a partir de data.json
  if (selectInteresse && regData.volunteer?.options) {
    selectInteresse.innerHTML = `
      <option value="" disabled selected>Selecione uma área</option>
      ${regData.volunteer.options
        .map((opt) => `<option value="${escapeAttr(opt.value)}">${escapeHtml(opt.label)}</option>`)
        .join('')}
    `;
  }

  // 3. Controle das Abas (Tabs)
  function switchTab(activeTab) {
    if (activeTab === 'beneficiario') {
      btnBeneficiario?.classList.add('active');
      btnBeneficiario?.setAttribute('aria-selected', 'true');
      btnVoluntario?.classList.remove('active');
      btnVoluntario?.setAttribute('aria-selected', 'false');

      formBeneficiario?.classList.remove('hidden');
      formVoluntario?.classList.add('hidden');
    } else {
      btnVoluntario?.classList.add('active');
      btnVoluntario?.setAttribute('aria-selected', 'true');
      btnBeneficiario?.classList.remove('active');
      btnBeneficiario?.setAttribute('aria-selected', 'false');

      formVoluntario?.classList.remove('hidden');
      formBeneficiario?.classList.add('hidden');
    }

    // Limpar feedback ao trocar de aba
    if (feedbackEl) {
      feedbackEl.className = 'form-feedback';
      feedbackEl.textContent = '';
    }
  }

  btnBeneficiario?.addEventListener('click', () => switchTab('beneficiario'));
  btnVoluntario?.addEventListener('click', () => switchTab('voluntario'));

  // 4. Tratamento de Envio dos Formulários (Conectado ao Supabase com RLS e Proteção Anti-Spam)
  const handleFormSubmit = (form, tipo) => {
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('.btn-submit');
      const originalBtnText = submitBtn?.textContent;

      const formData = new FormData(form);
      const dataObj = Object.fromEntries(formData.entries());

      // 4.1 Proteção contra bots: se o honeypot estiver preenchido, aborta silenciosamente
      if (dataObj.website_hp) {
        console.warn('⚠️ Envio bloqueado: atividade suspeita de bot detectada.');
        form.reset();
        return;
      }

      // 4.2 Estado de carregamento no botão
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }
      if (feedbackEl) {
        feedbackEl.className = 'form-feedback';
        feedbackEl.textContent = '';
      }

      try {
        // 4.3 Mapeamento de tabela e payload limpo
        const isBeneficiario = tipo === 'beneficiario';
        const tabela = isBeneficiario ? 'beneficiarios' : 'colaboradores';

        const payload = isBeneficiario
          ? {
              nome: (dataObj.nome || '').trim(),
              email: (dataObj.email || '').trim().toLowerCase(),
              telefone: (dataObj.telefone || '').trim(),
              area_ajuda: dataObj.area_ajuda,
              status_atendimento: 'novo'
            }
          : {
              nome: (dataObj.nome || '').trim(),
              email: (dataObj.email || '').trim().toLowerCase(),
              telefone: (dataObj.telefone || '').trim(),
              area_interesse: dataObj.area_interesse,
              status: 'pendente'
            };

        // 4.4 Inserção direta e segura no Supabase (respeitando as regras RLS)
        const { error } = await supabase.from(tabela).insert([payload]);

        if (error) {
          throw error;
        }

        console.log(`✅ [${tipo.toUpperCase()}] Cadastro salvo com sucesso no Supabase!`);

        // Feedback amigável de sucesso
        if (feedbackEl) {
          feedbackEl.className = 'form-feedback success';
          feedbackEl.innerHTML = `
            <strong>Agradecemos seu contato!</strong><br />
            Recebemos seus dados com muito carinho. Em breve a equipe do Guaramo entrará em contato.
          `;
        }

        form.reset();
      } catch (error) {
        console.error(`❌ Falha ao enviar formulário de ${tipo} para o Supabase:`, error);

        // Feedback visível de erro
        if (feedbackEl) {
          feedbackEl.className = 'form-feedback error';
          feedbackEl.innerHTML = `
            <strong>Não foi possível enviar seus dados no momento.</strong><br />
            Por favor, verifique os campos ou tente novamente em alguns instantes.
          `;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      }
    });
  };

  handleFormSubmit(formBeneficiario, 'beneficiario');
  handleFormSubmit(formVoluntario, 'voluntario');
}
