# Property Images

This directory contains images for each property, organized by property name and then by category/room type.

## Current Structure

```
src/assets/images/properties/
├── allendate-unit-e/          # Allendate Unit E property
│   ├── Bedroom/              # Bedroom images
│   ├── Living room/          # Living room images
│   ├── Kitchen/              # Kitchen images
│   └── ...
└── vip-107/                  # VIP-107 property
    ├── Bedroom/              # 4 bedroom images
    ├── Living room/          # 6 living room images
    ├── Full Kitchen/         # 3 kitchen images
    ├── Full bathroom/        # 2 bathroom images
    ├── Pool/                 # 2 pool images
    └── Dining area/          # 1 dining area image
```

## How to Add Images

### 1. **Organize by Category**
Create folders for each room/area type:
- `Bedroom/` - Bedroom images
- `Living room/` - Living room images  
- `Kitchen/` - Kitchen images
- `Full bathroom/` - Bathroom images
- `Pool/` - Pool/outdoor images
- `Dining area/` - Dining room images
- `Exterior/` - Exterior/building images

### 2. **Image Naming Convention**
- Use consistent naming: `image1.jpg`, `image2.jpg`, etc.
- Or descriptive names: `main-view.jpg`, `bedroom-corner.jpg`
- **Recommended formats**: `.jpg`, `.jpeg`, `.png`, `.webp`
- **Note**: AVIF format is not currently supported by Turbopack

### 3. **Update Property Page**
Import images by category in your property page:

```typescript
// Import images by category
import bedroom1 from '@/assets/images/properties/vip-107/Bedroom/image1.jpg';
import bedroom2 from '@/assets/images/properties/vip-107/Bedroom/image2.jpg';

// Organize into categories
const imageCategories = [
  {
    name: "Bedroom",
    images: [bedroom1, bedroom2]
  },
  {
    name: "Living Room", 
    images: [living1, living2]
  }
];
```

## Features

### ✅ **Categorized Gallery**
- Images grouped by room/area type
- Tabbed navigation between categories
- Thumbnail grid for each category
- Image count display per category

### ✅ **Responsive Design**
- Mobile-friendly thumbnail grid
- Adaptive image sizing
- Touch-friendly navigation

### ✅ **Performance Optimized**
- Next.js automatic image optimization
- Lazy loading for better performance
- WebP/AVIF format support

### ✅ **Type Safety**
- Full TypeScript support
- Proper type definitions for image imports
- Compile-time error checking

## Benefits

- 🗂️ **Better Organization**: Images grouped by room type
- 🚀 **Performance**: Automatic optimization and lazy loading
- 📱 **Responsive**: Works on all device sizes
- 🔧 **Maintainable**: Clear folder structure and naming
- 🎯 **User Experience**: Easy navigation between image categories
- 📦 **Bundled**: Images included in build, no external dependencies
