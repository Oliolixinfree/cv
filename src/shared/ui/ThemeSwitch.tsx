'use client'

import { Button, Dropdown, Label } from '@heroui/react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { Dictionary } from '@/app/dictionaries'

interface Props {
	dict: Dictionary['theme']
}

export function ThemeSwitch({ dict }: Props) {
	const { setTheme } = useTheme()

	return (
		<Dropdown>
			<Button
				isIconOnly
				aria-label={dict.themeMenu}
				variant="outline"
			>
				<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
				<span className="sr-only">{dict.toggleTheme}</span>
			</Button>
			<Dropdown.Popover
				placement="bottom end"
				className="min-w-40"
			>
				<Dropdown.Menu>
					<Dropdown.Item
						id="light-theme"
						textValue={dict.light}
						onClick={() => setTheme('light')}
					>
						<Sun className="size-4 shrink-0 text-muted" />
						<Label>{dict.light}</Label>
					</Dropdown.Item>
					<Dropdown.Item
						id="dark-theme"
						textValue={dict.dark}
						onClick={() => setTheme('dark')}
					>
						<Moon className="size-4 shrink-0 text-muted" />
						<Label>{dict.dark}</Label>
					</Dropdown.Item>
					<Dropdown.Item
						id="system-theme"
						textValue={dict.system}
						onClick={() => setTheme('system')}
					>
						<Monitor className="size-4 shrink-0 text-muted" />
						<Label>{dict.system}</Label>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown.Popover>
		</Dropdown>
	)
}
