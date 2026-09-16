/**
 * Utilitários compartilhados entre os módulos do site
 */

/**
 * Escapa caracteres especiais de HTML para evitar XSS ao injetar
 * strings dinâmicas via innerHTML. Deve ser usado em TODO texto
 * vindo de data.json (ou futuramente de uma API) antes de entrar
 * em um template literal que será atribuído a innerHTML.
 *
 * Uso: `<h3>${escapeHtml(item.title)}</h3>`
 *
 * @param {unknown} value
 * @returns {string}
 */
export function escapeHtml(value) {
  if (value === null || value === undefined) return '';

  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Escapa uma string para uso seguro dentro de um atributo HTML
 * (href, src, alt, etc.). Hoje é um alias de escapeHtml, mas fica
 * separado para deixar explícito, no código de cada módulo, quando
 * o valor está indo para um atributo em vez de texto visível.
 *
 * @param {unknown} value
 * @returns {string}
 */
export function escapeAttr(value) {
  return escapeHtml(value);
}
