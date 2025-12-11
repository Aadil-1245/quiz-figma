This project is my implementation of the Frontend Developer Intern assignment provided by the company. The goal of the task was to take the given Figma design and translate it into a working, pixel accurate desktop web interface using modern frontend technologies. I have followed the design as closely as possible and built an interactive quiz experience with smooth transitions, clean UI components, and accessible behavior.

(1) About the Developer:
Name: Aadil S
Roll Number: RA2211003050036
College: SRM Institute of Science and Technology, Chennai

(2) Project Overview:

This application is a quiz interface built using Next.js, React, TypeScript, and Tailwind CSS. It includes question navigation, animated progress indication, and a results screen with an animated counter.
The layout, colors, spacing, and component structure have been created by referencing the Figma design provided in the assignment.

(3) Features Implemented:

  1.Pixel-perfect layout following the Figma design
  2.Desktop-first responsive structure
  3.Smooth transitions for question changes
  4.Accessible buttons, focus states, and ARIA roles
  5.Animated score reveal at the end of the quiz
  6.A mascot component placed as shown in the design
  7.Organized folder structure with readable, maintainable code

(4) Tech Stack Used:

 1.Next.js 16 – Framework for routing and performance
 2.React 18 – Component-based UI
 3.TypeScript – Type safety and cleaner development
 4.Tailwind CSS – Styling and design utility system
 5.Custom CSS – For fine-tuned aesthetic elements
 6.requestAnimationFrame – For the score count-up animation

(5) Setup Instructions:

1. Install Dependencies
npm install
2. Run Development Server
npm run dev
Open your browser and navigate to:
http://localhost:3000
3. Build for Production
npm run build
npm start

(6) Project Structure:
  
  ├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── QuizCard.tsx
│       └── Mascot.tsx
├── public/
│   └── download.gif
├── package.json
├── tsconfig.json
├── tailwind.config.cjs
└── README.md


LIVE DEMO LINK : https://quiz-figma-psi.vercel.app/


 
