import './globals.css'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20 text-white">ChatGPT 2.0</h1>

      <div className="flex space-x-2 text-center ">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8 " />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2 ">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">"What is the difference between a cat and a dog?"</p>
            <p className="infoText">"What is the color of the Sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Bolt Icon */}
            <BoltIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2 ">
            <p className="infoText">Change the chatGPT model to use!</p>
            <p className="infoText">Messages are stored in Firebase's Firestore</p>
            <p className="infoText">Hot Toast notifications when ChatGPT 2.0 is thinking</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Triangle Icon */}
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2 ">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}
