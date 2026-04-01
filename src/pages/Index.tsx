import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

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

const GooglePlayBadge = ({ href }: { href?: string }) => {
  const { t } = useLanguage();
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-10 object-contain" />
      </a>
    );
  }
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border text-muted-foreground text-xs font-medium">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.774.387.774 1 0 1.387l-2.302 2.302-2.533-2.533 2.533-2.458zM5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z"/>
      </svg>
      {t("projects.comingSoon")}
    </div>
  );
};

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-primary/20">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24 space-y-24">

        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-muted-foreground text-xs font-semibold uppercase tracking-widest">
            {t("header.badge")}
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight gradient-text">
            Franck Malherbe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground serif-italic font-medium max-w-2xl mx-auto md:mx-0 leading-snug">
            {t("header.subtitle")}
          </p>
        </motion.header>

        {/* Intro */}
        <section className="grid md:grid-cols-3 gap-12 items-start border-l-2 border-secondary/30 pl-8 ml-2">
          <div className="md:col-span-1 pt-1">
            <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest">{t("intro.title")}</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
            <p>{t("intro.text")}</p>
          </div>
        </section>

        {/* Projets */}
        <section className="space-y-12">
          <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest text-center">
            {t("projects.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Insudose Pro */}
            <FadeInOnScroll>
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo_insudose.png" alt="Insudose Pro" className="w-10 h-10 rounded-lg object-contain" />
                <h3 className="text-xl font-bold gradient-text">Insudose Pro</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("insudose.desc")}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{t("insudose.badge")}</span>
                <a href="/InsudosePro_v2.apk" download className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  {t("insudose.download")}
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <Link to="/insudose" className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
                  {t("insudose.learnMore")}
                </Link>
                <Link to="/installation" className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
                  {t("insudose.installGuide")}
                </Link>
                <Link to="/disclaimer" className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
                  {t("insudose.disclaimer")}
                </Link>
              </div>
            </div>
            </FadeInOnScroll>

            {/* Radio Sphere */}
            <FadeInOnScroll delay={0.1}>
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo_radiosphere.png" alt="RadioSphere.be" className="w-10 h-10 rounded-lg object-contain" />
                <h3 className="text-xl font-bold gradient-text">RadioSphere.be</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("radio.desc")}
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <a href="https://radiosphere.be" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-accent transition-colors font-medium">
                  {t("radio.visit")}
                </a>
                <GooglePlayBadge href="https://play.google.com/store/apps/details?id=com.fhm.radiosphere" />
              </div>
            </div>
            </FadeInOnScroll>

            {/* Podcast Sphere */}
            <FadeInOnScroll delay={0.2}>
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo_podcastsphere.png" alt="Podcast Sphere" className="w-10 h-10 rounded-lg object-contain" />
                <h3 className="text-xl font-bold gradient-text">Podcast Sphere</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("podcast.desc")}
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <a href="https://podcast.radiosphere.be" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-accent transition-colors font-medium">
                  {t("podcast.visit")}
                </a>
                <GooglePlayBadge />
              </div>
            </div>
            </FadeInOnScroll>

            {/* Night Sphere */}
            <FadeInOnScroll delay={0.3}>
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo_nightsphere.png" alt="Night Sphere" className="w-10 h-10 rounded-lg object-contain" />
                <h3 className="text-xl font-bold gradient-text">Night Sphere</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("night.desc")}
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
            <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest">{t("parcours.title")}</h2>
            <p className="text-xs text-muted-foreground mt-2">{t("parcours.subtitle")}</p>
          </div>
          <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
            <p>{t("parcours.p1")}</p>
            <p>
              {t("parcours.p2_before")}<strong className="text-foreground">{t("parcours.p2_strong")}</strong>{t("parcours.p2_after")}
            </p>
          </div>
        </section>

        {/* Confidentialité */}
        <section className="glass-card p-8 rounded-2xl space-y-4">
          <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest">
            {t("privacy.title")}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed serif-italic">
            {t("privacy.text")}
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-border flex flex-col items-center gap-8 text-sm text-muted-foreground">
          <div className="space-y-3 text-center">
            <p className="serif-italic">{t("footer.contact")}</p>
            <a href="mailto:contact@franckmalherbe.be" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity block">
              contact@franckmalherbe.be
            </a>
          </div>
          <img src="/logo.png" alt="Franck Malherbe" className="w-16 h-16 rounded-xl opacity-80" />
          <p className="text-xs text-muted-foreground/60">{t("footer.copy")}</p>
        </footer>

      </div>
    </div>
  );
};

export default Index;
