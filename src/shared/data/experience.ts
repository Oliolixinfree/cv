export const EXPERIENCE = [
	{
		id: 'wunder',
		company: 'Wunder Digital Agency',
		employmentType: 'full-time',
		startDate: '2025-02-01',
		endDate: 'now',
		locationType: 'hybrid'
	},
	{
		id: 'clevertec',
		company: 'Clevertec',
		employmentType: 'apprenticeship',
		startDate: '2023-01-01',
		endDate: '2023-04-25',
		locationType: 'remote'
	}
] as const

export type EmploymentType = (typeof EXPERIENCE)[number]['employmentType']
export type LocationType = (typeof EXPERIENCE)[number]['locationType']
