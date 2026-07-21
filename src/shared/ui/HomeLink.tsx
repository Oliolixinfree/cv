'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import type { Locale } from '@/app/dictionaries'

export function HomeLink() {
	const { lang } = useParams<{ lang: Locale }>()

	return (
		<Link
			href={`/${lang}`}
			onClick={() => {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}}
			className="cursor-pointer text-xl font-bold tracking-tight text-foreground select-none"
			aria-label="Go to top"
		>
			Pavlovich
		</Link>
	)
}
