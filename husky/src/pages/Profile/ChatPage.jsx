import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import api from "../../services/api";
import MainLayout from "../../layout/MainLayout";

function ChatPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users");
        const filteredUsers = res.data.filter((u) => Number(u.id) !== Number(user.id));
        setUsers(filteredUsers);
      } catch (err) {
        console.error("Error loading users:", err);
      }
    };
    fetchUsers();
  }, [user.id]);

  useEffect(() => {
    if (!selectedUser) return;

    const fetchMessages = async () => {
      try {
        const res = await api.get("/messages");
        const convo = res.data.filter(
          (msg) =>
            (Number(msg.senderId) === Number(user.id) && Number(msg.receiverId) === Number(selectedUser.id)) ||
            (Number(msg.senderId) === Number(selectedUser.id) && Number(msg.receiverId) === Number(user.id))
        );
        setMessages(convo);
      } catch (err) {
        console.error("Error loading messages:", err);
      }
    };
    fetchMessages();
  }, [selectedUser, user.id]);

  const handleSend = async () => {
    if (!text.trim() || !selectedUser) return;

    try {
      const message = {
        senderId: user.id,
        receiverId: selectedUser.id,
        message: text,
        timestamp: new Date().toISOString(),
      };
      const res = await api.post("/messages", message);
      setMessages((prev) => [...prev, res.data]);
      setText("");
    } catch (err) {
      console.error("Sending failed:", err);
    }
  };

  return (
    <MainLayout>
      <div className="flex h-[80vh] bg-white m-8 rounded-2xl shadow-md overflow-hidden">
        <div className="w-1/3 border-r p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-xl mb-4"
          />
          <div className="overflow-y-auto flex-1 space-y-2 pr-2">
            {users
              .filter((u) =>
                `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase())
              )
              .map((u) => (
                <div
                  key={u.id}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-purple-100 ${
                    selectedUser?.id === u.id ? "bg-purple-100" : ""
                  }`}
                  onClick={() => setSelectedUser(u)}
                >
                  <img
                    src="/logo192.png"
                    alt={`${u.firstName} ${u.lastName}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{u.firstName} {u.lastName}</div>
                    <div className="text-sm text-gray-500 truncate max-w-[180px]">{u.email}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-2/3 flex flex-col">
          {selectedUser ? (
            <div className="border-b p-4 flex items-center gap-4">
              <img src="/logo192.png" alt="" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-bold text-lg">{selectedUser.firstName} {selectedUser.lastName}</div>
                <div className="text-sm text-gray-500">{selectedUser.email}</div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-gray-400 text-lg">Select a user to start chatting</div>
          )}

          <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-white">
            {messages.map((msg) => {
              const isSender = Number(msg.senderId) === Number(user.id);
              return (
                <div key={msg.id} className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
                  <div className="flex items-end gap-2 max-w-[70%]">
                    {!isSender && (
                      <img src="/logo192.png" alt="" className="w-8 h-8 rounded-full" />
                    )}
                    <div
                      className={`px-4 py-2 rounded-2xl text-sm shadow-md ${
                        isSender
                          ? "bg-purple-500 text-white rounded-br-none"
                          : "bg-gray-100 text-black rounded-bl-none"
                      }`}
                    >
                      {msg.message}
                    </div>
                    {isSender && (
                      <img src="/logo192.png" alt="" className="w-8 h-8 rounded-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedUser && (
            <>
            <div className="border-t p-4 pb-2 flex items-center gap-4">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Type something..."/>
              <button
                onClick={handleSend}
                className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
                SEND
              </button>
            </div>
            <Link to='/profile' className="text-purple-500 px-6 pb-2 underline">Show my account details</Link>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default ChatPage;