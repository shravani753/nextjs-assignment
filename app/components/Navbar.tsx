export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-xl font-bold">Logo</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}