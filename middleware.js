import { cookies } from "next/headers";
export function middleware(request) {
  console.log(cookies);
}

export const config = {
  matcher: [],
};
