/**
 * Módulo do Portal de Registros: Alternância de Abas e Envio
 */

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
        .map((opt) => `<option value="${opt.value}">${opt.label}</option>`)
        .join('')}
    `;
  }

  // 2. Preencher opções do select de Voluntário a partir de data.json
  if (selectInteresse && regData.volunteer?.options) {
    selectInteresse.innerHTML = `
      <option value="" disabled selected>Selecione uma área</option>
      ${regData.volunteer.options
        .map((opt) => `<option value="${opt.value}">${opt.label}</option>`)
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

  // 4. Tratamento de Envio dos Formulários (com feedback visual e pronto para API Flask)
  const handleFormSubmit = (form, tipo) => {
    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const dataObj = Object.fromEntries(formData.entries());
      dataObj.tipo_cadastro = tipo;

      console.log(`📝 [${tipo.toUpperCase()}] Dados registrados:`, dataObj);

      // Feedback amigável para o usuário
      if (feedbackEl) {
        feedbackEl.className = 'form-feedback success';
        feedbackEl.innerHTML = `
          <strong>Agradecemos seu contato!</strong><br />
          Recebemos seus dados com muito carinho. Em breve a equipe do Guaramo entrará em contato.
        `;
      }

      form.reset();
    });
  };

  handleFormSubmit(formBeneficiario, 'beneficiario');
  handleFormSubmit(formVoluntario, 'voluntario');
}
