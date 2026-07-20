import { getDictionary, Locale } from '@/app/dictionaries'

interface Props {
	lang: Locale
}

export async function Footer({ lang }: Props) {
	const dict = await getDictionary(lang)
	const now = new Date()

	return (
		<footer className="border-t border-border bg-background/70 backdrop-blur-lg">
			<div className="mx-auto max-w-5xl py-8 px-4 sm:px-6">
				<p className="text-sm text-muted text-center w-full">
					&copy; {now.getFullYear()} {dict.footer.fullName}
				</p>
			</div>
		</footer>
	)
}
