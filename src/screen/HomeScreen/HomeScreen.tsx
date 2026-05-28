import { Achievements } from '@/shared/ui/sections/achievements/Achievements'
import { Contacts } from '@/shared/ui/sections/contacts/Contacts'
import { Experience } from '@/shared/ui/sections/experience/Experience'
import { Hero } from '@/shared/ui/sections/hero/Hero'
import { Projects } from '@/shared/ui/sections/projects/Projects'
import { Skills } from '@/shared/ui/sections/skills/Skills'

export function HomeScreen() {
	return (
		<>
			<Hero />
			{/* <About /> */}
			<Experience />
			<Achievements />
			<Skills />
			<Projects />
			<Contacts />
		</>
	)
}
