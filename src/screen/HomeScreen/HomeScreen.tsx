import { Locale } from '@/app/dictionaries'
import { Achievements } from '@/shared/ui/sections/achievements/Achievements'
import { Contacts } from '@/shared/ui/sections/contacts/Contacts'
import { Experience } from '@/shared/ui/sections/experience/Experience'
import { Hero } from '@/shared/ui/sections/hero/Hero'
import { Skills } from '@/shared/ui/sections/skills/Skills'

interface Props {
	lang: Locale
}

export function HomeScreen({ lang }: Props) {
	return (
		<>
			<Hero lang={lang} />
			<Experience lang={lang} />
			<Achievements lang={lang} />
			<Skills lang={lang} />
			{/* <Projects lang={lang} /> */}
			<Contacts lang={lang} />
		</>
	)
}
