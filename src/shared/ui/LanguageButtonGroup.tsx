'use client'

import type { Key } from '@heroui/react'
import { ToggleButton, ToggleButtonGroup } from '@heroui/react'
import { useState } from 'react'

export const LanguageButtonGroup = () => {
	const [selectedKeys, setSelectedKeys] = useState(new Set<Key>(['en']))

	return (
		<ToggleButtonGroup
			selectionMode="single"
			selectedKeys={selectedKeys}
			onSelectionChange={setSelectedKeys}
		>
			<ToggleButton
				aria-label="English"
				id="en"
			>
				EN
			</ToggleButton>
			<ToggleButton
				aria-label="Belarusian Cyrillic"
				id="be-cyrillic"
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
