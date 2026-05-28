import { SKILLS } from '@/shared/data/skills'
import { Card, Chip } from '@heroui/react'
import { SectionWrapper } from '../../SectionWrapper'

export function Skills() {
	const groups = [
		{ key: 'core' as const, label: 'Core' },
		{ key: 'frameworksAndLibraries' as const, label: 'Frameworks & Libraries' },
		{ key: 'styling' as const, label: 'Styling & UI' },
		{ key: 'stateManagement' as const, label: 'State Management' },
		{ key: 'toolsAndInfrastructure' as const, label: 'Tools & Infrastructure' },
		{ key: 'other' as const, label: 'Other' }
	]

	return (
		<SectionWrapper id="skills">
			<h2 className="text-foreground capitalize text-3xl font-bold mb-10">
				Skills
			</h2>
			<div className="grid gap-6  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{groups.map(({ key, label }) => (
					<Card
						key={key}
						variant="default"
					>
						<Card.Header>
							<Card.Title>{label}</Card.Title>
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
