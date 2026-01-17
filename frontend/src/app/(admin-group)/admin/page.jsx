const DashboardPage = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,245",
      icon: "👤",
      color: "bg-blue-500",
    },
    {
      title: "Orders",
      value: "856",
      icon: "📦",
      color: "bg-green-500",
    },
    {
      title: "Revenue",
      value: "₹2,45,000",
      icon: "💰",
      color: "bg-purple-500",
    },
    {
      title: "Pending",
      value: "18",
      icon: "⏳",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Main Content */}
      <main className="p-6">
        {/* Report Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">
                    {item.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`${item.color} text-white text-2xl p-3 rounded-full`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="mt-10 bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">
            Recent Activity
          </h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">#101</td>
                <td>Aanchal</td>
                <td className="text-green-600">Completed</td>
                <td>₹4,500</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">#102</td>
                <td>Rahul</td>
                <td className="text-yellow-600">Pending</td>
                <td>₹2,100</td>
              </tr>
              <tr>
                <td className="py-2">#103</td>
                <td>Neha</td>
                <td className="text-red-600">Cancelled</td>
                <td>₹1,200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
