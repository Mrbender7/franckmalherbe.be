import { motion } from "framer-motion";

const FadeInOnScroll = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const GooglePlayBadge = () => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border text-muted-foreground text-xs font-medium">
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.774.387.774 1 0 1.387l-2.302 2.302-2.533-2.533 2.533-2.458zM5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z"/>
    </svg>
    Bientôt disponible
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen selection:bg-primary/20">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24 space-y-24">

        {/* Header */}
        <header className="space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-muted-foreground text-xs font-semibold uppercase tracking-widest">
            Portail Professionnel — Liège, Belgique
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight gradient-text">
            Franck Malherbe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground serif-italic font-medium max-w-2xl mx-auto md:mx-0 leading-snug">
            Créateur d'outils numériques & Expert en archivistique
          </p>
        </header>

        {/* Intro */}
        <section className="grid md:grid-cols-3 gap-12 items-start border-l-2 border-secondary/30 pl-8 ml-2">
          <div className="md:col-span-1 pt-1">
            <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest">Présentation</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
            <p>
              Basé à Liège, en Belgique. Passionné par la gestion rigoureuse des données et le développement d'outils numériques éthiques qui respectent la vie privée des utilisateurs. Ce portail centralise mes projets personnels et professionnels.
            </p>
          </div>
        </section>

        {/* Projets */}
        <section className="space-y-12">
          <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest text-center">
            Mes Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Insudose Pro */}
            <FadeInOnScroll>
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💉</span>
                <h3 className="text-xl font-bold gradient-text">Insudose Pro</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Calculateur d'insuline intelligent pour le suivi du diabète. Approche éthique et sécurisée. Chiffrement local AES — les données ne quittent jamais votre téléphone.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">APK signé</span>
                <span className="text-sm text-muted-foreground italic">Bientôt disponible</span>
              </div>
              <a href="/disclaimer" className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
                Décharge de responsabilité →
              </a>
            </div>
            </FadeInOnScroll>

            {/* Radio Sphere */}
            <FadeInOnScroll delay={0.1}>
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎙️</span>
                <h3 className="text-xl font-bold gradient-text">Radio Sphere</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Plateforme de diffusion radio numérique alternative. Pour une radio engagée et indépendante.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <a href="https://radiosphere.be" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-accent transition-colors font-medium">
                  Visiter radiosphere.be ↗
                </a>
                <GooglePlayBadge />
              </div>
            </div>
            </FadeInOnScroll>
            {/* Podcast Sphere */}
            <FadeInOnScroll delay={0.2}>
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎧</span>
                <h3 className="text-xl font-bold gradient-text">Podcast Sphere</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                L'écosystème audio complet de Radio Sphere. Création, édition et distribution souveraines de podcasts.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <a href="https://podcast.radiosphere.be" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-accent transition-colors font-medium">
                  Visiter podcast.radiosphere.be ↗
                </a>
                <GooglePlayBadge />
              </div>
            </div>
            </FadeInOnScroll>

            {/* Night Sphere */}
            <FadeInOnScroll delay={0.3}>
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌙</span>
                <h3 className="text-xl font-bold gradient-text">Night Sphere</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gestionnaire d'ambiances et de cycles lumineux. Respect circadien sans tracking cloud.
              </p>
              <div className="pt-2">
                <GooglePlayBadge />
              </div>
            </div>
            </FadeInOnScroll>

          </div>
        </section>

        {/* Parcours */}
        <section className="grid md:grid-cols-3 gap-12 items-start border-l-2 border-secondary/30 pl-8 ml-2">
          <div className="md:col-span-1 pt-1">
            <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest">Parcours</h2>
            <p className="text-xs text-muted-foreground mt-2">Archives de l'État (depuis 2000)</p>
          </div>
          <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
            <p>
              Rigoureux gestionnaire de fonds d'archives, je mets mon expertise au service de la structuration et de la préservation de l'information, tant physique que numérique.
            </p>
            <p>
              En parallèle, je conçois des solutions logicielles souveraines. Ma philosophie : <strong className="text-foreground">souveraineté locale</strong>, chiffrement AES et respect absolu de la vie privée.
            </p>
          </div>
        </section>

        {/* Confidentialité */}
        <section className="glass-card p-8 rounded-2xl space-y-4">
          <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest">
            Confidentialité & Responsabilité
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed serif-italic">
            Je m'engage à ce qu'aucune donnée de santé ou de navigation ne soit collectée via ce site ou mes applications. Les APK fournis sont signés numériquement. L'utilisateur assume la responsabilité de l'installation de sources tierces.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-border grid md:grid-cols-2 gap-12 items-end text-sm text-muted-foreground">
          <div className="space-y-3">
            <p className="serif-italic">Échanges professionnels uniquement</p>
            <a href="mailto:contact@franckmalherbe.be" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity block">
              contact@franckmalherbe.be
            </a>
          </div>
          <div className="md:text-right">
            <p className="text-xs text-muted-foreground/60">© 2026 — Franck Malherbe — Liège, Belgique</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Index;
