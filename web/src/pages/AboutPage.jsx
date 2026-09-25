import React from "react";
import { motion } from "framer-motion";
import { Target, Heart, ShieldCheck, Star } from "lucide-react";
import SectionBackground from "@/components/SectionBackground.jsx";

const team = [
  {
    name: "Ayşe Yılmaz",
    role: "Kurucu & Cilt Uzmanı",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    desc: "15 yıllık medikal estetik ve cilt bakımı tecrübesi.",
  },
  {
    name: "Zeynep Kaya",
    role: "Makyaj Artisti",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    desc: "Uluslararası sertifikalı profesyonel makyaj uzmanı.",
  },
  {
    name: "Elif Demir",
    role: "Saç Tasarımcısı",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    desc: "Modern kesim ve renklendirme tekniklerinde usta.",
  },
  {
    name: "Merve Arslan",
    role: "Masaj Terapisti",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    desc: "Uzakdoğu masaj teknikleri ve refleksoloji uzmanı.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 pt-32 pb-24">
      {/* Story Section */}
      <SectionBackground
        image="https://images.unsplash.com/photo-1522337660859-02fbefca4702"
        className="pb-16 pt-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Güzelliğinize Değer Katan Profesyonel Dokunuşlar
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Mavi Güzellik Salonu&apos;nda her misafirimizi, ihtiyacına göre şekillenen kişisel bir bakım yolculuğuna
                davet ediyoruz. Amacımız; yalnızca güzel görünmenizi değil, kendinizi güvende ve iyi hissetmenizi sağlamak.
              </p>
              <p>
                Hijyenik ve modern salonumuzda, alanında uzman ekibimizle cilt, saç ve kişisel bakım uygulamalarını bir
                araya getiriyor; her adımda konforunuzu ve sağlığınızı önceliklendiriyoruz.
              </p>
              <p>
                Sizi dinleyen, beklentilerinizi anlayan ve sonuç odaklı çalışan bir ekip ile, düzenli olarak tercih
                edebileceğiniz gerçekçi ve sürdürülebilir bakım deneyimleri sunuyoruz.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702"
                alt="Salon Ekibi"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SectionBackground>

      {/* Values Section */}
      <SectionBackground
        image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
        className="bg-primary/5 py-24 mb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Yaklaşımımız",
                desc: "Her misafirimizi; cilt tipi, yaşam tarzı ve beklentilerine göre analiz ediyor, kişiye özel bakım planları hazırlıyoruz.",
              },
              {
                icon: ShieldCheck,
                title: "Hijyen ve Güvenlik",
                desc: "Tüm ekipmanlarımızı her uygulama sonrası titizlikle sterilize ediyor, salonumuzu sürekli temiz ve güvenli tutuyoruz.",
              },
              {
                icon: Heart,
                title: "Müşteri Memnuniyeti",
                desc: "Randevu anından çıkışınıza kadar, güler yüzlü ve şeffaf iletişimle kendinizi rahat ve değerli hissetmenizi önemsiyoruz.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-border"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionBackground>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Uzman Kadromuz</h2>
          <p className="text-lg text-muted-foreground">
            Alanında uzman, deneyimli ve güler yüzlü ekibimizle tanışın.
            <span className="mt-2 block text-sm">Örnek ekip tanıtımıdır; kişiler kurgusaldır.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <SectionBackground
        image="https://images.unsplash.com/photo-1596727147705-61a532a659bd"
        className="bg-slate-50 py-20 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Müşteri Yorumları</h2>
            <p className="text-lg text-muted-foreground">
              Örnek yorumlardır; gerçek müşteri yorumları değildir. Canlı bir projede işletmenin kendi yorumları yer alır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Burcu K.",
                text: "İlk girdiğim andan itibaren çok ilgili ve profesyonel bir ekip ile karşılaştım. Hizmet kalitesi gerçekten çok iyi.",
              },
              {
                name: "Seda T.",
                text: "Cilt bakımı sonrası farkı hemen hissettim. Hem hijyen hem ilgi açısından içime çok sindi.",
              },
              {
                name: "Gizem A.",
                text: "Randevu süreci çok kolaydı, çalışanlar çok güler yüzlüydü. Kesinlikle tekrar geleceğim.",
              },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">&ldquo;{review.text}&rdquo;</p>
                <div className="text-sm font-semibold text-foreground">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionBackground>
    </main>
  );
}
