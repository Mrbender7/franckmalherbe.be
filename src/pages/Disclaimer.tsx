import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="min-h-screen selection:bg-primary/20">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24 space-y-12">

        <Link to="/" className="text-sm text-primary hover:text-accent transition-colors font-medium">
          ← Retour à l'accueil
        </Link>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight gradient-text">
            Décharge de Responsabilité
          </h1>
          <p className="text-muted-foreground serif-italic">
            Conditions d'utilisation des applications distribuées hors store officiel
          </p>
        </header>

        <div className="glass-card p-8 rounded-2xl space-y-6 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">1. Distribution hors store</h2>
            <p>
              Les fichiers APK proposés sur ce site sont distribués en dehors du Google Play Store. 
              En téléchargeant et installant ces fichiers, vous reconnaissez agir en connaissance de cause 
              et acceptez les risques liés à l'installation d'applications provenant de sources tierces.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. Signature numérique</h2>
            <p>
              Tous les APK distribués via ce site sont signés numériquement pour garantir leur intégrité. 
              Vérifiez toujours que le fichier provient bien de <strong className="text-foreground">franckmalherbe.be</strong> 
              {" "}avant de procéder à l'installation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. Données de santé (Insudose Pro)</h2>
            <p>
              L'application Insudose Pro traite des données sensibles liées à la santé. Ces données sont 
              chiffrées localement (AES) et ne quittent <strong className="text-foreground">jamais</strong> votre appareil. 
              Aucune donnée n'est transmise à un serveur distant.
            </p>
            <p>
              <strong className="text-foreground">Insudose Pro n'est pas un dispositif médical agréé.</strong> Il ne remplace 
              en aucun cas l'avis d'un médecin ou d'un professionnel de santé. L'utilisateur est seul responsable 
              des décisions thérapeutiques prises sur base des calculs fournis par l'application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Limitation de responsabilité</h2>
            <p>
              Franck Malherbe ne pourra être tenu responsable de tout dommage direct ou indirect résultant 
              de l'utilisation des applications distribuées via ce site. L'utilisateur accepte d'utiliser 
              ces applications à ses propres risques.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">5. Contact</h2>
            <p>
              Pour toute question relative à cette décharge ou aux applications : {" "}
              <a href="mailto:contact@franckmalherbe.be" className="text-primary hover:text-accent transition-colors underline underline-offset-2">
                contact@franckmalherbe.be
              </a>
            </p>
          </section>
        </div>

        <p className="text-xs text-muted-foreground/60 text-center">
          Dernière mise à jour : mars 2026
        </p>

      </div>
    </div>
  );
};

export default Disclaimer;
