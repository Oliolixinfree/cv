import { NavItem } from '@/shared/data/nav-items'

type Props = {
	items: readonly NavItem[]
	className?: string
}

export function DesktopMenu({ items }: Props) {
	return (
		<nav>
			<ul className="hidden md:flex gap-4">
				{items.map(i => (
					<li key={i.label}>
						<a
							href={`#${i.label}`}
							className="font-semibold no-underline hover:underline capitalize"
						>
							{i.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
