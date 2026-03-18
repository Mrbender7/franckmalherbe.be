import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";

const PrivacySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="privacy" className="section-padding border-t border-border">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="flex items-center gap-3 mb-8">
          <Lock className="w-6 h-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Confidentialité & Responsabilité
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Je m'engage à ce qu'aucune donnée de santé ou de navigation ne soit collectée
          via ce site ou mes applications. Les APK fournis sont signés numériquement.
          L'utilisateur assume la responsabilité de l'installation de sources tierces.
        </p>
      </div>
    </section>
  );
};

export default PrivacySection;
