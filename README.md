# Quiz Figma — Frontend

An interactive quiz application built with Next.js 16, React 18, and Tailwind CSS.

## Features
- 🎯 Interactive quiz with multiple choice questions
- 📊 Progress tracking with animated progress bar
- 🎨 Beautiful UI with gradient backgrounds
- 🐾 Cute mascot with animated results
- ⚡ Built with Next.js and TypeScript
- 🎭 Smooth animations and transitions

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts
│   │   ├── page.tsx         # Main quiz page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── QuizCard.tsx     # Quiz logic and UI
│       └── Mascot.tsx       # Mascot component
├── public/
│   └── download.gif         # Mascot GIF
├── package.json
├── tsconfig.json
└── tailwind.config.cjs
```

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Framework**: Next.js 16
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: CSS transitions + requestAnimationFrame

## License
MIT
