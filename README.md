# Puntwerk Demo Template

Dit is een herbruikbare Next.js 15 template speciaal ingericht voor het bouwen van klantdemo's, inclusief een simpele, ingebouwde password protection layer.

## Features
- **Next.js 15 (App Router)**
- **TypeScript & Tailwind CSS**
- **Ingebouwde Password Protection:** Een middleware-gebaseerde auth layer die de gehele applicatie beschermt, behalve de publieke assets en de loginpagina.
- **Geen externe afhankelijkheden:** Werkt zonder database of externe auth provider (zoals NextAuth of Clerk), door middel van een simpel HTTP-only cookie en een environment variabele.
- **Klaar voor Vercel:** Gemakkelijk te deployen.

## Hoe te gebruiken voor een nieuwe klantdemo

### 1. Template kopiëren
Je kunt deze repo gebruiken als een template. Kopieer de bestanden naar een nieuwe map voor je klant:
```bash
cp -R path/to/demo-template path/to/nieuwe-klant-demo
cd path/to/nieuwe-klant-demo
npm install
```
*(Tip: Je kunt dit project ook op GitHub als "Template repository" instellen, en "Use this template" klikken bij het aanmaken van een nieuwe klant repo).*

### 2. Lokaal testen en .env instellen
Kopieer de `.env.example` naar `.env.local`:
```bash
cp .env.example .env.local
```
Vul vervolgens het gewenste wachtwoord in bij `DEMO_PASSWORD` in je `.env.local` bestand. Bijvoorbeeld:
```env
DEMO_PASSWORD=JouwSterkeWachtwoord123
```

Start de ontwikkelserver:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) en je wordt direct doorgestuurd naar `/demo-login`. Test de login met het wachtwoord dat je hebt ingesteld.

### 3. Vercel Deployment & Environment Variables
Wanneer je de klantdemo naar Vercel pusht, moet je zorgen dat de `DEMO_PASSWORD` environment variabele daar ook is ingesteld.

1. Ga in je Vercel dashboard naar het project van de klant.
2. Ga naar **Settings > Environment Variables**.
3. Voeg een variabele toe:
   - **Key:** `DEMO_PASSWORD`
   - **Value:** Het gekozen wachtwoord voor deze klant.
4. Klik op **Save** en trigger een nieuwe deployment (als je dit na de initiële deploy doet).

### 4. Subdomein koppelen in Vercel
Om de demo een mooie URL te geven (bijv. `klantnaam.puntwerk-demo.nl`):
1. Ga in het Vercel project naar **Settings > Domains**.
2. Typ het gewenste subdomein in (bijv. `klantnaam.jouwdomein.nl`) en klik op **Add**.
3. Volg de Vercel instructies om de juiste CNAME of A-records aan te maken in je DNS-instellingen van de domeinprovider, mocht dit nog niet gebeurd zijn voor een wildcard `*.jouwdomein.nl`.
4. Vercel regelt automatisch het SSL-certificaat.

### 5. Uitloggen toevoegen (Optioneel)
Er is al een `<LogoutButton />` component aanwezig in `src/components/LogoutButton.tsx`. Je kunt deze bijvoorbeeld importeren in je layout of footer, zodat de klant (of jijzelf) makkelijk de cookie weer kan wissen:
```tsx
import LogoutButton from '@/components/LogoutButton';

// in je component:
<LogoutButton />
```

## Security details
- Het wachtwoord wordt alleen vergeleken met de server-side `process.env.DEMO_PASSWORD`.
- Bij een succesvolle login wordt een `demo_auth` cookie ingesteld als `httpOnly` en `sameSite: 'lax'`.
- Op productie (Vercel) wordt de cookie automatisch gemarkeerd als `secure: true`.
- Er wordt geen plain-text wachtwoord in de cookie bewaard, enkel een `authenticated` boolean string.
