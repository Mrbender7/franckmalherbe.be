const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Franck Malherbe. Tous droits réservés.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/franck-malherbe-7b64201a4"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@franckmalherbe.be"
            className="font-display text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
