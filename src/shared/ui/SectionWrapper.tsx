import { HTMLAttributes, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
	id?: HTMLAttributes<HTMLElement>['id']
}>

export function SectionWrapper({ children, id }: Props) {
	return (
		<section
			id={id}
			className="py-20 px-4 sm:px-6 scroll-mt-6"
		>
			<div className="mx-auto max-w-5xl">{children}</div>
		</section>
	)
}
