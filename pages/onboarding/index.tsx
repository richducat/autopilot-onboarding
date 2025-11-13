import { useState } from 'react';
import Link from 'next/link';

const steps = [
  { id: 1, title: 'Connect Email', description: 'Connect your Gmail or Outlook account.' },
  { id: 2, title: 'Connect Calendar', description: 'Sync your calendar to see events.' },
  { id: 3, title: 'Connect Slack', description: 'Allow us to read messages from Slack.' },
  { id: 4, title: 'Finish', description: 'Review your daily brief and get ready to go!' },
];

export default function Onboarding() {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(s + 1, steps.length));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{steps[step - 1].title}</h2>
        <p className="mb-4">{steps[step - 1].description}</p>

        {step === 1 && (
          <div>
            <p className="text-sm mb-2">Choose how to connect your email:</p>
            <ul className="space-y-2">
              <li>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Sign in with Google
                </button>
              </li>
              <li>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Sign in with Microsoft
                </button>
              </li>
              <li>
                <button className="w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                  Use read-only forwarding
                </button>
              </li>
            </ul>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm mb-2">Connect your calendar:</p>
            <ul className="space-y-2">
              <li>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Connect Google Calendar
                </button>
              </li>
              <li>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Connect Outlook Calendar
                </button>
              </li>
            </ul>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-sm mb-2">Connect Slack:</p>
            <ul className="space-y-2">
              <li>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Add to Slack
                </button>
              </li>
              <li>
                <button className="w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                  Invite to single channel
                </button>
              </li>
            </ul>
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="mb-4">Great! You’re ready to go.</p>
            <Link
              href="/dashboard"
              className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              View Daily Brief
            </Link>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={prev}>
              Previous
            </button>
          ) : (
            <div />
          )}
          {step < steps.length ? (
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={next}>
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
