# GitHub'a Yükleme Adımları

Projeyi GitHub'a yüklemek için aşağıdaki adımları sırayla uygulayın.

---

## 1. GitHub'da yeni depo oluşturma

1. Tarayıcıda **https://github.com** adresine gidin ve giriş yapın.
2. Sağ üstteki **"+"** menüsüne tıklayın → **"New repository"** seçin.
3. **Repository name:** Örnek: `mavi-guzellik` veya `guzellik-salonu-demo`
4. **Description:** (İsteğe bağlı) Örn: "Mavi Güzellik salonu demo sitesi — MK Digital Systems"
5. **Public** seçili olsun.
6. **"Add a README file"** kutusunu **işaretlemeyin** (zaten projede dosyalar var).
7. **"Create repository"** butonuna tıklayın.

---

## 2. Bilgisayarınızda proje klasörünü hazırlama

Proje klasöründe **PowerShell** veya **Terminal** açın (örn: `c:\Users\mavik\Desktop\güzellik salonu`).

```powershell
cd "c:\Users\mavik\Desktop\güzellik salonu"
```

---

## 3. Tüm değişiklikleri ekleyip commit atma

```powershell
git add .
git status
```

`git status` ile eklenen dosyaları kontrol edin. Sonra:

```powershell
git commit -m "Mavi Güzellik demo sitesi - MK Digital Systems"
```

---

## 4. GitHub deposunu “remote” olarak ekleme

GitHub’da oluşturduğunuz deponun sayfasında yeşil **"Code"** butonuna tıklayın.  
**HTTPS** seçili olsun; görünen URL’i kopyalayın (örn: `https://github.com/KULLANICI_ADINIZ/repo-adi.git`).

Sonra terminalde (KULLANICI_ADINIZ ve repo-adi kısımlarını kendi bilgilerinizle değiştirin):

```powershell
git remote add origin https://github.com/KULLANICI_ADINIZ/repo-adi.git
```

Örnek:
```powershell
git remote add origin https://github.com/mkdigitalsystems/mavi-guzellik.git
```

Eğer “remote origin already exists” uyarısı alırsanız:

```powershell
git remote set-url origin https://github.com/KULLANICI_ADINIZ/repo-adi.git
```

---

## 5. Ana dalı “main” yapıp ilk gönderimi yapma

```powershell
git branch -M main
git push -u origin main
```

İlk seferde GitHub kullanıcı adı ve şifre (veya **Personal Access Token**) istenebilir. Token kullanıyorsanız, şifre yerine token’ı girin.

---

## Özet (tek tek komutlar)

| Adım | Komut |
|------|--------|
| 1 | GitHub’da yeni repo oluştur (README ekleme) |
| 2 | `cd "c:\Users\mavik\Desktop\güzellik salonu"` |
| 3 | `git add .` |
| 4 | `git commit -m "Mavi Güzellik demo sitesi - MK Digital Systems"` |
| 5 | `git remote add origin https://github.com/KULLANICI_ADINIZ/REPO-ADI.git` |
| 6 | `git branch -M main` |
| 7 | `git push -u origin main` |

---

## Sonraki güncellemeler için

Kodda değişiklik yaptıktan sonra tekrar yüklemek için:

```powershell
cd "c:\Users\mavik\Desktop\güzellik salonu"
git add .
git commit -m "Kısa açıklama buraya"
git push
```

Bu adımları takip ederek projeyi GitHub’a yükleyebilirsiniz.
