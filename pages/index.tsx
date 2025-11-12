import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Autopilot Onboarding Demo</h1>
      <Link href="/onboarding">
        <a className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Start Onboarding
        </a>
      </Link>
    </div>
  );
}
