const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Franck Malherbe — Liège, Belgique —{" "}
          <a
            href="mailto:contact@franckmalherbe.be"
            className="hover:text-primary transition-colors duration-200"
          >
            contact@franckmalherbe.be
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
