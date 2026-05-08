import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Eye, Target } from "lucide-react";
import Image from "next/image";

export default function MeetCoachSection() {
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Coach Profile */}
          <div className="flex flex-col items-start">
            <Badge variant="secondary" className="mb-6 flex items-center gap-2 px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium text-pfp-dark-700 tracking-wide uppercase">Over mij</span>
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-pfp-dark-800 tracking-tight mb-8">
              Ontmoet je <span className="text-primary italic">coach</span>
            </h2>

            <div className="w-full max-w-md">
              <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6">
                <Image
                  src="/gino.png"
                  alt="Gino Blauw"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pfp-dark-800">Gino Blauw</h3>
                <p className="text-pfp-dark-300 font-medium italic mb-6">Oprichter van Profit First Professionals NL</p>
                <Button size="lg" variant="default" className="w-full sm:w-auto">
                  Plan je strategiegesprek
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side: Info Cards */}
          <div className="flex flex-col gap-3">
            {/* About Card */}
            <Card className="ring-0 border-none bg-white shadow-none rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neutral-100 rounded-xl">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-pfp-dark-800">Over de coach</h3>
                </div>
                <p className="text-pfp-dark-300 leading-relaxed">
                  Gino is een ervaren financial die zijn eigen praktijk transformeerde met Profit First. Nu helpt hij boekhouders en accountants om dezelfde stap te zetten: van administrateur naar strategisch adviseur.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="ring-0 border-none bg-white shadow-none rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neutral-100 rounded-xl">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-pfp-dark-800">Visie</h3>
                </div>
                <p className="text-pfp-dark-300 leading-relaxed">
                  Het creëren van een toekomst waarin financials de drijvende kracht zijn achter winstgevende en financieel gezonde bedrijven, door middel van slimme systemen en een focus op de toekomst.
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="ring-0 border-none bg-white shadow-none rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neutral-100 rounded-xl">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-pfp-dark-800">Missie</h3>
                </div>
                <p className="text-pfp-dark-300 leading-relaxed">
                  Financials voorzien van de tools, stappenplannen en mindset om hun eigen bedrijf te professionaliseren, hun winst te verhogen en hun klanten naar hun echte doelen te begeleiden.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </Container>
    </section>
  );
}
