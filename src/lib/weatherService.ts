export const getWeatherService = async (city: string, date: string) => {
    const KEY = process.env.WEATHER_API_KEY;
    const BASE_URL = 'https://api.weatherapi.com/v1';

    // 1. Usamos forecast.json en lugar de future.json para el día de hoy
    const [currentRes, forecastRes] = await Promise.all([
        fetch(`${BASE_URL}/current.json?key=${KEY}&q=${city}&aqi=yes`),
        fetch(`${BASE_URL}/forecast.json?key=${KEY}&q=${city}&days=1`)
    ]);

    // 2. Validación crítica: Si el fetch falló, lanzamos error antes de hacer .json()
    if (!currentRes.ok || !forecastRes.ok) {
        throw new Error("Error al consultar la API externa de clima");
    }

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    // 3. Acceso seguro a los datos
    const forecastHours = forecastData.forecast?.forecastday?.[0]?.hour || [];

    return {
        current: currentData,
        forecast: forecastHours.slice(0, 12)
    };
};