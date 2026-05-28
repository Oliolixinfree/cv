'use client'

import { LanguageButtonGroup } from './LanguageButtonGroup'
import { ThemeSwitch } from './ThemeSwitch'
import { navItems } from '../data/nav-items'
import Link from 'next/link'
import { DesktopMenu } from './navigation/DesktopMenu'
import { MobileMenu } from './navigation/MobileMenu'

export function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-lg">
			<div className="mx-auto flex py-6 max-w-5xl items-center justify-between px-4 sm:px-6">
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
				<DesktopMenu items={navItems} />
				<MobileMenu
					className="md:hidden"
					items={navItems}
				/>
				<div className="hidden md:flex gap-2 ">
					<LanguageButtonGroup />
					<ThemeSwitch />
				</div>
			</div>
		</header>
	)
}
