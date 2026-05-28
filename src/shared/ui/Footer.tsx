export function Footer() {
	const now = new Date()

	return (
		<footer className="border-t border-border bg-background/70 backdrop-blur-lg">
			<div className="mx-auto max-w-5xl py-8 px-4 sm:px-6">
				<p className="text-sm text-muted text-center w-full">
					&copy; {now.getFullYear()} Ivan Pavlovich
				</p>
			</div>
		</footer>
	)
}
