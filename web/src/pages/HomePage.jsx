import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Droplets, Scissors, Heart, Star, Calendar, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionBackground from "@/components/SectionBackground.jsx";

const carouselImages = [
  { url: "https://images.unsplash.com/photo-1597236527164-7635ad319156", alt: "Makyaj", animation: "fadeLeft" },
  { url: "https://images.unsplash.com/photo-1664958884838-705b1518406f", alt: "Cilt Bakımı", animation: "slideUp" },
  { url: "https://images.unsplash.com/photo-1694345906570-e0958e1cd8a3", alt: "Saç Tasarımı", animation: "zoomIn" },
  { url: "https://images.unsplash.com/photo-1696841212541-449ca29397cc", alt: "Masaj", animation: "fadeRight" },
  { url: "https://images.unsplash.com/photo-1700760933910-d3c03aa18b65", alt: "Tırnak", animation: "rotateIn" },
  { url: "https://images.unsplash.com/photo-1664958884838-705b1518406f", alt: "Epilasyon", animation: "scaleIn" },
];

const getAnimation = (type) => {
  switch (type) {
    case "fadeLeft":
      return { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, transition: { duration: 1 } } };
    case "slideUp":
      return { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, transition: { duration: 1 } } };
    case "zoomIn":
      return { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, transition: { duration: 1 } } };
    case "fadeRight":
      return { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, transition: { duration: 1 } } };
    case "rotateIn":
      return { initial: { opacity: 0, rotate: -10, scale: 1.1 }, animate: { opacity: 1, rotate: 0, scale: 1 }, exit: { opacity: 0, transition: { duration: 1 } } };
    case "scaleIn":
      return { initial: { opacity: 0, scale: 1.2 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, transition: { duration: 1 } } };
    default:
      return { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  }
};

const services = [
  {
    icon: Droplets,
    title: "Cilt Bakımı",
    desc: "Cilt tipinize ve ihtiyaçlarınıza özel, derinlemesine profesyonel bakım protokolleri.",
  },
  {
    icon: Sparkles,
    title: "Makyaj Hizmetleri",
    desc: "Özel gün, gelin ve profesyonel makyaj uygulamalarıyla kusursuz bir görünüm.",
  },
  {
    icon: Scissors,
    title: "Saç Tasarımı",
    desc: "Modern kesim, renklendirme ve bakım ile saçlarınıza yeniden şekil veriyoruz.",
  },
  {
    icon: Heart,
    title: "Masaj Terapisi",
    desc: "Rahatlatıcı masaj ve spa ritüelleriyle bedeninizi ve zihninizi yenileyin.",
  },
  {
    icon: Star,
    title: "Tırnak Tasarımı",
    desc: "Kalıcı oje, nail art ve medikal manikür/pedikür ile bakımlı eller ve ayaklar.",
  },
  {
    icon: Sparkles,
    title: "Epilasyon",
    desc: "Konforlu lazer epilasyon seanslarıyla uzun süreli pürüzsüzlük deneyimi.",
  },
];

const instagramPhotos = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1598550874175-4d7c9256dd4a",
  "https://images.unsplash.com/photo-1619983081563-430f63602796",
  "https://images.unsplash.com/photo-1595475207225-428b62bda831",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b",
];

export default function HomePage() {
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 pt-28">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImg}
            src={carouselImages[currentImg].url}
            alt={carouselImages[currentImg].alt}
            className="absolute inset-0 w-full h-full object-cover"
            variants={getAnimation(carouselImages[currentImg].animation)}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-slate-900/65 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/15 text-primary-foreground backdrop-blur-md border border-primary/30 text-xs md:text-sm font-medium mb-6 tracking-wide">
              Kendinize Zaman Ayırın
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Profesyonel Güzellik ve Bakım Deneyimi
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light max-w-2xl mx-auto">
              Cilt bakımı, saç tasarımı, makyaj ve kişisel bakım hizmetleriyle kendinizi her zaman daha iyi hissedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-10 text-lg rounded-full shadow-xl shadow-emerald-700/30 bg-emerald-500 hover:bg-emerald-500/90 text-white"
                onClick={() => navigate("/randevu")}
              >
                <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp&apos;tan Randevu Al
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg rounded-full bg-white/8 text-white border-white/25 hover:bg-white/15 backdrop-blur-md"
              >
                <Link to="/hizmetler">Hizmetleri İncele</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <SectionBackground
        image="https://images.unsplash.com/photo-1595867818082-083862f3d8a3"
        className="bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Öne Çıkan Hizmetlerimiz</h2>
            <p className="text-lg text-muted-foreground">
              Size özel tasarlanmış profesyonel bakım ve güzellik uygulamalarımızla tanışın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Card className="h-full border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group bg-white rounded-3xl">
                    <CardContent className="p-7">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2.5 text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 min-h-[60px]">
                        {service.desc}
                      </p>
                      <Link
                        to="/hizmetler"
                        className="text-primary font-medium inline-flex items-center text-sm hover:underline"
                      >
                        Detaylı Bilgi <span className="ml-1">→</span>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionBackground>

      {/* About Preview Section */}
      <SectionBackground
        image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
        className="bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
                  alt="Salon İç Mekan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs font-bold text-primary"
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    ))}
                  </div>
                  <span className="font-bold text-xl">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">Örnek değerlendirme alanı</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Güzelliğinize Değer Katan Profesyonel Dokunuşlar
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hijyenik, modern ve konforlu bir ortamda; alanında uzman ekibimizle kişiye özel bakım deneyimi
                sunuyoruz. Hedefimiz, salonumuzdan her çıktığınızda kendinizi daha iyi ve daha özgüvenli hissetmeniz.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Alanında uzman, sertifikalı bakım ve güzellik ekibi",
                  "Hijyenik, modern ve güvenli uygulama alanları",
                  "Kişiye özel analiz ve bakım planları",
                  "Memnuniyet odaklı, sıcak ve samimi hizmet anlayışı",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/hakkimizda">Biz Kimiz?</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionBackground>

      {/* Instagram Section */}
      <SectionBackground
        image="https://images.unsplash.com/photo-1522337660859-02fbefca4702"
        className="py-20 bg-slate-50 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Instagram&apos;da Bizi Takip Edin
              </h2>
              <p className="text-md text-muted-foreground">
                Güncel çalışmalarımızı, salon atmosferimizi ve bakım detaylarını Instagram hesabımızda keşfedin.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="rounded-full h-11 px-6 border-slate-300 hover:border-primary hover:text-primary"
            >
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram Profiline Git
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {instagramPhotos.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden bg-slate-200 group shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={src}
                  alt={`Instagram görseli ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>
    </main>
  );
}

