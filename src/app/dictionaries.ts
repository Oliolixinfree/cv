import 'server-only'
import type en from '../dictionaries/en.json'
import { cache } from 'react'

const dictionaries = {
	en: () => import('../dictionaries/en.json').then(m => m.default),
	be: () => import('../dictionaries/be.json').then(m => m.default),
	ru: () => import('../dictionaries/ru.json').then(m => m.default)
}

export type Locale = keyof typeof dictionaries
export type Dictionary = typeof en

export const hasLocale = (locale: string): locale is Locale =>
	locale in dictionaries

export const getDictionary = cache(async (locale: Locale) =>
	dictionaries[locale]()
)
