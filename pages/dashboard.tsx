import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Your Daily Brief</h1>
      <div className="w-full max-w-3xl bg-white shadow rounded-lg p-6 space-y-4">
        <section>
          <h2 className="text-lg font-semibold mb-2">Must‑dos</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Review 2 prepared drafts.</li>
            <li>Confirm invoice due next week.</li>
            <li>Check scheduled call for 3pm.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-2">Prepared Replies</h2>
          <div className="space-y-2">
            <div className="p-3 bg-gray-100 rounded">
              <p>Reply to client about meeting: “Got it—shall we meet Friday at 2pm?”</p>
            </div>
            <div className="p-3 bg-gray-100 rounded">
              <p>Reply to vendor: “Thanks for the invoice, we’ll process payment by EOD.”</p>
            </div>
          </div>
        </section>
      </div>
      <Link href="/onboarding">
        <a className="mt-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Back to Onboarding</a>
      </Link>
    </div>
  );
}
