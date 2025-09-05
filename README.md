# BRAR PMG - Property Management Website

A modern, responsive property management website built with Next.js and styled with Tailwind CSS. The website features property listings, image galleries, and booking widgets.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/brar-pmg.git
cd brar-pmg
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the values in `.env.local` with your actual widget IDs
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables

The following environment variables need to be set in your `.env.local` file:

```env
# Hospitable Widget IDs
NEXT_PUBLIC_VIP107_WIDGET_ID=your_vip107_widget_id
NEXT_PUBLIC_ALLENDATE_WIDGET_ID=your_allendate_widget_id

# Hospitable Base URL
NEXT_PUBLIC_HOSPITABLE_BASE_URL=your_hospitable_base_url
```

⚠️ **Important**: Never commit your `.env.local` file to version control. It's already added to `.gitignore`.

### Adding Property Images

1. Place property images in the appropriate directory:
```
src/assets/images/properties/
├── property-name/
    ├── Bedroom/
    ├── Living room/
    ├── Kitchen/
    └── ...
```

2. Use `.jpg`, `.jpeg`, `.png`, or `.webp` formats (AVIF not currently supported)

## 🏗️ Project Structure

```
src/
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── properties/      # Properties listing
│   └── property/        # Individual property pages
├── assets/
│   └── images/          # Property images
├── components/          # Reusable components
└── types/               # TypeScript type definitions
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request