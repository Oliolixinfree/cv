import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist.'
}

export default function NotFound() {
	return (
		<div>
			<h1>404 - Page Not Found</h1>
			<p>This page does not exist.</p>
			<Link href="/">Return Home</Link>
		</div>
	)
}
