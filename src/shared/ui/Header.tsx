import { LanguageButtonGroup } from './LanguageButtonGroup'
import { ThemeSwitch } from './ThemeSwitch'
import { navItems } from '../data/nav-items'
import { DesktopMenu } from './navigation/DesktopMenu'
import { MobileMenu } from './navigation/MobileMenu'
import { getDictionary, Locale } from '@/app/dictionaries'
import { HomeLink } from './HomeLink'

interface Props {
	lang: Locale
}

export async function Header({ lang }: Props) {
	const dict = await getDictionary(lang)

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-lg">
			<div className="mx-auto flex py-6 max-w-5xl items-center justify-between px-4 sm:px-6">
				<HomeLink />
				<DesktopMenu
					items={navItems}
					dict={dict.nav}
				/>
				<MobileMenu
					className="md:hidden"
					items={navItems}
					dict={dict.nav}
					uiDict={dict.ui}
					themeDict={dict.theme}
				/>
				<div className="hidden md:flex gap-2 ">
					<LanguageButtonGroup />
					<ThemeSwitch dict={dict.theme} />
				</div>
			</div>
		</header>
	)
}
