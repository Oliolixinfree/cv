'use client'

import { Button } from '@heroui/react'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{isVisible && (
				<Button
					isIconOnly
					aria-label="Scroll to top"
					variant="outline"
					onClick={scrollToTop}
				>
					<ChevronUp className="h-6 w-6" />
				</Button>
			)}
		</div>
	)
}
