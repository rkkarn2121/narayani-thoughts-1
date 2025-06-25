export default function Poll() {
  return (
    <section className="p-6">
      <h3 className="text-xl font-semibold mb-2">Your Opinion Matters</h3>
      <p className="mb-2">Do you support citizen-led journalism?</p>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded">Yes</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">No</button>
      </div>
    </section>
  );
}