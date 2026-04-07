export default function Cards() {
  return (
    <section className="p-10">
     
      <div className="grid md:grid-cols-3 gap-6">

        <div className="border p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Learn Skills</h3>
          <p>Upgrade your skills with industry-level courses.</p>
        </div>

        <div className="border p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
          <p>Learn from experienced professionals.</p>
        </div>

        <div className="border p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Get Certified</h3>
          <p>Receive certificates to boost your career.</p>
        </div>

      </div>
    </section>
  );
}