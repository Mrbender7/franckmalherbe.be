import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Installation = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-primary/20">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24 space-y-12">

        <Link to="/" className="text-sm text-primary hover:text-accent transition-colors font-medium">
          {t("install.back")}
        </Link>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight gradient-text">
            {t("install.title")}
          </h1>
          <p className="text-muted-foreground serif-italic">
            {t("install.subtitle")}
          </p>
        </header>

        <div className="glass-card p-8 rounded-2xl space-y-8 text-muted-foreground leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">{t("install.why.title")}</h2>
            <p>{t("install.why.text")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">{t("install.steps.title")}</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{t("install.step1.title")}</h3>
                  <p className="text-sm">
                    {t("install.step1.text_before")}
                    <strong className="text-foreground">{t("install.step1.strong")}</strong>
                    {t("install.step1.text_after")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{t("install.step2.title")}</h3>
                  <p className="text-sm">{t("install.step2.text")}</p>
                  <ul className="text-sm space-y-1 ml-4 list-disc">
                    <li>{t("install.step2.li1_before")}<strong className="text-foreground">{t("install.step2.li1_strong")}</strong> ({t("install.step2.li1_alt")})</li>
                    <li>{t("install.step2.li2_before")}<strong className="text-foreground">{t("install.step2.li2")}</strong></li>
                    <li>{t("install.step2.li3")}</li>
                  </ul>
                  <p className="text-xs text-muted-foreground/70 italic">{t("install.step2.note")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{t("install.step3.title")}</h3>
                  <p className="text-sm">
                    {t("install.step3.text_before")}
                    <strong className="text-foreground">{t("install.step3.strong")}</strong>
                    {t("install.step3.text_after")}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</span>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{t("install.step4.title")}</h3>
                  <p className="text-sm">{t("install.step4.text")}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="text-lg font-bold text-foreground">{t("install.security.title")}</h2>
            <p className="text-sm">
              {t("install.security.text_before")}
              <strong className="text-foreground">{t("install.security.strong")}</strong>
              {t("install.security.text_mid")}
              <strong className="text-foreground">{t("install.security.domain")}</strong>
              {t("install.security.text_after")}
            </p>
          </section>

        </div>

        <div className="flex gap-4 text-xs">
          <Link to="/disclaimer" className="text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
            {t("install.disclaimerLink")}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Installation;
