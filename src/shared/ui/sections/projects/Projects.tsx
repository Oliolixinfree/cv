import { PROJECTS } from '@/shared/data/projects'
import { Card, Chip, Link } from '@heroui/react'
import { SectionWrapper } from '../../SectionWrapper'

export function Projects() {
	return (
		<SectionWrapper id="projects">
			<h2 className="text-foreground capitalize text-3xl font-bold mb-10">
				Projects
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{PROJECTS.map((i, idx) => (
					<Card
						key={i.name + idx}
						variant="default"
					>
						<Card.Header>
							<Card.Title>{i.name}</Card.Title>
							<Card.Description>{i.description}</Card.Description>
						</Card.Header>
						<Card.Content>
							<div className="flex flex-wrap gap-2">
								{i.stack.map(t => (
									<Chip
										key={t}
										size="lg"
										variant="secondary"
										color="accent"
									>
										{t}
									</Chip>
								))}
							</div>
						</Card.Content>
						<Card.Footer>
							<Link
								href={i.repositoryLink}
								target="_blank"
							>
								Repository
								<Link.Icon />
							</Link>
						</Card.Footer>
					</Card>
				))}
			</div>
		</SectionWrapper>
	)
}
