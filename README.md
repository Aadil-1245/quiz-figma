# Quiz Figma — Frontend Assignment

This project is my implementation of the Frontend Developer Intern assignment. The goal was to translate the provided Figma design into a working, pixel accurate desktop web interface using modern frontend technologies. I followed the design closely and built an interactive quiz with smooth transitions, clear UI components, and accessible behavior.

## About the Developer
**Name:** Aadil S  
**Roll Number:** RA2211003050036  
**College:** SRM Institute of Science and Technology, Chennai

## Project Overview
This application is a quiz interface built using Next.js, React, TypeScript, and Tailwind CSS. It includes question navigation, animated progress indication, and a results screen with an animated counter. The layout, colors, spacing, and component structure were created by referencing the Figma design provided for the assignment.

## Features Implemented
1. Pixel-perfect layout following the Figma design  
2. Desktop-first responsive structure  
3. Smooth transitions for question changes  
4. Accessible buttons, focus states and ARIA roles  
5. Animated score reveal at the end of the quiz  
6. Mascot component positioned as in the design  
7. Clean folder structure and readable code

## Tech Stack
- Next.js 16  
- React 18  
- TypeScript  
- Tailwind CSS  
- Custom CSS for fine tuning  
- `requestAnimationFrame` for the score counter animation

## Setup Instructions

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Open http://localhost:3000

### Build for production
```bash
npm run build
npm start
```

## Project Structure
```
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
```
## Time Spent
Approximately 8–10 hours (analysis, implementation, styling, polishing, and testing).

## Live Demo
https://quiz-figma-psi.vercel.app/

## Contact
Aadil S — GitHub: https://github.com/Aadil36
