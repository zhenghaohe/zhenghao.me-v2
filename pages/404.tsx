import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-[75ch] mx-auto py-12 px-5 flex flex-col gap-8 justify-center items-center">
      <h1 className="text-3xl">404</h1>
      <p>You are trying to visit a page that does not exists.</p>
      <Link href="/">
        <a className="link-btn">Go Home</a>
      </Link>
    </div>
  );
}
