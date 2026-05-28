// import type { ComponentType, SVGProps } from 'react'
// import {
// 	Wind,
// 	ShieldCheck,
// 	Brain,
// 	Hammer,
// 	Bot,
// 	LayoutDashboard
// } from 'lucide-react'

// export const ACHIEVEMENTS: {
// 	icon: ComponentType<SVGProps<SVGSVGElement>>
// 	title: string
// 	description: string
// }[] = [
// 	{ icon: Hammer, title: '15x', description: 'Build speed' },
// 	{ icon: Wind, title: '35%', description: 'Acceleration of data collection' },
// 	{ icon: Wind, title: '2h → 2min', description: 'SEO report automation' },
// 	{
// 		icon: Bot,
// 		title: 'Automation',
// 		description: 'Automation of business processes'
// 	},
// 	{
// 		icon: LayoutDashboard,
// 		title: 'Google ADS & Wordstat',
// 		description: 'Building analytical dashboards'
// 	},
// 	{
// 		icon: ShieldCheck,
// 		title: 'Infisical integration',
// 		description: 'Manage identities, secrets, certs, and access'
// 	},
// 	{ icon: Brain, title: 'AI', description: 'AI integration' },
// 	{
// 		icon: Brain,
// 		title: 'Vertex AI',
// 		description: 'Google Vertex AI integration'
// 	}
// ] as const
import type { ComponentType, SVGProps } from 'react'
import {
	Wind,
	ShieldCheck,
	Brain,
	Hammer,
	Bot,
	LayoutDashboard,
	Code,
	Clock,
	RefreshCw,
	Users
} from 'lucide-react'

export const ACHIEVEMENTS: {
	icon: ComponentType<SVGProps<SVGSVGElement>>
	title: string
	description: string
}[] = [
	{ icon: Hammer, title: '15x', description: 'Faster builds & dev startup' },
	{ icon: Wind, title: '35%', description: 'Reduced data processing time' },
	{ icon: Bot, title: '2h → 2min', description: 'Automated SEO reports' },
	{
		icon: Brain,
		title: 'AI Workflows',
		description: 'Integrated AI into business processes'
	},
	{
		icon: LayoutDashboard,
		title: 'Google Ads & Wordstat',
		description: 'Built analytical dashboards'
	},
	{
		icon: ShieldCheck,
		title: 'Infisical',
		description: 'Centralized secrets & access management'
	},

	{
		icon: Code,
		title: 'Solo Frontend',
		description: 'Owned frontend development end-to-end'
	},
	{
		icon: Clock,
		title: 'Hours → Minutes',
		description: 'Automated PPC data collection'
	},
	{
		icon: RefreshCw,
		title: 'Modern Stack',
		description: 'Migrated legacy projects'
	},
	{
		icon: Users,
		title: 'HR Automation',
		description: 'Automated candidate import'
	}
] as const
