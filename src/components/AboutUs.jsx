import React from "react";

function Aboutus() {
  return (
    <section className="about-us bg-cream py-16 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold font-playfair text-mocha mb-6">
          About Zawadi Candles
        </h2>

        <p>
          At <span className="font-bold">Zawadi Candles</span>, we believe that
          every candle tells a story. Inspired by nature and handcrafted with
          love, our candles are made from highly sourced and 100% eco-friendly
          natural wax. Each scent is well curated to create a cozy, inviting and
          homy ambiance because your space deserves warmth, light and a touch of
          magic.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="px-4 py-4 bg-warmBrown text-cream rounded-lg text-lg font-semibold hover:bg-terracotta transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
export default Aboutus;
