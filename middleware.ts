import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'on'
  const isMaintenancePage = request.nextUrl.pathname === '/maintenance'
  
  if (maintenanceMode && !isMaintenancePage) {
    const url = request.nextUrl.clone()
    url.pathname = '/maintenance'
    return NextResponse.redirect(url)
  }
  
  if (!maintenanceMode && isMaintenancePage) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/).*)',
  ],
}