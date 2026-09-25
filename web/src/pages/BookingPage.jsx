import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MessageCircle, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mkWhatsappUrl } from "@/lib/demo.js";

export default function BookingPage() {
  // Demo: the button shows the booking hand-off instead of messaging a fictional salon.
  const [demoOpen, setDemoOpen] = useState(false);
  const handleWhatsApp = () => setDemoOpen(true);

  return (
    <main className="flex-1 pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Hızlı Randevu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Form doldurmanıza gerek kalmadan, WhatsApp üzerinden bizimle iletişime geçerek hızlıca randevu
            oluşturabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-border flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 px-4 py-1 text-sm font-medium mb-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Üzerinden Randevu
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Tek tıkla WhatsApp&apos;tan randevu oluşturun
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Hangi hizmeti almak istediğinizi ve size uygun tarih–saat aralığını WhatsApp üzerinden bize iletmeniz
                yeterli. Ekibimiz en kısa sürede size dönüş yaparak randevunuzu kesinleştirir.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Form, kayıt veya uzun bekleme süreci yok.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Tüm randevu detaylarını tek konuşmada netleştirin.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Dilediğiniz zaman mesaj atarak randevunuzu güncelleyebilirsiniz.
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Button
                onClick={handleWhatsApp}
                className="w-full h-14 text-lg rounded-xl bg-emerald-500 hover:bg-emerald-500/90 text-white shadow-lg shadow-emerald-700/30"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp&apos;tan Yazın
              </Button>
              {demoOpen && (
                <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm" role="status">
                  <p className="font-semibold text-emerald-900">Bu bir örnek projedir.</p>
                  <p className="mt-1 text-emerald-800">
                    Gerçek bir randevu oluşturulmaz ve mesaj kurgusal salona gitmez. İşletmeniz için benzer bir WhatsApp
                    randevu akışı hakkında MK Digital Systems ile görüşebilirsiniz.
                  </p>
                  <a
                    href={mkWhatsappUrl("İşletmem için benzer bir WhatsApp randevu akışı hakkında görüşmek istiyorum.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
                  >
                    WhatsApp’tan MK Digital Systems ile görüşün
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Çalışma Saatleri
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Pazartesi - Cuma</span>
                  <span className="font-medium text-foreground">09:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Cumartesi</span>
                  <span className="font-medium text-foreground">10:00 - 19:00</span>
                </li>
                <li className="flex justify-between text-destructive">
                  <span>Pazar</span>
                  <span className="font-medium">Kapalı</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" />
                Not
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Randevu yoğunluğuna göre, tercih ettiğiniz saat aralığında küçük değişiklikler önerebiliriz. Size en
                uygun alternatifi birlikte belirleriz.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

