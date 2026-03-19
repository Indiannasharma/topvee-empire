# Topvee Media - Dual Project Repository

This repository contains **two separate projects** for Topvee Media:

## 🎯 Project Overview

**Topvee Media** is a crypto trading education platform offering courses, live trading sessions, and market analysis content.

## 📁 Project Structure

```
topvee-mvp/
├── index.html              # Standalone HTML/CSS/JS website (ROOT PROJECT)
├── style.css              # CSS styles for standalone site
├── package-lock.json      # Empty package-lock (not used for standalone site)
├── README.md             # This file
└── topvee-empire/        # Next.js React application (SUB-PROJECT)
    ├── package.json
    ├── next.config.ts
    ├── src/
    │   └── app/
    │       ├── page.tsx
    │       └── layout.tsx
    └── [other Next.js files]
```

## 🚀 Project 1: Standalone HTML Website (RECOMMENDED)

**Location**: Root directory (`index.html`)

A complete, standalone website that works immediately without any build process.

### Features
- ✅ No dependencies required
- ✅ No build process needed
- ✅ Works directly in browser
- ✅ Complete crypto trading platform UI
- ✅ Video library integration
- ✅ Live streaming section
- ✅ Course catalog

### How to Use
1. Open `index.html` in any web browser
2. No installation or build process required
3. Website is fully functional

### Technologies
- HTML5
- CSS3 (Tailwind CDN)
- JavaScript
- Font Awesome icons
- YouTube embeds

## 🚀 Project 2: Next.js React Application

**Location**: `topvee-empire/` directory

A modern React application built with Next.js for more advanced development.

### Features
- ✅ Modern React framework
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ Image optimization
- ✅ Server-side rendering capabilities

### How to Use
1. Navigate to the `topvee-empire/` directory:
   ```bash
   cd topvee-empire
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Technologies
- Next.js 15.3.2
- React 19.0.0
- TypeScript
- Tailwind CSS
- ESLint

## 🤔 Which Project Should You Use?

### Use the Standalone HTML Website if:
- ✅ You want to view the website immediately
- ✅ No development setup required
- ✅ Simple deployment (just upload files)
- ✅ No Node.js or build tools needed

### Use the Next.js Application if:
- ✅ You're a developer wanting to modify the code
- ✅ You need a modern development environment
- ✅ You want to add new features with React
- ✅ You plan to deploy to Vercel or similar platforms

## 🔧 Development Setup

### For Next.js Development
1. Install Node.js (version 18 or higher)
2. Navigate to `topvee-empire/` directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start development server

### For Standalone Website
No setup required! Just open `index.html` in a browser.

## 🌐 Live Features

Both projects include:
- 🎓 Course catalog with pricing
- 📺 Video library with YouTube integration
- 📱 Live streaming section
- 🎨 Neon cyberpunk design theme
- 📊 Crypto price ticker
- 📱 Mobile-responsive design

## 🎨 Design Theme

Both projects feature:
- Cyberpunk/neon aesthetic
- Emerald green color scheme (#22ff88)
- Glitch effects and animations
- Modern card-based layout
- Smooth scrolling navigation

## 📞 Support

For issues with:
- **Standalone website**: Check browser console for errors
- **Next.js app**: Run `npm run dev` and check terminal output

## 📝 Notes

- The standalone HTML website is the primary, production-ready version
- The Next.js application is for development and advanced customization
- Both projects have identical functionality and design
- Choose the appropriate project based on your needs