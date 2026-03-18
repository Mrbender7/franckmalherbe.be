import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Contact
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
          Vous avez un projet ou une question ? N'hésitez pas à me contacter.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="mailto:contact@franckmalherbe.be"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            <Mail className="w-4 h-4" />
            Envoyer un email
          </a>
          <a
            href="https://linkedin.com/in/franck-malherbe-7b64201a4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-display text-sm font-semibold hover:bg-secondary transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
