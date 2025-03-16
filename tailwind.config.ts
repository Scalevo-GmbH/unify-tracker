
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				marketing: {
					blue: '#3B82F6',
					indigo: '#6366F1',
					purple: '#8B5CF6',
					pink: '#EC4899',
					red: '#EF4444',
					orange: '#F97316',
					yellow: '#EAB308',
					green: '#22C55E'
				},
				chart: {
					purple: '#E5DEFF',
					'purple-light': '#F1F0FB',
					'purple-dark': '#9b87f5',
					blue: '#D3E4FD',
					'blue-light': '#E8F2FD',
					green: '#F2FCE2',
					'green-light': '#FAFDF7',
					orange: '#FEC6A1',
					'orange-light': '#FEE8D9',
					pink: '#FFDEE2',
					'pink-light': '#FFF2F4',
					yellow: '#FEF7CD',
					'yellow-light': '#FEFBE6',
					peach: '#FDE1D3'
				}
			},
			fontFamily: {
				sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
				display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
				cal: ['Cal Sans', 'Inter', 'SF Pro Display', 'system-ui', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				},
				fadeIn: {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				slideIn: {
					from: { transform: 'translateX(-20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				shimmer: {
					from: { backgroundPosition: '200% 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				shake: {
					'0%': { transform: 'rotate(0deg)' },
					'5%': { transform: 'rotate(5deg)' },
					'10%': { transform: 'rotate(10deg)' },
					'15%': { transform: 'rotate(15deg)' },
					'20%': { transform: 'rotate(12deg)' },
					'25%': { transform: 'rotate(8deg)' },
					'30%': { transform: 'rotate(5deg)' },
					'35%': { transform: 'rotate(0deg)' },
					'40%': { transform: 'rotate(-5deg)' },
					'45%': { transform: 'rotate(-8deg)' },
					'50%': { transform: 'rotate(-10deg)' },
					'55%': { transform: 'rotate(-8deg)' },
					'60%': { transform: 'rotate(-5deg)' },
					'65%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-in': 'slideIn 0.5s ease-out forwards',
				'shimmer': 'shimmer 2s infinite linear',
				'pulse': 'pulse 2s infinite ease-in-out',
				'float': 'float 3s infinite ease-in-out',
				'shake': 'shake 1.5s ease-in-out infinite',
				'delayed-shake': 'shake 1.5s ease-in-out 1s infinite'
			},
			boxShadow: {
				subtle: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
				card: '0 4px 8px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)',
				elevated: '0 10px 30px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)',
				'neo-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
				'neo-dark': '5px 5px 15px rgba(0,0,0,0.2), -5px -5px 15px rgba(255,255,255,0.05)'
			},
			backdropBlur: {
				xs: '2px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
