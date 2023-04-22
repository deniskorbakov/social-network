import '../style/App.scss'
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Profile from "./main/profile/Profile.jsx";
import Dialogs from "./main/dialogs/Dialogs.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-gradient-to-r from-indigo-800 to-cyan-500">
                <Header/>
                <main className="shadow-2xl rounded bg-gradient-to-r from-indigo-800 to-cyan-500">
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App
