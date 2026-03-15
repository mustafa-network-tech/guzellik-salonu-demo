import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const detailedServices = [
  {
    id: "cilt-bakimi",
    title: "Cilt Bakımı",
    desc: "Cildinizin ihtiyacına özel derinlemesine temizlik, nemlendirme ve anti-aging protokolleri. Hydrafacial ve dermapen uygulamaları ile pürüzsüz bir cilt.",
    price: "₺850",
    image: "https://images.unsplash.com/photo-1664958884838-705b1518406f",
  },
  {
    id: "makyaj",
    title: "Makyaj Hizmetleri",
    desc: "Gelin makyajı, gece makyajı ve günlük profesyonel makyaj uygulamaları. Dünyaca ünlü markaların ürünleriyle kalıcı ve kusursuz görünüm.",
    price: "₺1.200",
    image: "https://images.unsplash.com/photo-1597236527164-7635ad319156",
  },
  {
    id: "sac-tasarimi",
    title: "Saç Tasarımı",
    desc: "Yüz hatlarınıza uygun modern kesimler, ombre, sombre, röfle ve keratin bakım işlemleri. Saçlarınıza sağlık ve parlaklık kazandırıyoruz.",
    price: "₺950",
    image: "https://images.unsplash.com/photo-1694345906570-e0958e1cd8a3",
  },
  {
    id: "masaj",
    title: "Masaj Terapisi",
    desc: "İsveç masajı, aromaterapi, medikal masaj ve refleksoloji seçenekleriyle stresten arının. Uzman terapistlerimizle tam rahatlama.",
    price: "₺750",
    image: "https://images.unsplash.com/photo-1696841212541-449ca29397cc",
  },
  {
    id: "tirnak",
    title: "Tırnak Tasarımı",
    desc: "Kalıcı oje, jel protez tırnak, nail art ve medikal manikür/pedikür işlemleri. Elleriniz ve ayaklarınız için kusursuz bakım.",
    price: "₺450",
    image: "https://images.unsplash.com/photo-1700760933910-d3c03aa18b65",
  },
  {
    id: "epilasyon",
    title: "Lazer Epilasyon",
    desc: "Buz lazer teknolojisi ile acısız, dört mevsim uygulanabilen kalıcı epilasyon çözümleri. Pürüzsüz bir tene kavuşmanın en güvenli yolu.",
    price: "₺1.500",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Hizmetlerimiz
          </h1>
          <p className="text-lg text-muted-foreground">
            Güzelliğinizi ön plana çıkaracak, kendinizi özel hissetmenizi sağlayacak profesyonel bakım seçeneklerimiz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm border border-primary/10">
                  Başlangıç {service.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-7 flex-1">{service.desc}</p>
                <Button asChild className="w-full rounded-xl h-12 text-base mt-auto shadow-sm">
                  <Link to={`/randevu?service=${service.id}`}>
                    <Calendar className="w-4 h-4 mr-2" /> Randevu Al
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

