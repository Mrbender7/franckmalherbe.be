import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Disclaimer = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-primary/20">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24 space-y-12">

        <Link to="/" className="text-sm text-primary hover:text-accent transition-colors font-medium">
          {t("disclaimer.back")}
        </Link>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight gradient-text">
            {t("disclaimer.title")}
          </h1>
          <p className="text-muted-foreground serif-italic">
            {t("disclaimer.subtitle")}
          </p>
        </header>

        <div className="glass-card p-8 rounded-2xl space-y-6 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">{t("disclaimer.s1.title")}</h2>
            <p>{t("disclaimer.s1.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">{t("disclaimer.s2.title")}</h2>
            <p>
              {t("disclaimer.s2.text_before")}
              <strong className="text-foreground">{t("disclaimer.s2.domain")}</strong>
              {t("disclaimer.s2.text_after")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">{t("disclaimer.s3.title")}</h2>
            <p>{t("disclaimer.s3.p1")}</p>
            <p>
              <strong className="text-foreground">{t("disclaimer.s3.p2_before")}</strong>
              {t("disclaimer.s3.p2_after")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">{t("disclaimer.s4.title")}</h2>
            <p>{t("disclaimer.s4.text")}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">{t("disclaimer.s5.title")}</h2>
            <p>
              {t("disclaimer.s5.text")}
              <a href="mailto:contact@franckmalherbe.be" className="text-primary hover:text-accent transition-colors underline underline-offset-2">
                contact@franckmalherbe.be
              </a>
            </p>
          </section>
        </div>

        <p className="text-xs text-muted-foreground/60 text-center">
          {t("disclaimer.updated")}
        </p>

      </div>
    </div>
  );
};

export default Disclaimer;
