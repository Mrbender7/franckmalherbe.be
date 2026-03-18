import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section id="about" className="section-padding border-t border-border">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          À propos
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            Passionné par la gestion de l'information et la préservation du patrimoine documentaire,
            je mets mon expertise au service des institutions et organisations qui souhaitent
            structurer, valoriser et pérenniser leurs archives.
          </p>
          <p>
            Avec plus de vingt ans d'expérience dans le domaine de l'archivistique,
            j'accompagne mes clients dans la mise en place de solutions adaptées à leurs
            besoins spécifiques, alliant rigueur méthodologique et approche pragmatique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
