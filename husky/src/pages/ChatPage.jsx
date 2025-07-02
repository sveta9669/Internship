import MainLayout from "../layout/MainLayout";

function ChatPage() {
    return (
        <MainLayout>
            <div className="h-full bg-white m-8 rounded-2xl shadow-md text-center flex items-center justify-center">
                <div className="w-1/3 bg-white p-6 rounded-l-2xl shadow-md">
                Messages
                <input type="text" className="p-2 rounded-xl"/>
                </div>
                <div className="w-2/3 bg-white p-6 rounded-r-2xl shadow-md">
                    <div className="h-1/3 bg-white p-6">
                    </div>
                    <div className="h-2/3 bg-white p-6">
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ChatPage;