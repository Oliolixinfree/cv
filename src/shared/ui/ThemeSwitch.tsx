'use client'

import { Button, Dropdown, Label } from '@heroui/react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeSwitch() {
	const { setTheme } = useTheme()

	return (
		<Dropdown>
			<Button
				isIconOnly
				aria-label="Theme Menu"
				variant="outline"
			>
				<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
				<span className="sr-only">Toggle theme</span>
			</Button>
			<Dropdown.Popover
				placement="bottom end"
				className="min-w-40"
			>
				<Dropdown.Menu>
					<Dropdown.Item
						id="light-theme"
						textValue="Light Theme"
						onClick={() => setTheme('light')}
					>
						<Sun className="size-4 shrink-0 text-muted" />
						<Label>Light</Label>
					</Dropdown.Item>
					<Dropdown.Item
						id="dark-theme"
						textValue="Dart Theme"
						onClick={() => setTheme('dark')}
					>
						<Moon className="size-4 shrink-0 text-muted" />
						<Label>Dark</Label>
					</Dropdown.Item>
					<Dropdown.Item
						id="system-theme"
						textValue="System Theme"
						onClick={() => setTheme('system')}
					>
						<Monitor className="size-4 shrink-0 text-muted" />
						<Label>System</Label>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown.Popover>
		</Dropdown>
	)
}
