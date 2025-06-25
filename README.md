# Naukri Guru

A modern recruitment platform built with Next.js, Tailwind CSS, and lucide-react icons, providing seamless experiences for recruiters, job seekers, and admins.

## Features

- Beautiful, consistent theme across all pages (beige, green, yellow color scheme)
- Role-based dashboards: Recruiter, Job Seeker, Admin
- AI-powered interview scheduling and management
- Job posting and application management
- User management with status badges and icons
- Authentication (login/signup) with branded UI
- Responsive design with modern fonts ('Inter', 'Poppins')
- Interactive UI elements (tabs, filters, tables, cards)
- Iconography from lucide-react for visual cues

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)
- Custom Google Fonts ('Inter', 'Poppins')

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── (auth)/         # Login/Signup pages
│   │   ├── recruiter/      # Recruiter dashboard, job postings, AI interviews
│   │   ├── admin/          # Admin dashboard, user/job management
│   │   ├── jobseeker/      # Job seeker dashboard (WIP)
│   │   └── page.tsx        # Home page (NaukriGuruLanding)
│   └── components/         # Navbar, cards, UI components
├── public/
├── tailwind.config.js
├── package.json
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Customization

- **Theme:** Edit Tailwind config or use custom CSS classes for colors/fonts.
- **Branding:** Update logo in Navbar components and home page.
- **Navigation:** Modify Navbar links for new pages/roles.
- **Add Features:** Extend pages in `src/app/` and components in `src/components/`.

## Deployment

- Deploy easily to Vercel, Netlify, or any Next.js-compatible platform.
- Add environment variables and backend API endpoints as needed.

## Screenshots

_Add screenshots of your UI here for better documentation._

## License

MIT
