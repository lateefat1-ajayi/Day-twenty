import { useState } from "react";
import RepairCard from "../components/RepairCard";

export default function ReportIssue() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Plumbing");
  const [description, setDescription] = useState("");
  const [submittedIssue, setSubmittedIssue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIssue = {
      _id: Date.now(), // fake ID for now
      title,
      category,
      description,
      status: "Pending",
      date: new Date().toISOString(),
    };

    setSubmittedIssue(newIssue);
    setTitle("");
    setCategory("Plumbing");
    setDescription("");
  };

  const handleEdit = (issue) => {
    setTitle(issue.title);
    setCategory(issue.category);
    setDescription(issue.description);

    // Remove current issue from view while editing
    setSubmittedIssue(null);
  };

  const handleDelete = () => {
    setSubmittedIssue(null);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Report an Issue</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Issue Title"
          className="w-full border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="w-full border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="Structural">Structural</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          placeholder="Describe the issue..."
          className="w-full border p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>

      {submittedIssue && (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Submitted Issue</h2>
          <RepairCard
            issue={submittedIssue}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
}
