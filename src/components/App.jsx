import '../style/App.scss'
import Main from "./main/Main.jsx";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
    return (
        <div className="bg-gradient-to-r from-indigo-800 to-cyan-500">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App
