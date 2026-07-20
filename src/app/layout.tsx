import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/shared/providers/theme-provider'

const sans = Inter({
	variable: '--font-sans',
	subsets: ['latin', 'cyrillic']
})

const mono = IBM_Plex_Mono({
	weight: ['400', '500', '600', '700'],
	variable: '--font-mono',
	subsets: ['latin', 'cyrillic']
})

export async function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'be' }, { lang: 'ru' }]
}

export const metadata: Metadata = {
	title: 'Ivan Pavlovich | Frontend Developer',
	description: 'cv'
}

export default async function RootLayout({
	children,
	params
}: LayoutProps<'/[lang]'>) {
	return (
		<html
			lang={(await params).lang}
			className={`${sans.variable} ${mono.variable} h-full antialiased`}
			data-scroll-behavior="smooth"
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
