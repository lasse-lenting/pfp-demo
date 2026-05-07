import Image from "next/image";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlayCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-neutral-50 text-center">
      <Container className="flex flex-col items-center">
        {/* Top Badge */}
        <Badge variant="secondary" className="mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs font-medium text-pfp-dark-700 tracking-wide uppercase">
            PFP Informatiewebinar
          </span>
        </Badge>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pfp-dark-800 tracking-tight leading-[1.1] mb-6 animate-fade-in-up delay-100 max-w-4xl">
          Betere resultaten en een <span className="text-primary italic">unieke positie</span> als financial
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-pfp-dark-300 leading-relaxed mb-10 animate-fade-in-up delay-200 max-w-2xl">
          Begeleid je klanten naar winst, focus en rust. Speciaal voor boekhouders en accountants.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 animate-fade-in-up delay-300 w-full sm:w-auto">
          <Button size="xl" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            Aanmelden kennismakingsgesprek
          </Button>
        </div>

        {/* Video/Image Container */}
        <div className="w-full relative aspect-[16/9] max-w-5xl mx-auto rounded-[32px] p-2 bg-white shadow-xl animate-fade-in-up delay-400">
          <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-pfp-cream-100 flex items-center justify-center">
            {/* Main Portrait Image - Replace with actual webinar host image */}
            <Image
              src="/gino.png"
              alt="Gino Blauw"
              fill
              className="object-cover object-top opacity-90"
              priority
            />

            {/* Play Button Overlay for visual interest */}
            <div className="absolute inset-0 bg-pfp-dark-900/10 flex items-center justify-center group cursor-pointer transition-all">
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <PlayCircle className="w-10 h-10 text-primary" />
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
