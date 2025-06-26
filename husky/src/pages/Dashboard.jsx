import { useState } from "react";

function Dashboard() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Home",
      url: "/home",
      children: [],
    },
    {
      id: 2,
      name: "About us",
      url: "/about",
      children: [],
    },
    {
      id: 3,
      name: "Blog",
      url: "/blog",
      children: [
        { id: 4, name: "Client Success", url: "/blog/client" },
        { id: 5, name: "5 greatest books", url: "/blog/books" },
      ],
    },
    {
      id: 6,
      name: "Partners",
      url: "/partners",
      children: [
        { id: 7, name: "Proof", url: "/partners/proof" },
      ],
    },
    {
      id: 8,
      name: "Contact Us",
      url: "/contact",
      children: [],
    },
  ]);

  const [newItem, setNewItem] = useState({ name: "", url: "" });

  const handleAdd = () => {
    if (!newItem.name.trim() || !newItem.url.trim()) return;
    const newId = Date.now();
    setMenuItems([...menuItems, { id: newId, name: newItem.name, url: newItem.url, children: [] }]);
    setNewItem({ name: "", url: "" });
  };

  const handleDelete = (id, parentId = null) => {
    if (parentId) {
      setMenuItems((items) =>
        items.map((item) =>
          item.id === parentId
            ? { ...item, children: item.children.filter((child) => child.id !== id) }
            : item
        )
      );
    } else {
      setMenuItems((items) => items.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div className="w-1/3 bg-white p-6 rounded-l-2xl shadow-md">
        <button className="text-purple-500 mb-4 text-xl ">&larr; Back</button>
        <div className="flex flex-col gap-4">
          <input
            placeholder="*Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-purple-500"
          />
          <input
            placeholder="URL"
            value={newItem.url}
            onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-purple-500"
          />
          <button
            onClick={handleAdd}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-xl transition">
            Add
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="w-2/3 p-6 bg-white rounded-r-2xl shadow-md">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-4">
            <div className="flex justify-between items-center px-4 py-2 border rounded-md shadow-sm bg-gray-50">
              <div>{item.name}</div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-sm text-red-500 hover:underline"
              >
                X
              </button>
            </div>

            {item.children.length > 0 && (
              <div className="ml-6 mt-2 space-y-2">
                {item.children.map((child) => (
                  <div
                    key={child.id}
                    className="flex justify-between items-center px-4 py-2 border rounded-md bg-white shadow-sm"
                  >
                    <div>{child.name}</div>
                    <button
                      onClick={() => handleDelete(child.id, item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
