import { EXPERIENCE } from '@/shared/data/experience'
import { Card } from '@heroui/react'
import { SectionWrapper } from '../../SectionWrapper'

export function Experience() {
	const calculateExperience = (
		startDate: Date | string,
		endDate: Date | string
	) => {
		const start = new Date(startDate)
		const end = endDate === 'now' ? new Date() : new Date(endDate)

		let years = end.getFullYear() - start.getFullYear()
		let months = end.getMonth() - start.getMonth()

		if (months < 0) {
			years--
			months += 12
		}

		return { years, months }
	}

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
							<p className="text-sm font-medium text-accent mb-2">
								{i.title} •{' '}
								{(() => {
									const { years, months } = calculateExperience(
										i.startDate,
										i.endDate
									)
									return `${years} yr ${months} mo`
								})()}
							</p>
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
