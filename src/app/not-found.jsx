import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Sorry, the page you're looking for does not exist.</p>
      <Link href="/">Return Home...</Link>
    </>
  )
}