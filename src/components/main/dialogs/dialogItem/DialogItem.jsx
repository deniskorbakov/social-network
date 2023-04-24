import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;

    return(
        <div className="text-center">
            <NavLink to={path}>
                <div className="p-5 bg-white shadow-lg flex items-center space-x-4 w-full drop-shadow-md border-b-2 hover:bg-gray-200">
                    <div className="shrink-0">
                        <img className="h-12 w-12 rounded-full" src="https://cdnn1.img.sputniknews.com/img/102062/98/1020629890_18:0:6469:3648_1920x0_80_0_0_0d1dd4223c23b0a4c2e27b7f9d7f9b1c.jpg" alt="ChitChat Logo"/>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">{props.name}</div>
                        <p className="text-slate-500">{props.message}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;