import { groupKeys, SKILLS } from '@/shared/data/skills'
import { Card, Chip } from '@heroui/react'
import { SectionWrapper } from '../../SectionWrapper'
import { getDictionary, type Locale } from '@/app/dictionaries'

interface Props {
	lang: Locale
}

export async function Skills({ lang }: Props) {
	const dict = await getDictionary(lang)

	return (
		<SectionWrapper id="skills">
			<h2 className="text-foreground capitalize text-3xl font-bold mb-10">
				{dict.skills.sectionTitle}
			</h2>
			<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{groupKeys.map(key => (
					<Card
						key={key}
						variant="default"
					>
						<Card.Header>
							<Card.Title>{dict.skills.groups[key]}</Card.Title>
						</Card.Header>
						<Card.Content>
							<div className="flex flex-wrap gap-2">
								{SKILLS[key].map(skill => (
									<Chip
										key={skill}
										size="lg"
										variant="soft"
										color="accent"
									>
										{skill}
									</Chip>
								))}
							</div>
						</Card.Content>
					</Card>
				))}
			</div>
		</SectionWrapper>
	)
}
