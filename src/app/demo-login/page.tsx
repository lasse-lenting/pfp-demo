'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/demo-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push(callbackUrl);
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || 'Ongeldig wachtwoord');
      }
    } catch (err) {
      setError('Er is een onverwachte fout opgetreden');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password">Wachtwoord</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Wachtwoord invoeren..."
          required
          className="bg-white/50 focus-visible:ring-[oklch(0.857_0.1698_134.56)]"
        />
      </div>

      {error && (
        <div className="text-[0.8rem] font-medium text-destructive">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[oklch(0.857_0.1698_134.56)] text-[oklch(0.2869_0.0839_135.05)] hover:bg-[oklch(0.857_0.1698_134.56)]/90 mt-2"
      >
        {loading ? 'Bezig met laden...' : 'Bekijk demo'}
      </Button>
    </form>
  );
}

export default function DemoLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[oklch(0.857_0.1698_134.56)]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[oklch(0.2869_0.0839_135.05)]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-sm relative z-10">
        <Card className="bg-white/60 backdrop-blur-2xl border-slate-200/60 shadow-sm overflow-hidden">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/puntwerk.svg" 
                  alt="Puntwerk Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <CardTitle>Klant Demo</CardTitle>
            <CardDescription>Deze omgeving is afgeschermd.</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div className="h-32 flex items-center justify-center text-slate-500 text-sm">Laden...</div>}>
              <LoginForm />
            </Suspense>
          </CardContent>
        </Card>
        
        <div className="text-center mt-6 text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Puntwerk
        </div>
      </div>
    </div>
  );
}
