import type { PropsWithChildren } from 'react'
import { notFound } from 'next/navigation'
import { Header } from '@/shared/ui/Header'
import { Footer } from '@/shared/ui/Footer'
import { ScrollToTop } from '@/shared/ui/ScrollToTop'
import { hasLocale } from '@/app/dictionaries'

export default async function PublicLayout({
	children,
	params
}: PropsWithChildren<LayoutProps<'/[lang]'>>) {
	const { lang } = await params
	if (!hasLocale(lang)) notFound()

	return (
		<>
			<Header lang={lang} />
			<main>{children}</main>
			<Footer lang={lang} />
			<ScrollToTop />
		</>
	)
}
