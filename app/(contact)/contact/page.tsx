const ContactPage = () => {
  return (
    <div className="mt-20 px-6 sm:px-12 lg:px-24 mb-5">
      <h1 className="text-4xl font-bold text-center mb-8 text-amber-600">
        Contact Us
      </h1>
      <form className="w-full max-w-2xl mx-auto bg-amber-50 shadow-lg p-6 rounded-lg space-y-6">
        <h2 className="text-lg text-amber-700 font-medium">
          We will respond to you as soon as possible
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="text-sm text-amber-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your email"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="text-sm text-amber-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your name"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm text-amber-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your phone number"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="details" className="text-sm text-amber-700 mb-1">
            Detail
          </label>
          <textarea
            id="details"
            rows={4}
            className="border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 text-white font-medium py-2 rounded-md hover:bg-amber-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
