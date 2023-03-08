import image from "@/../img/hero/bamboo-blinds.webp"

const Hero = () => (
  <div className={`min-h-[47rem] flex items-center justify-center`}>
    <div className="wrapper flex items-center justify-center">
      <div className="w-3/5">
        <h1 className="text-5xl font-black">Best Selection of Blinds at Affordable Prices</h1>
        <p className={`leading-8 my-4`}>
          With our <strong>Free</strong> installation service in Cape Town. We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will
          add style and function to your space. We have a variety of options to choose from, including Aluminium, Bamboo, Basswood, Honeycomb, Roller, Double Roller, Venetian, Zebra Blinds and many
          more. At Eloquent Blinds, we believe that the installation of your blinds should be just as hassle-free as the purchasing process. That's why we offer professional installation services for
          all of our blinds.
        </p>
        <button className={`border dark:border-white border-gray-900 dark:text-white text-gray-900 px-8 py-4 rounded-xl hover:bg-white/10`}>GET FREE QUOTE</button>
      </div>
      <div className="w-2/5">
        <div className="w-full aspect-square mr-4 md:ml-6 lg:ml-8 relative">
          <div className={`w-full h-full overflow-clip bg-white rounded-xl relative z-30 shadow-xl shadow-black/50`}>
            <img src={image} alt="hero image" />
          </div>
          <div aria-hidden="true" className="bg-gray-200/80 backdrop-blur absolute inset-0 z-10 rounded-xl shadow-lg shadow-black scale-95 -translate-y-8"></div>
          <div aria-hidden="true" className="bg-gray-300/50 backdrop-blur absolute inset-0 z-0 rounded-xl shadow-lg shadow-black scale-90 -translate-y-16"></div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
