import { NextResponse, NextRequest } from 'next/server'

const locales = ['en', 'be', 'ru']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
	const acceptLang = request.headers.get('accept-language') ?? ''
	const preferred = acceptLang.split(',')[0]?.split('-')[0]
	return locales.includes(preferred) ? preferred : defaultLocale
}

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl

	const pathnameHasLocale = locales.some(
		locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	if (pathnameHasLocale) return

	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	matcher: ['/((?!_next|api|.*\\..*).*)']
}
