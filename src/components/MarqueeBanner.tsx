import { ShieldCheck, TrendingUp, Target, Users, Zap } from "lucide-react";

const items = [
  { text: "PROFIT FIRST PROFESSIONALS", icon: ShieldCheck },
  { text: "MEER WINST", icon: TrendingUp },
  { text: "MEER FOCUS", icon: Target },
  { text: "MEER RUST", icon: Zap },
  { text: "WORD EEN STRATEGISCH ADVISEUR", icon: ShieldCheck },
  { text: "JOIN DE COMMUNITY", icon: Users },
];

export default function MarqueeBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-primary py-6 select-none border-y border-white/10">
      {/* X-axis Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-primary via-primary/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-primary via-primary/80 to-transparent z-10" />

      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* First set of items */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-8 items-center px-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-8 text-white"
              >
                <span className="text-xl md:text-3xl font-bold tracking-tight uppercase scale-y-[1.3] origin-center inline-block">
                  {item.text}
                </span>
                <item.icon className="w-6 h-6 text-white/50" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
