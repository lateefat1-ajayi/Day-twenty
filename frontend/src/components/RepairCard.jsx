export default function RepairCard({ issue, onEdit, onDelete }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-300 text-yellow-900";
      case "In Progress":
        return "bg-blue-300 text-blue-900";
      case "Completed":
        return "bg-green-300 text-green-900";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow border mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{issue.title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${getStatusColor(issue.status)}`}>
          {issue.status}
        </span>
      </div>
      <p className="text-gray-700 my-2"><strong>Category:</strong> {issue.category}</p>
      <p className="text-gray-600 mb-2">{issue.description}</p>
      <p className="text-sm text-gray-400">Submitted: {new Date(issue.date).toLocaleString()}</p>

      <div className="mt-3 flex gap-3">
        <button
          onClick={() => onEdit(issue)}
          className="text-blue-600 hover:underline text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(issue._id)}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
