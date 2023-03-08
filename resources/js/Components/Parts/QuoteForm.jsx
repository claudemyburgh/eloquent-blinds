const QuoteForm = () => {
  return (
    <div className={`bg-gray-50 dark:bg-gray-800  max-w-2xl rounded-xl p-4 md:p-6 lg:p-8`}>
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="dark:bg-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-xl"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="dark:bg-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-xl"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              className="dark:bg-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-xl"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="dark:bg-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-xl"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              className="dark:bg-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-xl"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={8}
              className="dark:bg-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 dark:border-gray-700 rounded-xl"
              defaultValue={""}
            />
          </div>
        </div>

        <div className="sm:col-span-6 flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <input id={`newsletter`} name="newsletter" type="radio" defaultChecked={true} className="focus:ring-priamry-500 h-4 w-4 text-priamry-600 border-gray-300" />
              <label htmlFor={`newsletter`} className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                Receive Brochure
              </label>
            </div>
          </div>
          <div>
            <button className="px-8 py-2 rounded-xl bg-primary-500">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteForm
