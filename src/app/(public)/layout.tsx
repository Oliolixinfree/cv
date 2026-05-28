import type { PropsWithChildren } from 'react'
import { Header } from '@/shared/ui/Header'
import { Footer } from '@/shared/ui/Footer'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
