/**
 * Módulo de API para carregamento assíncrono dos dados do site
 */
export async function fetchSiteData() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error(`Erro HTTP ao carregar data.json: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Falha ao obter dados de data.json:', error);
    throw error;
  }
}
