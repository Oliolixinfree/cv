import { ComponentType, SVGProps } from 'react'

export type Nav = {
	icon: ComponentType<SVGProps<SVGSVGElement>>
	label: string
}
