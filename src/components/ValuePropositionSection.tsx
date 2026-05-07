import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const webinarDetails = [
  "Wat Profit First voor jouw klanten betekent",
  "Het membership en de community",
  "Investering en ROI-voorbeelden",
  "Hoe en wanneer je kunt starten"
];

export default function ValuePropositionSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-pfp-cream-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: What is PFP */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Wat is PFP?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              Een business coaching programma, certificering en community voor financials.
            </p>
            <div className="bg-black/20 p-6 rounded-2xl border border-primary-foreground/20 mb-8">
              <p className="text-primary-foreground italic font-medium leading-relaxed">
                "PFP helpt me met mijn strategie, visie, prijsstelling en mindset."
              </p>
            </div>
            
            <div className="p-8 bg-white text-pfp-dark-800 rounded-[32px] shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Geen sessie gepland?</h3>
              <p className="text-pfp-dark-300 mb-6">
                Plan direct een kennismakingsgesprek om de mogelijkheden te bespreken.
              </p>
              <Button size="xl" className="w-full shadow-lg shadow-primary/20 hover:shadow-primary/30">
                Plan een kennismakingsgesprek
              </Button>
            </div>
          </div>

          {/* Right Side: Webinar Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8 text-white">
              In het webinar ontdek je ook:
            </h3>
            <ul className="space-y-5">
              {webinarDetails.map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground/80" />
                  </div>
                  <p className="text-primary-foreground leading-relaxed font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
