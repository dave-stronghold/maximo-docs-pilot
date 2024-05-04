import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Training Manual For Maximo</h1>
      <p className="text-muted-foreground">
        You can open{' '}
        <Link href="/docs/hr-manager/dummy" className="text-foreground font-semibold underline">
          /test
        </Link>{' '}
        and see the demo.
      </p>
    </main>
  );
}
