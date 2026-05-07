import Container from "@/components/Container";
import { Star } from "lucide-react";
import Image from "next/image";

const dreams = [
  "Om je klanten te helpen hun echte doelen te bereiken? (In plaats van dat je vooral bezig bent met de boekhouding?)",
  "Dat er methoden, templates en stappenplannen zijn die jij één op één kunt overnemen om je bedrijf te professionaliseren (in plaats van dat je zelf het wiel moet uitvinden?)",
  "Dat je alleen maar met leuke, ideale klanten werkt (En niet met klanten die nooit op je mails reageren, maar wel willen dat jij binnen 24 uur hun zaakjes oplevert?)",
  "Trajecten of programma’s te verkopen? (In plaats van losse uren, waardoor je altijd keihard moet werken?)",
  "Dat klanten persé met jou willen werken? (Ook als je niet de goedkoopste bent?)"
];

export default function DreamsSection() {
  return (
    <section className="py-20 md:py-32 bg-neutral-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side (Left on Desktop) */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-pfp-dark-800 mb-12 tracking-tight">
              Droom jij er <span className="text-primary italic">van…</span>
            </h2>
            
            <div className="space-y-4">
              {dreams.map((item, index) => (
                <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-[2rem] shadow-none ring-0 hover:bg-neutral-50 transition-colors">
                  <div className="mt-1 shrink-0 bg-primary/10 p-2 rounded-full">
                    <Star className="w-5 h-5 text-primary fill-primary/20" />
                  </div>
                  <p className="text-pfp-dark-400 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side (Right on Desktop) */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="/gino.png"
              alt="Gino Blauw coaching"
              fill
              className="object-cover object-top"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
