// export const navItems: {
// 	icon: ComponentType<SVGProps<SVGSVGElement>>
// 	label: string
// }[] = [
// 	{ icon: FileUser, label: 'about' },
// 	{ icon: Blocks, label: 'skills' },
// 	{ icon: GraduationCap, label: 'experience' },
// 	{ icon: Trophy, label: 'achievements' },
// 	{ icon: Container, label: 'projects' },
// 	{ icon: Contact, label: 'contacts' }
// ]

export const navItems = [
	{ icon: 'fileUser', label: 'about' },
	{ icon: 'blocks', label: 'skills' },
	{ icon: 'graduationCap', label: 'experience' },
	{ icon: 'trophy', label: 'achievements' },
	{ icon: 'container', label: 'projects' },
	{ icon: 'contact', label: 'contacts' }
] as const

export type NavItem = (typeof navItems)[number]
export type IconName = NavItem['icon']
