export const navItems = [
	{ icon: 'graduationCap', label: 'experience' },
	{ icon: 'trophy', label: 'achievements' },
	{ icon: 'blocks', label: 'skills' },
	// { icon: 'container', label: 'projects' },
	{ icon: 'contact', label: 'contacts' }
] as const

export type NavItem = (typeof navItems)[number]
export type IconName = NavItem['icon']
