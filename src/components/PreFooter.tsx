import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function PreFooter() {
  return (
    <section className="py-8 md:py-12 bg-primary text-white overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-center md:text-left">
            Klaar om je kantoor te <span className="italic opacity-80">professionaliseren?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button size="lg" variant="secondary" className="shadow-xl">
              Plan een kennismakingsgesprek
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white">
              Bekijk de mogelijkheden
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
