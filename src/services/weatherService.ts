import { REACT_APP_API_KEY, REACT_APP_USE_MOCK } from '../env';

export const fetchWeather = async (city: string) => {
  if (REACT_APP_USE_MOCK) {
    const mock = await import('../mock/mockData.json');
    return mock.default;
  }

  if (!REACT_APP_API_KEY) {
    throw new Error("Chave da API não configurada. Verifique as variáveis de ambiente.");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric&lang=pt_br`;

  console.log('🔍 URL gerada:', url);

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();
    console.error('❌ Erro da API:', errorData);
    throw new Error('Erro ao buscar dados da API');
  }

  const data = await response.json();

  // 📍 Extraindo coordenadas e país
  const latitude = data.coord.lat;
  const longitude = data.coord.lon;
  const country = data.sys.country;

  console.log('📌 Coordenadas:', latitude, longitude);
  console.log('🌎 País:', country);

  // Retorne os dados completos ou personalizados
  return {
    ...data,
    latitude,
    longitude,
    country
  };
};

