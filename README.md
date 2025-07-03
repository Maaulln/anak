# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ANAK - Analisis Neuropsikologi dan Aktivitas Kognitif

**ANAK** adalah aplikasi berbasis web yang dirancang untuk membantu orang tua dalam menganalisis perkembangan neuropsikologi dan aktivitas kognitif anak usia 4–12 tahun melalui tes interaktif dan game edukatif.

## 🚀 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Design System**: Atomic Design
- **Responsive**: Mobile-first → desktop

## 📂 Struktur Folder (Utama)

```
src/
├── assets/              # Logo, ilustrasi, dll
├── components/          
│   ├── atoms/           # Input, Button, Label, dll
│   ├── molecules/       # InputGroup, PasswordToggle
│   └── organisms/       # LoginForm, RegisterForm
├── firebase/            # Firebase config & logic
├── pages/               # Login, Register, Dashboard, dsb
├── routes/              # Routing setup
├── styles/              # Tailwind config + global CSS
├── App.jsx              # Main app
└── main.jsx             # Entry point
```

## 🔑 Fitur Utama

- Login & Register (Email/Password, Google)
- Tes kognitif interaktif untuk anak
- Dashboard perkembangan anak
- Konsultasi dengan psikolog (versi lanjut)
- Sistem poin dan reward
- UI ringan dan responsif

## 🧱 Design Guideline

- Desain berdasarkan [Figma Prototype](https://www.figma.com/design/4UWiJEeiglW5RPH3tlmTrf/Prototype-ANAK?node-id=101-27&t=VLNCHLLzfkyuoHDC-1)
- Warna dan tipografi konsisten dengan branding
- Komponen disusun berdasarkan atomic design
- Penerapan prinsip clean code & reusable

## 🛠️ Cara Menjalankan Project

```bash
# 1. Install dependensi
npm install
npm install react-router-dom
npm install lucide-react
npm install react-icons
npm install @tailwindcss/forms

# 2. Jalankan lokal
npm run dev

# 3. Build untuk production
npm run build

# 4. Deploy (jika pakai Firebase)
firebase deploy
```

---

> Project ini masih dalam tahap pengembangan awal. Untuk feedback, kontribusi, atau pertanyaan, silakan hubungi tim pengembang.