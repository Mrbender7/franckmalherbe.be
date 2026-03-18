const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Franck Malherbe
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
          Expert en archivistique · Consultant · Professionnel de l'information
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Me contacter
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-primary font-display text-sm font-semibold hover:bg-muted transition-colors duration-200"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
