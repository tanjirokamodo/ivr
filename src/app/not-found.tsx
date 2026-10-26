import Link from "next/link";

export default function NotFound() {
  return <section className="not-found page-width"><p className="eyebrow">404 · Page not found</p><h1>This path has wandered.</h1><p>The page may have moved, or the address may be incomplete.</p><Link href="/">Return home →</Link></section>;
}

