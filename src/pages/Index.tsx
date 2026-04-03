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
        <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-[120px] object-contain" />
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
          <div className="space-y-6">

            {/* Insudose Pro — Application principale */}
            <FadeInOnScroll>
            <div className="glass-card p-10 rounded-2xl space-y-5 ring-1 ring-primary/20">
              <div className="flex items-center gap-3">
                <img src="/logo_insudose.png" alt="Insudose Pro" className="w-12 h-12 rounded-lg object-contain" />
                <h3 className="text-2xl font-bold gradient-text">Insudose Pro</h3>
                <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                  {t("insudose.badge")}
                </span>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                {t("insudose.desc")}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="/InsudosePro_v2.apk" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  {t("insudose.download")}
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1.5">
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
              <div className="flex items-center gap-4 pt-2 flex-wrap">
                <a href="https://radiosphere.be" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-accent transition-colors font-medium">
                  {t("radio.visit")}
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.fhm.radiosphere" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border text-foreground text-xs font-medium hover:bg-muted transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.774.387.774 1 0 1.387l-2.302 2.302-2.533-2.533 2.533-2.458zM5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z"/></svg>
                  Google Play
                </a>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a href="https://www.facebook.com/profile.php?id=61575475057830" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/radiosphere.be/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://bsky.app/profile/radiospherebe.bsky.social" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Bluesky">
                  <svg viewBox="0 0 568 501" className="w-5 h-5" fill="currentColor"><path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C10.945 203.659 1 75.291 1 57.946 1-28.906 76.134-1.612 123.121 33.664z"/></svg>
                </a>
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
              <div className="flex items-center gap-4 pt-2">
                <a href="https://podcast.radiosphere.be" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-accent transition-colors font-medium">
                  {t("podcast.visit")}
                </a>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border text-muted-foreground text-xs font-medium">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.774.387.774 1 0 1.387l-2.302 2.302-2.533-2.533 2.533-2.458zM5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z"/></svg>
                  {t("projects.comingSoon")}
                </div>
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
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border text-muted-foreground text-xs font-medium">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.774.387.774 1 0 1.387l-2.302 2.302-2.533-2.533 2.533-2.458zM5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z"/></svg>
                  {t("projects.comingSoon")}
                </div>
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
