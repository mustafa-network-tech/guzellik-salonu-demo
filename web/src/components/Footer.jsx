import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground tracking-tight">
                Mavi Güzellik
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Profesyonel ekibimiz ve modern dokunuşlarla; hijyenik, konforlu ve samimi bir atmosferde güzelliğinize değer katıyoruz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-lg font-semibold text-foreground mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-muted-foreground hover:text-primary transition-colors">Hizmetlerimiz</Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-muted-foreground hover:text-primary transition-colors">Biz Kimiz</Link>
              </li>
              <li>
                <Link to="/randevu" className="text-muted-foreground hover:text-primary transition-colors">Randevu Al</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-lg font-semibold text-foreground mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Güzellik Caddesi No: 123, Şişli, İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+905551234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +90 555 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@maviguzelliksalonu.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@maviguzelliksalonu.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border/80 space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
            <p>© {currentYear} Mavi Güzellik Salonu. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-primary transition-colors">Kullanım Koşulları</a>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground/90">
            Bu site demo amacıyla hazırlanmıştır — Mavi Güzellik | MK Digital Systems
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
