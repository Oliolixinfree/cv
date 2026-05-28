import { ACHIEVEMENTS } from '@/shared/data/achievements'
import { Card } from '@heroui/react'
import { SectionWrapper } from '../../SectionWrapper'

export function Achievements() {
	return (
		<SectionWrapper id="achievements">
			<h2 className="text-foreground capitalize text-3xl font-bold mb-10">
				Achievements
			</h2>
			<div className="@container">
				<div className="grid grid-cols-1 @xs:grid-cols-2 @lg:grid-cols-3 @3xl:grid-cols-4 @4xl:grid-cols-5 gap-6">
					{ACHIEVEMENTS.map(i => (
						<Card
							key={i.title}
							// className="min-w-40 w-50 "
							variant="default"
						>
							<Card.Content className="mx-auto">
								<div className="w-20 h-20 flex items-center justify-center border rounded-2xl border-border bg-linear-to-r/oklch from-warning/70 to-warning/90">
									<i.icon className="size-10" />
								</div>
							</Card.Content>

							<Card.Header className="text-center flex flex-col items-center flex-1">
								<Card.Title>{i.title}</Card.Title>
								<Card.Description>{i.description}</Card.Description>
							</Card.Header>
						</Card>
					))}
				</div>
			</div>
			{/* <Card
				className="w-full"
				variant="default"
			>
				<ScrollShadow
					orientation="horizontal"
					className="p-4"
				>
					<div className="flex flex-row gap-6">
						<div className="flex flex-row gap-6">
							{ACHIEVEMENTS.map(i => (
								<Card
									key={i.title}
									className="min-w-40 w-50 "
									variant="default"
								>
									<Card.Content className="mx-auto">
										<div className="w-20 h-20 flex items-center justify-center border rounded-2xl border-border bg-linear-to-r/oklch from-warning/70 to-warning/90">
											<i.icon className="size-10" />
										</div>
									</Card.Content>

									<Card.Header className="text-center flex flex-col items-center flex-1">
										<Card.Title>{i.title}</Card.Title>
										<Card.Description>{i.description}</Card.Description>
									</Card.Header>
								</Card>
							))}
						</div>
					</div>
				</ScrollShadow>
			</Card> */}
		</SectionWrapper>
	)
}
