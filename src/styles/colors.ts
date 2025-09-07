// Site-wide color palette configuration based on brand colors

export const colors = {
  // Brand Colors
  brand: {
    primary: '#1B2845',    // Logo blue (dark/navy)
    white: '#FFFFFF',      // Pure white
    black: '#000000',      // Pure black
    blue: '#3B5FE3',      // Royal/Medium blue
    darkGray: '#4F4F4F',  // Dark gray
    lightGray: '#B4B4B4', // Light gray
  },

  // Semantic color mapping
  semantic: {
    // Text colors
    text: {
      primary: '#000000',    // Black for primary text
      secondary: '#4F4F4F',  // Dark gray for secondary text
      tertiary: '#B4B4B4',   // Light gray for tertiary text
      inverse: '#FFFFFF',    // White text for dark backgrounds
      accent: '#3B5FE3',     // Blue for emphasized text
    },

    // Background colors
    background: {
      primary: '#FFFFFF',    // White for primary background
      secondary: '#F8F8F8',  // Slight off-white for secondary background
      dark: '#1B2845',       // Navy for dark sections
      accent: '#3B5FE3',     // Blue for accent backgrounds
    },

    // Border colors
    border: {
      light: '#B4B4B4',     // Light gray for subtle borders
      medium: '#4F4F4F',    // Dark gray for medium emphasis
      dark: '#000000',      // Black for high emphasis
      accent: '#3B5FE3',    // Blue for accent borders
    },

    // Button variants
    button: {
      primary: {
        background: '#3B5FE3',
        text: '#FFFFFF',
        hover: '#1B2845',
      },
      secondary: {
        background: '#FFFFFF',
        text: '#1B2845',
        border: '#1B2845',
        hover: '#F8F8F8',
      },
      tertiary: {
        background: 'transparent',
        text: '#4F4F4F',
        hover: '#F8F8F8',
      },
    },

    // Link colors
    link: {
      default: '#3B5FE3',
      hover: '#1B2845',
      visited: '#1B2845',
    },
  },
};

// Helper function to get color with opacity
export const getColorWithOpacity = (color: string, opacity: number) => {
  return color + Math.round(opacity * 255).toString(16).padStart(2, '0');
};

// Create a named export object
const colorExports = {
  colors,
  getColorWithOpacity,
};

export default colorExports;