import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SideBar } from "./components/Sidebar";
import user from "./scripts/user.json";
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SubscriptionPage } from './pages/SubscriptionPage';



function App() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleClickMenu = () => {
        setToggleMenu(!toggleMenu);
    }


    return (
        <BrowserRouter>
            <div id="App">
                <Header userName={user.name} avatar={user.avatar} handleClickMenu={handleClickMenu}></Header>
                <div className="d-flex wrap-sidebar-content">
                    {/* Content Page */}
                    <SideBar toggleMenu={toggleMenu}></SideBar>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/shorts" element={<h1>shorts</h1>} />
                        <Route path="/subscriptions" element={<SubscriptionPage />} />
                        <Route path="/you" element={<h1>You</h1>} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
