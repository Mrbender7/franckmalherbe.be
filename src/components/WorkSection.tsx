import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "2023 — Présent",
    title: "Expert en archivistique",
    org: "Archives de l'État",
    description:
      "Gestion et traitement d'archives historiques et contemporaines. Conseil en stratégie de conservation et de valorisation du patrimoine documentaire.",
  },
  {
    period: "2016 — 2023",
    title: "Archiviste / Consultant",
    org: "Missions diverses",
    description:
      "Accompagnement d'institutions publiques et privées dans l'organisation de leurs fonds documentaires et la mise en conformité réglementaire.",
  },
  {
    period: "Avant 2016",
    title: "Professionnel de l'information",
    org: "Divers secteurs",
    description:
      "Construction d'une expertise solide en gestion documentaire, numérisation et mise en place de systèmes d'archivage.",
  },
];

const WorkSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="section-padding border-t border-border">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Parcours
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="group">
              <p className="font-display text-sm font-medium text-accent mb-1">
                {exp.period}
              </p>
              <h3 className="text-xl font-bold mb-1">
                {exp.title}
              </h3>
              <p className="font-display text-sm text-muted-foreground mb-3">
                {exp.org}
              </p>
              <p className="text-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
