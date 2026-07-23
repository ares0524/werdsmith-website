import { NextResponse, type NextRequest } from 'next/server';

// During the rebrand the whole site is replaced by a single "stay tuned" page.
// Every route rewrites to `/` so old marketing and portfolio URLs no longer
// surface the previous brand. A rewrite (not a redirect) keeps the visitor's
// URL intact while serving the stay-tuned page — better than a flood of 3xx.
//
// The matcher excludes Next internals and static assets so the page's own CSS,
// the logo, and the email-notify API route keep working.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = '/';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Exclude Next internals, the API, and the metadata/asset routes so the
    // stay-tuned page's CSS, logo, social card, and notify endpoint all work.
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|logo.png|opengraph-image|robots.txt|sitemap.xml).*)',
  ],
};
