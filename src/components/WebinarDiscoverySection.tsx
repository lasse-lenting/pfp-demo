import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const discoveries = [
  "Creëer een bedrijf dat voor jou zorgt",
  "Focus op resultaat en klantwaardering",
  "Onderscheid je van andere financials"
];

export default function WebinarDiscoverySection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-[32px] overflow-hidden shadow-2xl bg-primary/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
            <Image
              src="/gino.png" // Placeholder, replace with suitable image
              alt="Financial professional at work"
              fill
              className="object-cover object-center grayscale-[20%]"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-5xl font-bold text-pfp-dark-800 tracking-tight mb-8">
              Wat je ontdekt in <span className="text-primary italic">dit webinar</span>
            </h2>
            
            <div className="space-y-6 text-lg text-pfp-dark-300 leading-relaxed">
              <p>
                In dit exclusieve webinar duiken we diep in de transformatie van je kantoor. We laten je zien hoe je stopt met het "uurtje-factuurtje" model en overstapt naar een bedrijf dat echt voor jou werkt, in plaats van andersom.
              </p>
              <p>
                Je ontdekt hoe je als Profit First Professional niet alleen de winst van je klanten structureel verhoogt, maar ook je eigen positie in de markt verstevigt. Het gaat om het creëren van rust, focus en een unieke waarde die ervoor zorgt dat ideale klanten specifiek voor jou kiezen.
              </p>
              <p>
                Of je nu een gevestigde accountant bent of een ambitieuze boekhouder; deze sessie biedt je de blauwdruk om meer voldoening uit je werk te halen en klanten te begeleiden naar hun echte doelen.
              </p>
            </div>
            
            <div className="mt-12 p-6 bg-neutral-100 rounded-2xl border border-neutral-200">
              <p className="text-pfp-dark-800 font-bold mb-2">Momenteel geen nieuwe sessie gepland</p>
              <p className="text-pfp-dark-300 text-sm mb-6 leading-relaxed">
                Er staat momenteel geen nieuwe informatiesessie in de agenda. We verwachten in juni meer informatie te hebben. Wil je niet wachten?
              </p>
              <Button size="xl" className="w-full sm:w-auto">
                Plan een kennismakingsgesprek
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
