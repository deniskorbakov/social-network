import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer className="container mx-auto p-2 border-t border-white mt-5">
            <div className="flex text-center pt-2">
                <div className="flex-auto w-8">
                    <NavLink className="font-bold text-lg text-white aria-[current=page]:text-cyan-300 border-2 rounded-full px-2 hover:text-base" to="/profile">Social Network</NavLink>
                </div>
                <div className="flex-auto w-8">
                    <NavLink className="font-bold text-lg text-white aria-[current=page]:text-cyan-300 border-2 rounded-full px-2 hover:text-base" to="/dialogs" >Home</NavLink>
                </div>
                <div className="flex-auto w-8">
                    <a className="font-bold text-lg text-white">About Us</a>
                </div>
                <div className="flex-auto w-8">
                    <a className="font-bold text-lg text-white">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer