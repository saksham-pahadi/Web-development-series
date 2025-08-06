import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.redirect(new URL('/', request.url))
//     return NextResponse.json({message:"hello from about page"})
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }
 







// export function middleware(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/', request.url)) 
//   }
// }








export function middleware(request) {
  // Clone the request headers and set a new header 
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', 'hello')
 
  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
 
  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}