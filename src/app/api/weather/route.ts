import { NextResponse } from 'next/server';
import { getWeatherService } from '@/lib/weatherService';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const date = searchParams.get('date');

    if (!city || !date) {
        return NextResponse.json(
            { error: "Parámetros inválidos. Requiere 'city' y 'date' (YYYY-MM-DD)" },
            { status: 400 }
        );
    }

    try {
        const data = await getWeatherService(city, date);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "No se pudo obtener la información del clima en este momento." },
            { status: 500 }
        );
    }
}

