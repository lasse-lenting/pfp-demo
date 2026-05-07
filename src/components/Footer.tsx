import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-[20px] bg-neutral-50">
      <div className="rounded-[2.5rem] bg-white border border-neutral-200 p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <Image 
              src="/certified.png" 
              alt="PFP Certified" 
              width={100} 
              height={100} 
              className="w-20 h-20 object-contain"
            />
            <p className="text-lg text-pfp-dark-300 max-w-md leading-relaxed">
              De community voor financials die streven naar betere resultaten en een unieke positie. Verander je praktijk van uurtje-factuurtje naar strategisch advies.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 rounded-[2rem] border border-neutral-100">
            <h3 className="text-xl font-bold text-pfp-dark-800 mb-4">Heb je vragen?</h3>
            <p className="text-pfp-dark-300 text-sm mb-6">Laat je e-mailadres achter en we nemen contact met je op.</p>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Jouw e-mailadres" 
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <Button type="submit" size="lg" className="w-full shadow-md shadow-primary/10">
                Verstuur
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm font-medium text-pfp-dark-800">
            <Link href="#" className="hover:text-primary transition-colors">Privacybeleid</Link>
            <Link href="#" className="hover:text-primary transition-colors">Voorwaarden</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="text-sm text-pfp-dark-300">
            © {new Date().getFullYear()} Profit First Professionals.
          </div>
        </div>
      </div>
    </footer>
  );
}
