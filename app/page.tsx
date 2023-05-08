import './globals.css'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 overflow-auto">
      <h1 className="text-4xl font-semibold mt-20 mb-20 text-white">ChatGPT 2.0</h1>

      <div className="flex space-x-4 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8 text-white" />
            <h2 className="text-white">Examples</h2>
          </div>

          <div className="space-y-4">
            <p className="infoText hover:bg-tertiary">&quot;Explain something to me&quot;</p>
            <p className="infoText hover:bg-tertiary">&quot;What is the difference between a cat and a dog?&quot;</p>
            <p className="infoText hover:bg-tertiary">&quot;What is the color of the Sun?&quot;</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Bolt Icon */}
            <BoltIcon className="h-8 w-8 text-white" />
            <h2 className="text-white">Capabilities</h2>
          </div>

          <div className="space-y-4">
            <p className="infoText">Change the chatGPT model to use!</p>
            <p className="infoText">Messages are stored in Firebase&apos;s Firestore</p>
            <p className="infoText">Hot Toast notifications when ChatGPT 2.0 is thinking</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Triangle Icon */}
            <ExclamationTriangleIcon className="h-8 w-8 text-white" />
            <h2 className="text-white">Limitations</h2>
          </div>

          <div className="space-y-4">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}
