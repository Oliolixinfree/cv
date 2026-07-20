'use client'

import Link from 'next/link'

export function HomeLink() {
	return (
		<Link
			href="/"
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
