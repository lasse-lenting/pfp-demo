import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.DEMO_PASSWORD;

    if (!correctPassword) {
      console.error('DEMO_PASSWORD is not set in environment variables');
      return NextResponse.json({ error: 'Server configuratie fout' }, { status: 500 });
    }

    if (password === correctPassword) {
      const cookieStore = await cookies();
      cookieStore.set('demo_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Ongeldig wachtwoord' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Er is een fout opgetreden' }, { status: 500 });
  }
}
