import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const InsudoseDetail = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-primary/20">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24 space-y-12">

        <Link to="/" className="text-sm text-primary hover:text-accent transition-colors font-medium">
          {t("insudoseDetail.back")}
        </Link>

        <header className="space-y-4">
          <div className="flex items-center gap-4">
            <img src="/logo_insudose.png" alt="Insudose Pro" className="w-14 h-14 rounded-xl object-contain" />
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight gradient-text">
                Insudose Pro
              </h1>
              <p className="text-muted-foreground serif-italic">
                {t("insudoseDetail.subtitle")}
              </p>
            </div>
          </div>
        </header>

        <div className="glass-card p-8 rounded-2xl space-y-4 text-muted-foreground leading-relaxed">
          <p>{t("insudoseDetail.intro1")}</p>
          <p>{t("insudoseDetail.intro2")}</p>
        </div>

        {/* Features */}
        <div className="space-y-8">
          <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest text-center">
            {t("insudoseDetail.featuresTitle")}
          </h2>

          {/* Feature 1 - Bolus */}
          <div className="glass-card p-8 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-foreground">{t("insudoseDetail.f1.title")}</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">{t("insudoseDetail.f1.li1_strong")}</strong> {t("insudoseDetail.f1.li1")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">{t("insudoseDetail.f1.li2_strong")}</strong> {t("insudoseDetail.f1.li2")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">{t("insudoseDetail.f1.li3_strong")}</strong> {t("insudoseDetail.f1.li3")}</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 - IOB */}
          <div className="glass-card p-8 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-foreground">{t("insudoseDetail.f2.title")}</h3>
            <p className="text-muted-foreground text-sm">{t("insudoseDetail.f2.text")}</p>
          </div>

          {/* Feature 3 - Params */}
          <div className="glass-card p-8 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-foreground">{t("insudoseDetail.f3.title")}</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">{t("insudoseDetail.f3.li1_strong")}</strong> {t("insudoseDetail.f3.li1")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">{t("insudoseDetail.f3.li2_strong")}</strong> {t("insudoseDetail.f3.li2")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">{t("insudoseDetail.f3.li3_strong")}</strong> {t("insudoseDetail.f3.li3")}</span>
              </li>
            </ul>
          </div>

          {/* Feature 4 - Tracking */}
          <div className="glass-card p-8 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-foreground">{t("insudoseDetail.f4.title")}</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">{t("insudoseDetail.f4.li1_strong")}</strong> {t("insudoseDetail.f4.li1")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">{t("insudoseDetail.f4.li2_strong")}</strong> {t("insudoseDetail.f4.li2")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Advantages */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase gradient-text-subtle tracking-widest text-center">
            {t("insudoseDetail.advantagesTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["adv1", "adv2", "adv3", "adv4"].map((key) => (
              <div key={key} className="glass-card p-6 rounded-xl space-y-2">
                <h3 className="text-sm font-bold text-foreground">{t(`insudoseDetail.${key}.title`)}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{t(`insudoseDetail.${key}.text`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Medical warning */}
        <div className="glass-card p-8 rounded-2xl space-y-4 border-l-4 border-destructive">
          <h2 className="text-sm font-bold uppercase text-destructive tracking-widest">
            {t("insudoseDetail.warningTitle")}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">{t("insudoseDetail.warningP1")}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{t("insudoseDetail.warningP2")}</p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground serif-italic">{t("insudoseDetail.cta")}</p>
          <a href="/InsudosePro_v2.apk" download className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {t("insudose.download")}
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-xs">
          <Link to="/installation" className="text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
            {t("insudose.installGuide")}
          </Link>
          <Link to="/disclaimer" className="text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
            {t("insudose.disclaimer")}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default InsudoseDetail;
