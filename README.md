# Cybersecurity Website

A modern, responsive cybersecurity website built with React, Tailwind CSS, and Vite.

## Ubuntu 20.04 Installation Guide

1. Update system packages:
```bash
sudo apt update
sudo apt upgrade
```

2. Install Node.js and npm:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Verify installation:
```bash
node --version
npm --version
```

4. Install git:
```bash
sudo apt install git
```

5. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

6. Install dependencies:
```bash
npm install
```

7. Start the development server:
```bash
npm run dev
```

8. For production build:
```bash
npm run build
```

9. To serve the production build:
```bash
npm install -g serve
serve -s dist
```

The website will be available at `http://localhost:5173` (development) or `http://localhost:5000` (production).

## Features

- Responsive design
- Modern UI with animations
- Contact form with toast notifications
- Statistics display
- Security features showcase

## Technology Stack

- React
- Typescript
- Tailwind CSS
- Vite
- Lucide Icons
- Shadcn/ui Components