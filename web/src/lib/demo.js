// Portföy demosu: Mavi Güzellik gerçek bir işletme değildir.
// Etkileşimler çalışır ama hiçbiri kurgusal salona ulaşmaz: WhatsApp aksiyonları, demo adını içeren
// hazır mesajla MK Digital Systems'e gider; telefon ve e-posta tıklanamaz örnek değerlerdir.

// Yeni domain yayına girince https://mk-digitalsystems.com olarak değiştirin.
export const MK_HOME = 'https://mk-digital-systems-seven.vercel.app/tr';

const MK_WHATSAPP = '905456597551';
const INTRO = 'Merhaba MK Digital Systems, Mavi Güzellik demo sitesini inceledim.';

export const mkWhatsappUrl = (request = 'İşletmem için benzer bir web sitesi hakkında görüşmek istiyorum.') =>
  `https://wa.me/${MK_WHATSAPP}?text=${encodeURIComponent(`${INTRO} ${request}`)}`;

export const DEMO_CONTACT = {
  phone: '+90 (000) 000 00 00',
  email: 'info@mavi-guzellik.example',
};
