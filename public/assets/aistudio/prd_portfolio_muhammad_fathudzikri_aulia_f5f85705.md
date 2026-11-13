# Product Requirements Document (PRD) & Technical Architecture
## Website Portfolio: Muhammad Fathudzikri Aulia

---

## 1. Executive Summary & HR/Recruiter Strategy
Website portfolio ini dirancang secara strategis untuk menjembatani **perspektif bisnis/komersial** dan **eksekusi teknis/IT** milik **Muhammad Fathudzikri Aulia**. Dari sudut pandang HRD dan *Hiring Manager* (khususnya untuk posisi **Business Analyst, IT Project Manager, Product Manager, dan Digital Transformation Lead**), kandidat *hybrid* yang menguasai operasional bisnis internasional (ekspor-impor, pengembangan produk fisik, negosiasi B2B) sekaligus rekayasa sistem perangkat lunak (PRD, SRS, UML, ERD, Agile/SDLC, Full-Stack basics) memiliki nilai jual yang sangat langka.

### Tujuan Utama Portfolio:
1. **7-Second Recruiter Hook:** Hero section langsung memvalidasi status ketersediaan (`AVAILABLE FOR WORK`), posisi target, nilai tambah *hybrid* (Business + IT), dan *Call-to-Action* (CTA) instan menuju WhatsApp / Email.
2. **Evidence-Based Competence:** Menyajikan portofolio proyek nyata—baik di ranah digital/aplikasi (ASPENKU) maupun ekosistem bisnis B2B ekspor & produk inovatif (CV Nusagri, Sukabumi Greenstone, Stone Hub Indonesia).
3. **Structured Readability:** Menggunakan tata letak *Bento Grid* modern berbasis referensi desain visual yang bersih, kontras tinggi, hierarki tipografi yang tegas, dan skema warna profesional (*Off-White Surface*, *Charcoal Ink*, *Deep Teal Accent*, dan *Soft Lavender-Periwinkle Glassmorphism*).

---

## 2. Visual Design System & Style Reference
Mengadaptasi gaya desain pada video referensi:
* **Layout Paradigm:** Modular *Bento Grid* dengan sudut membulat besar (`rounded-3xl` / `24px` - `32px`), jarak antar kartu yang lega (`gap-5` / `20px`), dan latar belakang kanvas abu-abu terang (`#F4F5F7`) yang membuat setiap kartu putih (`#FFFFFF`) tampak melayang elegan.
* **Color Palette:**
  * **Canvas Background:** `#F4F5F7` (Soft Off-White / Cool Gray)
  * **Card Surface:** `#FFFFFF` (Pure White) & `#F8F9FA` (Subtle Surface)
  * **Primary Text / Dark CTA:** `#111827` (Deep Charcoal / Almost Black)
  * **Secondary Text:** `#6B7280` (Muted Slate Gray)
  * **Primary Brand Accent (Mission Banner & Social Card):** `#0E8A9E` (Deep Ocean Teal) — merepresentasikan profesionalisme korporat sekaligus identitas alam *Sukabumi Greenstone*.
  * **Glassmorphism & Contact Gradient:** Gradasi lembut putih ke *Periwinkle / Soft Lavender* (`linear-gradient(135deg, #FFFFFF 0%, #E0E7FF 50%, #C7D2FE 100%)`) dengan efek `backdrop-filter: blur(12px)`.
* **Typography:** `Plus Jakarta Sans` / `Inter` — *Geometric Sans-Serif* modern dengan *tight letter-spacing* (`-0.03em`) pada *display heading* untuk kesan tegas dan eksekutif.

---

## 3. Instruksi Aset Foto Profil (Wajib Dilampirkan)
Untuk menjaga konsistensi visual dengan desain kartu profil *glassmorphism* pada Hero Section, pengembang/pengguna wajib melampirkan dan menempatkan aset foto profil dengan spesifikasi berikut:

1. **Sumber Foto:** Gunakan foto profil formal/semi-formal yang telah dilampirkan (berjas hitam dengan *lanyard* **Nusagri**, latar belakang panel kayu hangat — direkomendasikan file `1000454531.jpg` untuk posisi menghadap depan yang simetris atau `1000454533.jpg` untuk *angle* 3/4 dinamis).
2. **Penamaan & Direktori File:** Simpan file foto di dalam folder proyek dengan nama `profile-photo.jpg` (sejajar dengan `index.html`, atau di dalam folder `assets/images/profile-photo.jpg`).
3. **Rasio & Cropping:**
   * Rasio aspek kontainer kartu foto: `4:5` (Portrait).
   * Gunakan properti CSS `object-fit: cover; object-position: top center;` agar bagian wajah dan bahu terbingkai proporsional dan tidak terpotong.
4. **Overlay Kartu Kaca (Glassmorphism Overlay):** Bagian bawah foto akan ditumpuk oleh kartu transparan (`backdrop-filter: blur(14px)`) yang menampilkan ringkasan afiliasi ekosistem bisnis (`CV Nusagri`, `Sukabumi Greenstone`, `Stone Hub Indonesia`) serta ikon tautan langsung (LinkedIn, Website, Instagram, WhatsApp, Email).

---

## 4. Information Architecture & Section Breakdown

### Section 1: Top Navigation Bar
* **Kiri:** Monogram Logo (`MF.`) + Nama Lengkap (`MUHAMMAD FATHUDZIKRI AULIA`).
* **Tengah (Desktop):** Navigasi cepat (*Core Value*, *Selected Work*, *Experience & Education*, *Tech Stack*).
* **Kanan:** Tombol CTA Utama berwarna hitam solid (`rounded-full`): **"Let's Talk"** (mengarah ke form kontak / WhatsApp).

### Section 2: Hero Section (2-Column Asymmetric Bento)
* **Kolom Kiri (60%):**
  * **Status Badge:** Pill hijau-mint dengan titik indikator berdenyut (`AVAILABLE FOR WORK — OPEN TO ROLES & CONSULTING`).
  * **Headline (H1):** *"Bridging Business Strategy & Digital Transformation."* (atau *"Business Analyst & Digital Transformation Lead."*).
  * **Sub-headline:** Ringkasan berbasis CV: Lulusan IT (Digital Transformation) dari IIUM dengan rekam jejak memimpin pengembangan bisnis ekspor B2B di **CV Nusagri** serta perancangan arsitektur sistem (PRD/SRS) di **ASPENKU**.
  * **Primary CTA:** Tombol hitam `"Contact Me"` + tombol sekunder `"Download CV / LinkedIn"`.
* **Kolom Kanan (40%):**
  * **Profile Card:** Menampilkan **foto profil yang dilampirkan** (`profile-photo.jpg`), badge lokasi (`Bogor / Sukabumi, West Java`), badge keahlian (`BUSINESS & IT HYBRID`), dan kartu kaca (*glass card*) di bagian bawah yang menampilkan ekosistem bisnis & tautan cepat.

### Section 3: Mission & Ecosystem Banner (Full-Width Teal Card `#0E8A9E`)
* **Statement:** *"My mission is to translate complex business goals into scalable digital systems and high-value international trade operations."*
* **Ecosystem & Affiliation Strip (Logo/Link Bar):**
  * `CV Nusagri` (`www.cv.nusagri.com`)
  * `Sukabumi Greenstone` (`www.sukabumigreenstone.com`)
  * `Stone Hub Indonesia` (`www.stonehubindonesia.com`)
  * `ASPENKU` (National Export Platform)

### Section 4: Core Competencies / "How Can I Assist You?" (2-Column Split + 2x2 Grid)
* **Kiri:** Judul besar *"How Can I Assist You?"* dengan subteks penjelas nilai tambah lintas fungsi (*Cross-Functional Leadership*).
* **Kanan (4 Kartu Bernomor `01` - `04`):**
  * `01` **Business Analysis & PRD/SRS:** Penyusunan *Product Requirements Document*, *Software Requirements Specification*, *User Stories*, UML, ERD, dan *Wireframing* (Figma/Draw.io).
  * `02` **Digital Transformation & IT PM:** Manajemen siklus hidup pengembangan perangkat lunak (SDLC/Agile/Scrum), tata kelola IT, dan jembatan komunikasi *stakeholder* bisnis ke tim *engineer*.
  * `03` **International Business & Export:** Pengembangan pasar B2B global, negosiasi *buyer* internasional, penyusunan *quotation* ekspor (FOB/CIF), dan manajemen rantai pasok.
  * `04` **Product Development & R&D:** Inovasi produk berbasis material alam (zeolit & batu apung *pet litter*, batu alam arsitektural), uji kelayakan spesifikasi, dan optimasi proses produksi.

### Section 5: Selected Work & Ventures (Bento Showcase Grid)
Menampilkan 4 kartu proyek unggulan dengan tag kategori & tahun:
1. **ASPENKU (Aplikasi Sarana Penunjang Ekspor Nasional untuk Indonesiaku)** `2020–2022`
   * *Tags:* `BUSINESS ANALYSIS` `PRD / SRS` `WIREFRAMING`
   * *Deskripsi:* Menerjemahkan kebutuhan ekosistem ekspor nasional menjadi spesifikasi teknis aplikasi, alur pengguna (*user flows*), dan dokumentasi sistem untuk tim pengembang.
2. **CV Nusagri — International Trade & Pet Litter R&D** `2022–Present`
   * *Tags:* `BUSINESS DEVELOPMENT` `PRODUCT R&D` `EXPORT OPS`
   * *Link:* `https://www.cv.nusagri.com`
   * *Deskripsi:* Memimpin pengembangan bisnis komersial, koordinasi ekspor B2B, serta riset pengembangan produk *pet litter* berbasis zeolit dan batu apung (*pumice*).
3. **Sukabumi Greenstone — Global Natural Stone Export** `Venture / Digital Presence`
   * *Tags:* `GLOBAL B2B` `BRAND & WEB` `SUPPLY CHAIN`
   * *Link:* `https://www.sukabumigreenstone.com` | IG: `@sukabumigreenstone`
   * *Deskripsi:* Ekspansi pasar internasional batu alam hijau khas Sukabumi untuk proyek arsitektur resor dan komersial mancanegara.
4. **Stone Hub Indonesia — Integrated Stone Sourcing Platform** `Venture / Digital Presence`
   * *Tags:* `DIGITAL CATALOG` `B2B SOURCING` `OPERATIONS`
   * *Link:* `https://www.stonehubindonesia.com`
   * *Deskripsi:* Hub digital terintegrasi untuk kurasi dan distribusi material batu alam Indonesia dengan standar spesifikasi ekspor.

### Section 6: Experience, Education & Technical Stack (Bento Cards)
* **Work Experience:**
  * **CV Nusagri** — Business Development Manager (`2022 – Present`)
  * **ASPENKU** — Business Analyst (`Nov 2020 – Nov 2022`)
* **Education & Training:**
  * **International Islamic University Malaysia (IIUM)** — Bachelor's Degree in Information Technology (Major: Digital Transformation)
  * **Selected Programs:** BINAR Academy (Product Management), PACMANN Non-Degree Program, freeCodeCamp (Full-Stack Development), Google Digital Garage, HubSpot Academy, MySkill.
* **Technical Toolkit & Languages:**
  * *Tools:* Figma/FigJam, Jira/Trello, Notion, Draw.io/Lucidchart, Power BI, MS Excel.
  * *Tech & Methods:* Agile/Scrum, SDLC, UML, ERD, HTML/CSS, JavaScript, React, Node.js, Python, SQL, Git/GitHub.
  * *Languages:* Indonesian (Native), English (Full Professional Proficiency).

### Section 7: Interactive Contact Card (Gradient Lavender/Periwinkle Banner)
* Formulir kontak interaktif yang langsung terintegrasi untuk mengirim pesan via **WhatsApp (`wa.me/6281513687278`)** atau **Email (`export@sukabumigreenstone.com` / `mfathudzikriaulia@gmail.com`)** dengan *pre-filled message* otomatis.

### Section 8: Footer ("Let's connect and chat" + Pill Badges)
* **Kiri:** Tipografi besar *"Let's connect and chat"* + tautan email interaktif.
* **Kanan (Teal Card `#0E8A9E`):** Kumpulan *interactive floating pill buttons* miring dinamis sesuai referensi video:
  * `LINKEDIN`
  * `WHATSAPP`
  * `INSTAGRAM` (`@sukabumigreenstone`)
  * `CV. NUSAGRI`
  * `SUKABUMI GREENSTONE`
  * `STONE HUB ID`

---

## 5. Acceptance Criteria (HR & Technical Checklist)
* [x] Seluruh data sesuai 100% dengan CV resmi Muhammad Fathudzikri Aulia (tanpa fabrikasi pengalaman).
* [x] Seluruh tautan bisnis & kontak terpasang aktif dan akurat (`www.cv.nusagri.com`, `www.sukabumigreenstone.com`, `www.stonehubindonesia.com`, `export@sukabumigreenstone.com`, `wa.me/6281513687278`, `instagram.com/sukabumigreenstone`, LinkedIn).
* [x] Responsif sempurna di perangkat *Desktop*, *Tablet*, dan *Mobile*.
* [x] Instruksi penempatan foto profil tercantum jelas di dalam PRD dan siap dirender di HTML.