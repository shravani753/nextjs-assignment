export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10">
      
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Learn & Grow Your Skills
        </h1>

        <p className="mb-6">
          Join our platform to explore courses and improve your career.
        </p>

        <button className="bg-purple-600 text-white px-6 py-2 rounded">
          Join Free Webinar
        </button>
      </div>

      <div>
        <div className="w-60 h-60 bg-gray-300 rounded-full"></div>
      </div>

    </section>
  );
}