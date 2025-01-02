import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			backgroundColor: '#000000',
  			primary: '#D9D810',
  			secondary: '#FF0000',
  			secondaryText: '#D9D810',
  			primaryText: '#F29519',
  			bodyText: '#ECEDEE',
  			bgCard: '#3f3f4666'
  		},
  		fontSize: {
  			h1: '32px',
  			h2: '28px',
  			bodySmall: '14px',
  			bodyDefault: '16px',
  			bodyLager: '18px'
  		},
  		lineHeight: {
  			h1: '42px',
  			h2: '36px',
  			bodySmall: '18px',
  			bodyDefault: '24px',
  			bodyLager: '28px'
  		},
  		borderRadius: {
  			lg: '10px',
  			md: '8px',
  			sm: '6px'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'fade-in-delay': 'fadeIn 0.5s ease-in-out 0.3s forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
