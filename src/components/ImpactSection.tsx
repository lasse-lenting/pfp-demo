import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";

import { GraduationCap, Star, Users, CircleDollarSign } from "lucide-react";

const stats = [
  {
    label: "Professionals getraind",
    value: "2.500+",
    icon: GraduationCap,
  },
  {
    label: "5-sterren reviews",
    value: "150+",
    icon: Star,
  },
  {
    label: "Actieve PFP's",
    value: "70+",
    icon: Users,
  },
  {
    label: "Focus op winst",
    value: "100%",
    icon: CircleDollarSign,
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-pfp-dark-800 tracking-tight mb-4">
            Onze impact groeit <span className="text-primary italic">elke maand</span>
          </h2>
          <p className="text-lg text-pfp-dark-300 max-w-2xl mx-auto">
            We helpen financials continu om hun bedrijf te professionaliseren en hun klanten naar echte resultaten te begeleiden.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="ring-0 bg-neutral-50 border-none shadow-none rounded-[2rem] overflow-hidden min-h-[240px] flex flex-col p-0 group">
              <div className="p-8 flex flex-col justify-between h-full flex-1">
                <stat.icon className="w-10 h-10 text-primary group-hover:text-primary transition-colors" strokeWidth={1.5} />
                <div>
                  <h3 className="text-4xl font-bold text-pfp-dark-800 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-pfp-dark-300 font-medium text-xs uppercase tracking-widest mt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
