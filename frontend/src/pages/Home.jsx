import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Welcome to FixIt 🛠️
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Easily Note and track your repair issues. 
      </p>

      <div className="flex gap-4">
        <Link
          to="/report"
          className="bg-blue-600 text-white p-1 rounded-sm hover:-translate-y-0.5 transition-transform cursor-pointer"
        >
          Note an Issue
        </Link>
        <Link
          to="/status"
          className="bg-green-600 text-white p-1 rounded-sm hover:-translate-y-0.5 transition-transform cursor-pointer"
        >
          update Status
        </Link>
      </div>
    </div>
  );
}
