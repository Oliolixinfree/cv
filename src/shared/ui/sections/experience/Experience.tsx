import { EXPERIENCE } from '@/shared/data/experience'
import { Card } from '@heroui/react'
import { SectionWrapper } from '../../SectionWrapper'
import { getDictionary, Locale } from '@/app/dictionaries'

interface Props {
	lang: Locale
}

export async function Experience({ lang }: Props) {
	const dict = await getDictionary(lang)

	return (
		<SectionWrapper id="experience">
			<h2 className="text-foreground capitalize text-3xl font-bold mb-10">
				Experience
			</h2>
			<div className="flex flex-col gap-6">
				{EXPERIENCE.map((i, idx) => (
					<Card
						key={idx + i.title}
						variant="default"
					>
						<Card.Header>
							<Card.Title className="flex justify-between">
								<span className="uppercase">{i.company}</span>
								<span className="text-muted text-sm">
									{new Date(i.startDate).toLocaleString('default', {
										month: 'short'
									})}{' '}
									{new Date(i.startDate).getFullYear()} &mdash;{' '}
									{i.endDate === 'now'
										? i.endDate
										: `${new Date(i.endDate).toLocaleString('default', { month: 'short' })} ${new Date(i.endDate).getFullYear()}`}
								</span>
							</Card.Title>
							<Card.Description>
								{i.description} | {i.employmentType} | {i.locationType}
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<p className="text-sm font-medium text-accent mb-2">{i.title}</p>
							<ul className="list-disc list-inside space-y-2">
								{i.achievements.map((a, idx) => (
									<li key={idx + a}>{a}</li>
								))}
							</ul>
						</Card.Content>
					</Card>
				))}
			</div>
		</SectionWrapper>
	)
}
