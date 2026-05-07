'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/demo-logout', { method: 'POST' });
      if (res.ok) {
        router.push('/demo-login');
        router.refresh();
      }
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 underline transition-colors disabled:opacity-50"
    >
      {loading ? 'Uitloggen...' : 'Uitloggen'}
    </button>
  );
}
