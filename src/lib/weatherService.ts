export const getWeatherService = async (city: string, date: string) => {
    const KEY = process.env.WEATHER_API_KEY;
    const BASE_URL = 'https://api.weatherapi.com/v1';

    const [currentRes, forecastRes] = await Promise.all([
        fetch(`${BASE_URL}/current.json?key=${KEY}&q=${city}&aqi=yes`),
        fetch(`${BASE_URL}/forecast.json?key=${KEY}&q=${city}&days=1`)
    ]);

    if (!currentRes.ok || !forecastRes.ok) {
        throw new Error("Error al consultar la API externa de clima");
    }

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    const forecastHours = forecastData.forecast?.forecastday?.[0]?.hour || [];

    return {
        current: currentData,
        forecast: forecastHours.slice(0, 12)
    };
};