# Monica Homeopathy Firebase Website

A modern, responsive website for Dr. Monica's homeopathy practice, featuring appointment booking, AI-powered treatment suggestions, and comprehensive health information.

## 🌿 Project Overview

**Naturopath Navigator** is a Next.js-based web application designed to showcase homeopathic services, facilitate appointment scheduling, and provide valuable health information to patients in both the US and Indian markets.

## ✨ Features

- **Homepage with Professional Bio**: Detailed introduction to Dr. Monica's expertise and approach
- **Service Pages**: Comprehensive information about available homeopathic treatments
- **Patient Testimonials**: Real patient experiences to build trust and credibility
- **Appointment Booking System**: Easy-to-use booking interface with location mapping
- **Informative Blog**: Health articles and wellness tips optimized for SEO
- **AI Treatment Tool**: Personalized treatment suggestions powered by Google's Genkit
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **SEO Optimized**: Targeted keywords for both US and Indian audiences

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.2.3 with TypeScript
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI components with custom styling
- **Database/Backend**: Firebase
- **AI Integration**: Google Genkit for treatment recommendations
- **Maps**: Google Maps integration for clinic location
- **Form Handling**: React Hook Form with Zod validation
- **Analytics**: Firebase Analytics

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase account and project setup
- Google Maps API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Monica_Homeopathy_Firebase_Website.git
cd Monica_Homeopathy_Firebase_Website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) to view the application.

### Development Scripts

- `npm run dev` - Start development server on port 9002
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit AI development server
- `npm run genkit:watch` - Start Genkit with hot reload

## 📁 Project Structure

```
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── about/       # About page
│   │   ├── blog/        # Blog section with dynamic routes
│   │   ├── book-appointment/  # Appointment booking
│   │   ├── services/    # Service pages with dynamic routes
│   │   └── testimonials/      # Patient testimonials
│   ├── components/      # Reusable React components
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   └── ui/          # UI components (shadcn/ui)
│   ├── ai/              # AI integration with Genkit
│   ├── lib/             # Utility functions and constants
│   └── hooks/           # Custom React hooks
├── docs/                # Documentation
└── public/              # Static assets
```

## 🎨 Design System

The website follows a calming, nature-inspired design:

- **Primary Color**: Light teal (#99DDD9) - healing and tranquility
- **Background**: Off-white (#F2F4F3) - clean and soothing
- **Accent**: Soft coral (#E9967A) - warmth and vitality
- **Typography**: Clean sans-serif fonts for readability
- **Icons**: Naturalistic icons representing wellness concepts

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication, Firestore, and Storage services
3. Copy your Firebase configuration to `.env.local`

### Google Maps Integration

1. Enable Maps JavaScript API in Google Cloud Console
2. Create API key with appropriate restrictions
3. Add to `.env.local` as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Optimization

- Meta tags configured for each page
- Structured data for local business
- Sitemap generation
- Optimized for keywords targeting US and Indian markets

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

For any queries regarding this project, please contact the development team.

---

Built with ❤️ using Next.js and Firebase
