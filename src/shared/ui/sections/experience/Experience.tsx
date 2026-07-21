import { EXPERIENCE } from '@/shared/data/experience'
import { Card } from '@heroui/react'
import { SectionWrapper } from '../../SectionWrapper'
import { getDictionary, type Locale } from '@/app/dictionaries'

interface Props {
	lang: Locale
}

const localeMap: Record<Locale, string> = {
	en: 'en-US',
	ru: 'ru-RU',
	be: 'be-BY'
}

export async function Experience({ lang }: Props) {
	const dict = await getDictionary(lang)
	const intlLocale = localeMap[lang]

	const formatMonthYear = (date: string) =>
		new Intl.DateTimeFormat(intlLocale, {
			month: 'short',
			year: 'numeric'
		}).format(new Date(date))

	return (
		<SectionWrapper id="experience">
			<h2 className="text-foreground capitalize text-3xl font-bold mb-10">
				{dict.experience.sectionTitle}
			</h2>
			<div className="flex flex-col gap-6">
				{EXPERIENCE.map(i => {
					const item = dict.experience.items[i.id]

					return (
						<Card
							key={i.id}
							variant="default"
						>
							<Card.Header>
								<Card.Title className="flex justify-between flex-wrap">
									<span className="uppercase">{i.company}</span>
									<span className="text-muted text-sm">
										{formatMonthYear(i.startDate)} &mdash;{' '}
										{i.endDate === 'now'
											? dict.experience.present
											: formatMonthYear(i.endDate)}
									</span>
								</Card.Title>
								<Card.Description>
									{item.description} |{' '}
									{dict.experience.employmentTypes[i.employmentType]} |{' '}
									{dict.experience.locationTypes[i.locationType]}
								</Card.Description>
							</Card.Header>
							<Card.Content>
								<p className="text-sm font-medium text-accent mb-2">
									{item.title}
								</p>

								<ul className="list-disc list-inside space-y-2">
									{item.achievements.map((a, idx) => (
										<li key={idx}>{a}</li>
									))}
								</ul>
							</Card.Content>
						</Card>
					)
				})}
			</div>
		</SectionWrapper>
	)
}
