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

export const ACHIEVEMENTS = [
	{ id: 'buildSpeed', icon: Hammer },
	{ id: 'dataProcessing', icon: Wind },
	{ id: 'seoReports', icon: Bot },
	{ id: 'aiWorkflows', icon: Brain },
	{ id: 'adsDashboards', icon: LayoutDashboard },
	{ id: 'infisical', icon: ShieldCheck },
	{ id: 'soloFrontend', icon: Code },
	{ id: 'ppcAutomation', icon: Clock },
	{ id: 'modernStack', icon: RefreshCw },
	{ id: 'hrAutomation', icon: Users }
] as const satisfies {
	id: string
	icon: ComponentType<SVGProps<SVGSVGElement>>
}[]

export type AchievementId = (typeof ACHIEVEMENTS)[number]['id']
