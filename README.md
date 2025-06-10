# Bharath's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast performance with Vite
- 📱 Mobile-first approach
- 🎭 Smooth animations with Framer Motion
- 📧 Working contact form with EmailJS
- 🎯 Interactive cursor effects
- 📊 Skills visualization
- 🏆 Achievements and certifications showcase

## Contact Form Setup

The contact form uses EmailJS to send emails directly from the frontend. To set it up:

### 1. Create EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Create a free account

### 2. Set up Email Service
- In your EmailJS dashboard, go to "Email Services"
- Add a new service (Gmail, Outlook, etc.)
- Note down your Service ID

### 3. Create Email Template
- Go to "Email Templates"
- Create a new template with these variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{message}}` - Message content
  - `{{to_name}}` - Your name (Bharath Kumar Reddy)
- Note down your Template ID

### 4. Get Public Key
- Go to "Account" → "General"
- Copy your Public Key

### 5. Update Configuration
Edit `src/services/emailService.ts` and replace:
```typescript
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
```

### Example Email Template
```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide React Icons
- Vite

## License

© 2024 P.Bharath Kumar Reddy. All rights reserved.