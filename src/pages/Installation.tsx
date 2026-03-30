import { Link } from "react-router-dom";

const Installation = () => {
  return (
    <div className="min-h-screen selection:bg-primary/20">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24 space-y-12">

        <Link to="/" className="text-sm text-primary hover:text-accent transition-colors font-medium">
          ← Retour à l'accueil
        </Link>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight gradient-text">
            Guide d'installation APK
          </h1>
          <p className="text-muted-foreground serif-italic">
            Comment installer Insudose Pro sur votre appareil Android
          </p>
        </header>

        <div className="glass-card p-8 rounded-2xl space-y-8 text-muted-foreground leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">Pourquoi un APK ?</h2>
            <p>
              Insudose Pro est distribué sous forme de fichier APK signé, en dehors du Google Play Store.
              Cela garantit une indépendance totale : aucune collecte de données par un store tiers,
              aucun tracker publicitaire, et un contrôle complet sur la distribution.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Étapes d'installation</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Télécharger le fichier APK</h3>
                  <p className="text-sm">
                    Depuis la page d'accueil, cliquez sur le bouton <strong className="text-foreground">Télécharger</strong> de la carte Insudose Pro.
                    Le fichier sera sauvegardé dans votre dossier « Téléchargements ».
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Autoriser les sources inconnues</h3>
                  <p className="text-sm">
                    Android bloque par défaut l'installation d'applications ne provenant pas du Play Store.
                    Vous devez autoriser votre navigateur (ou gestionnaire de fichiers) à installer des APK :
                  </p>
                  <ul className="text-sm space-y-1 ml-4 list-disc">
                    <li>Ouvrez <strong className="text-foreground">Paramètres → Sécurité</strong> (ou <strong className="text-foreground">Paramètres → Applications → Accès spécial</strong>)</li>
                    <li>Cherchez <strong className="text-foreground">« Installer des applis inconnues »</strong></li>
                    <li>Sélectionnez votre navigateur (Chrome, Firefox…) et activez l'autorisation</li>
                  </ul>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Le chemin exact peut varier selon votre version d'Android et le fabricant de votre téléphone.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Installer l'application</h3>
                  <p className="text-sm">
                    Ouvrez le fichier APK téléchargé. Android vous demandera de confirmer l'installation.
                    Appuyez sur <strong className="text-foreground">Installer</strong>. L'application apparaîtra ensuite dans votre tiroir d'applications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</span>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Révoquer l'autorisation (recommandé)</h3>
                  <p className="text-sm">
                    Une fois l'installation terminée, retournez dans les paramètres et désactivez
                    l'autorisation « sources inconnues » pour votre navigateur. Cela renforce la sécurité de votre appareil.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="text-lg font-bold text-foreground">Sécurité</h2>
            <p className="text-sm">
              Le fichier APK est <strong className="text-foreground">signé numériquement</strong> par Franck Malherbe.
              Cette signature garantit que le fichier n'a pas été modifié depuis sa publication.
              Téléchargez toujours l'APK depuis <strong className="text-foreground">franckmalherbe.be</strong> uniquement.
            </p>
          </section>

        </div>

        <div className="flex gap-4 text-xs">
          <Link to="/disclaimer" className="text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
            Décharge de responsabilité →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Installation;
