/* This example requires Tailwind CSS v2.0+ */
import {
    UserCircleIcon,
    SearchCircleIcon,
    ChatAlt2Icon,
  } from '@heroicons/react/solid'
  
  const features = [
    {
      name: 'Create an Account',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: UserCircleIcon,
    },
    {
      name: 'Search for a Video Creator',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: SearchCircleIcon,
    },
    {
      name: 'Send Message for Hire',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ChatAlt2Icon,
    },
  ]
  
  export default function HowItWorks() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32" id="howitworks">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-orange-600">How does Tutorial Flare work?</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            We make it easy for companies to hire video creators
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-zinc-800 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center bg-orange-500 p-3 shadow-lg rounded-full">
                          <feature.icon className="h-10 w-10 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-orange-500">{feature.name}</h3>
                      <p className="mt-5 text-base text-white">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  