import { ArrowPathIcon, CalendarIcon, TruckIcon } from "@heroicons/react/24/outline"

const perks = [
  { name: "10-year all-inclusive warranty", description: "We’ll replace it with a new one", icon: CalendarIcon },
  { name: "Free shipping on returns", description: "Send it back for free", icon: ArrowPathIcon },
  { name: "Free, contactless delivery", description: "The shipping is on us", icon: TruckIcon },
]

const Incentives = () => {
  return (
    <div className="relative">
      <h2 className="sr-only">Our perks</h2>
      <div className="wrapper divide-y divide-gray-200 dark:divide-gray-800 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x lg:py-8">
        {perks.map((perk, perkIdx) => (
          <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0 card overflow-hidden">
            <div className="mx-auto flex max-w-xs items-center p-6 lg:max-w-none lg:px-8">
              <perk.icon className="h-8 w-8 flex-shrink-0 text-primary-600" aria-hidden="true" />
              <div className="ml-4 flex flex-auto flex-col-reverse">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{perk.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{perk.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Incentives
