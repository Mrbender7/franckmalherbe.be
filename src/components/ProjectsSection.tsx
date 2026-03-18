import { useEffect, useRef, useState } from "react";
import { Shield, Download, Radio, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-padding border-t border-border">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Mes Projets Actuels
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Insudose Pro */}
          <div className="rounded-xl border border-border bg-card p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Insudose Pro</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Calculateur d'insuline intelligent pour le suivi du diabète.
              Une approche éthique et sécurisée.
            </p>
            <div className="space-y-2 mb-6 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Sécurité :</strong> Chiffrement local AES — les données ne quittent jamais votre téléphone.</span>
              </p>
              <p className="flex items-start gap-2">
                <Download className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Distribution :</strong> Téléchargement direct APK (installation manuelle sécurisée).</span>
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                <Download className="w-4 h-4" />
                Télécharger l'APK signé
              </a>
            </div>
          </div>

          {/* Radio Sphere */}
          <div className="rounded-xl border border-border bg-card p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Radio className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Radio Sphere</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ma plateforme de diffusion de podcasts engagés. Un espace de parole libre
              et de réflexion sur les enjeux numériques et sociétaux.
            </p>
            <div className="mt-auto">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-display text-sm font-semibold hover:bg-secondary transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Visiter le site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
