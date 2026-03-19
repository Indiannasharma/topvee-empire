#!/usr/bin/env node

/**
 * Topvee Media Project Launcher
 * 
 * This script helps you easily launch either the standalone HTML website
 * or the Next.js development server.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Topvee Media Project Launcher\n');

// Check if we're in the right directory
if (!fs.existsSync('index.html') || !fs.existsSync('topvee-empire')) {
  console.error('❌ Error: This script must be run from the topvee-mvp root directory');
  console.log('📁 Expected structure:');
  console.log('   ├── index.html (standalone website)');
  console.log('   └── topvee-empire/ (Next.js app)');
  process.exit(1);
}

console.log('Available projects:');
console.log('1. 🌐 Standalone HTML Website (index.html)');
console.log('2. ⚛️  Next.js React Application (topvee-empire/)');
console.log('');

const args = process.argv.slice(2);
const command = args[0];

if (!command) {
  console.log('Usage: node launch.js [html|next]');
  console.log('');
  console.log('Examples:');
  console.log('  node launch.js html    - Open standalone website in browser');
  console.log('  node launch.js next    - Start Next.js development server');
  console.log('  node launch.js help    - Show this help message');
  process.exit(1);
}

switch (command.toLowerCase()) {
  case 'html':
    console.log('✅ Launching standalone HTML website...');
    try {
      const indexPath = path.resolve('index.html');
      const url = `file://${indexPath}`;
      
      // Try to open in browser (cross-platform)
      if (process.platform === 'win32') {
        execSync(`start "" "${url}"`);
      } else if (process.platform === 'darwin') {
        execSync(`open "${url}"`);
      } else {
        execSync(`xdg-open "${url}"`);
      }
      
      console.log('🌐 Website opened in your default browser');
      console.log('💡 No installation or build process required!');
    } catch (error) {
      console.error('❌ Failed to open browser:', error.message);
      console.log('📁 You can manually open: ' + path.resolve('index.html'));
    }
    break;

  case 'next':
    console.log('✅ Launching Next.js development server...');
    
    // Check if Next.js dependencies are installed
    if (!fs.existsSync('topvee-empire/node_modules')) {
      console.log('📦 Installing Next.js dependencies...');
      try {
        execSync('npm install', { cwd: 'topvee-empire', stdio: 'inherit' });
      } catch (error) {
        console.error('❌ Failed to install dependencies:', error.message);
        process.exit(1);
      }
    }
    
    console.log('🚀 Starting development server...');
    console.log('📍 Opening: http://localhost:3000');
    console.log('💡 Press Ctrl+C to stop the server');
    
    try {
      execSync('npm run dev', { cwd: 'topvee-empire', stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Failed to start development server:', error.message);
      console.log('');
      console.log('🔧 Troubleshooting:');
      console.log('  1. Make sure Node.js is installed (version 18 or higher)');
      console.log('  2. Navigate to topvee-empire/ directory');
      console.log('  3. Run: npm install');
      console.log('  4. Run: npm run dev');
    }
    break;

  case 'help':
    console.log('🎯 Topvee Media Project Launcher Help\n');
    console.log('This repository contains two separate projects:\n');
    console.log('🌐 Standalone HTML Website (index.html)');
    console.log('   ✅ No dependencies required');
    console.log('   ✅ No build process needed');
    console.log('   ✅ Works directly in browser');
    console.log('   ✅ Complete crypto trading platform UI\n');
    console.log('⚛️  Next.js React Application (topvee-empire/)');
    console.log('   ✅ Modern React framework');
    console.log('   ✅ TypeScript support');
    console.log('   ✅ Development server with hot reload');
    console.log('   ✅ Production build capabilities\n');
    console.log('Usage: node launch.js [html|next]');
    console.log('');
    console.log('Examples:');
    console.log('  node launch.js html    - Open standalone website in browser');
    console.log('  node launch.js next    - Start Next.js development server');
    break;

  default:
    console.error('❌ Unknown command: ' + command);
    console.log('');
    console.log('Available commands:');
    console.log('  html   - Launch standalone HTML website');
    console.log('  next   - Launch Next.js development server');
    console.log('  help   - Show help message');
    process.exit(1);
}