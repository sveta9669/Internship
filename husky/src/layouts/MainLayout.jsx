import Header from '../components/Header/header.jsx'

function MainLayout({children}) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    )
}

export default MainLayout;