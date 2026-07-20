import { HomeScreen } from '@/screen/HomeScreen/HomeScreen'
import type { Locale } from '@/app/dictionaries'

export default async function Home({ params }: PageProps<'/[lang]'>) {
	const { lang } = (await params) as { lang: Locale }

	return <HomeScreen lang={lang} />
}
