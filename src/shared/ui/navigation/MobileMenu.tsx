'use client'

import { Button, Drawer, useOverlayState } from '@heroui/react'
import { LucideIcon, Menu } from 'lucide-react'
import { Blocks, Contact, GraduationCap, Trophy } from 'lucide-react'
import { LanguageButtonGroup } from '../LanguageButtonGroup'
import { ThemeSwitch } from '../ThemeSwitch'
import { IconName, NavItem } from '@/shared/data/nav-items'
import { Dictionary } from '@/app/dictionaries'

type Props = {
	items: readonly NavItem[]
	dict: Dictionary['nav']
	uiDict: Dictionary['ui']
	themeDict: Dictionary['theme']
	className?: string
}

const iconMap: Record<IconName, LucideIcon> = {
	// fileUser: FileUser,
	blocks: Blocks,
	graduationCap: GraduationCap,
	trophy: Trophy,
	// container: Container,
	contact: Contact
}

export function MobileMenu({
	items,
	dict,
	uiDict,
	themeDict,
	className
}: Props) {
	const state = useOverlayState()

	const handleClick = () => {
		state.close()
	}

	return (
		<div className={className}>
			<Drawer state={state}>
				<Button
					onPress={state.open}
					variant="outline"
				>
					<Menu />
					{uiDict.menu}
				</Button>
				<Drawer.Backdrop>
					<Drawer.Content placement="top">
						<Drawer.Dialog>
							<Drawer.CloseTrigger />
							<Drawer.Header>
								<Drawer.Heading>{uiDict.navigation}</Drawer.Heading>
							</Drawer.Header>
							<Drawer.Body>
								<nav className="flex flex-col gap-1">
									{items.map(item => {
										const Icon = iconMap[item.icon]

										return (
											<a
												key={item.label}
												href={`#${item.label}`}
												onClick={handleClick}
												className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default capitalize"
											>
												<Icon className="size-5 text-muted" />
												{dict[item.label]}
											</a>
										)
									})}
								</nav>
							</Drawer.Body>
							<Drawer.Footer>
								<div className="flex gap-4">
									<LanguageButtonGroup />
									<ThemeSwitch dict={themeDict} />
								</div>
							</Drawer.Footer>
						</Drawer.Dialog>
					</Drawer.Content>
				</Drawer.Backdrop>
			</Drawer>
		</div>
	)
}
