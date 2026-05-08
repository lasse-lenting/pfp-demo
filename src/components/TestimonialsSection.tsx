import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Barbro van der Ham",
    company: "Accountant",
    quote: "PFP heeft m’n leven veranderd. Van boekhouder die altijd met het verleden bezig was, kon ik eindelijk met m’n klanten naar de toekomst gaan kijken.",
    image: "/barbro.jpeg",
  },
  {
    name: "Rudy van Veen",
    company: "VZAW",
    quote: "Mijn eigen onderneming is gegroeid. De winst is verdubbeld. Ik focus meer op de kostenkant, heb mijn tarieven verhoogd en kijk meer naar de waarde.",
    image: "/Rudy-van-Veen_037_1-kopie2-180x180.jpg",
  },
  {
    name: "Patrick de Jonge",
    company: "Administratiekantoor W. de Jonge",
    quote: "Ik ben nu ruim 2 jaar aangesloten bij PFP, en het heeft me echt veel opgeleverd. Allereerst heb ik de handvatten en de tools om mijn klanten beter te begeleiden.",
    image: "/Patrick-de-Jonge-180x180.jpeg",
  },
  {
    name: "Ilona Dieleman",
    company: "Flex your Profit",
    quote: "Ik ben volledig afgestapt van het uurtje-factuurtje model. Mijn tarieven zijn in sommige situaties meer dan verdubbeld. Ik verdien meer en heb meer tijd.",
    image: "/Ilona-Dieleman-180x180.jpg",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-pfp-dark-800 tracking-tight mb-4">
            Ervaringen van <span className="text-primary italic">klanten</span>
          </h2>
          <p className="text-lg text-pfp-dark-300 max-w-2xl mx-auto">
            Ontdek hoe Profit First Professionals levens en bedrijven heeft getransformeerd.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group ring-0 border-none bg-neutral-50 shadow-none rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
              {/* Quote Area */}
              <div className="mb-10">
                <p className="text-xl md:text-2xl text-pfp-dark-800 font-medium leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author Area with Avatar */}
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-pfp-dark-800 tracking-tight">{testimonial.name}</h4>
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-pfp-dark-300 mt-1">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button size="xl">
            Zet ook de volgende stap
          </Button>
        </div>
      </Container>
    </section>
  );
}
