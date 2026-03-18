const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center section-padding">
      <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Franck Malherbe
        </h1>
        <p className="text-lg md:text-xl text-primary font-display font-semibold mb-6">
          Créateur d'outils numériques & Expert en archivistique
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Basé à Liège, en Belgique. Passionné par la gestion rigoureuse des données
          (archivistique) et le développement d'outils numériques éthiques qui respectent
          la vie privée des utilisateurs. Ce portail centralise mes projets personnels et professionnels.
        </p>
      </div>
    </section>
  );
};

export default Hero;
