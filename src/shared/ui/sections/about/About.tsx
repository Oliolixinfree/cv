import { Card, Chip } from '@heroui/react'
import { SectionWrapper } from '../../SectionWrapper'

export function About() {
	return (
		<SectionWrapper id="about">
			<h2 className="text-foreground capitalize text-3xl font-bold mb-10">
				About
			</h2>
			<div>
				<Card
					className="p-10"
					variant="default"
				>
					<Card.Content>
						<p>
							{/* Frontend Engineer building high-performance web applications,
						internal platforms, and automation solutions. Experienced in
						React/Next.js ecosystems, complex integrations, and end-to-end
						product development. */}
							Frontend Engineer with 2+ years of commercial experience building
							scalable internal tools, analytics platforms, and automation
							workflows. Specialized in React, Next.js, performance
							optimization, and complex integrations.
						</p>
						<div className="mt-6 flex flex-wrap gap-2">
							<Chip
								size="lg"
								variant="soft"
								color="default"
							>
								2+ years commercial experience
							</Chip>
							<Chip
								size="lg"
								variant="soft"
								color="default"
							>
								15x build speed improvement
							</Chip>
							<Chip
								size="lg"
								variant="soft"
								color="default"
							>
								Building high-load products from scratch
							</Chip>
							<Chip
								size="lg"
								variant="soft"
								color="default"
							>
								Infisical integration
							</Chip>
							<Chip
								size="lg"
								variant="soft"
								color="default"
							>
								Analytical dashboards
							</Chip>
						</div>
					</Card.Content>
				</Card>
			</div>
		</SectionWrapper>
	)
}
