'use client'

import { Locale } from '@/app/dictionaries'
import type { Key } from '@heroui/react'
import { ToggleButton, ToggleButtonGroup } from '@heroui/react'
import { useParams, usePathname, useRouter } from 'next/navigation'

const locales = ['en', 'be', 'ru'] as const

export const LanguageButtonGroup = () => {
	const router = useRouter()
	const pathname = usePathname()
	const params = useParams<{ lang: string }>()

	const selectedKeys = new Set<Key>([params.lang])

	const handleChange = (keys: Set<Key>) => {
		const next = Array.from(keys)[0] as string
		if (!next || next === params.lang) return
		if (!locales.includes(next as Locale)) return

		const segments = pathname.split('/')
		segments[1] = next
		const hash = window.location.hash
		router.replace(`${segments.join('/')}${hash}`)
	}

	return (
		<ToggleButtonGroup
			selectionMode="single"
			selectedKeys={selectedKeys}
			onSelectionChange={handleChange}
		>
			<ToggleButton
				aria-label="English"
				id="en"
			>
				EN
			</ToggleButton>
			<ToggleButton
				aria-label="Belarusian"
				id="be"
			>
				<ToggleButtonGroup.Separator />
				BE
			</ToggleButton>
			<ToggleButton
				aria-label="Russian"
				id="ru"
			>
				<ToggleButtonGroup.Separator />
				RU
			</ToggleButton>
		</ToggleButtonGroup>
	)
}
