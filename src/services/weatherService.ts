// src/services/weatherService.ts

const USE_MOCK = false; // Altere para true se quiser usar mock
const API_KEY = 'b3f27f25e907533d27607cb2a0887823'; // Sua chave da OpenWeather

export const fetchWeather = async (city: string) => {
  if (USE_MOCK) {
    const mock = await import('../mock/mockData.json');
    return mock.default;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`;

  console.log('🔍 URL gerada:', url);

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();
    console.error('❌ Erro da API:', errorData);
    throw new Error('Erro ao buscar dados da API');
  }

  return await response.json();
};
