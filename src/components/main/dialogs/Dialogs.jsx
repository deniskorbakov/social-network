import {NavLink} from "react-router-dom";

let dataDialog = [
    {id: 1, name: "denis", message: "hi"},
    {id: 2, name: "dima", message: "hello"},
];

let dataMessage = [
    {name: "denis", message: "hi"},
    {name: "dima", message: "hello"},
];

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

function Message(props) {
    return(
        <div className="text-center p-2">
            <div className="px-2 py-2 flex items-center space-x-4 w-full">
                <div className="shrink-0">
                    <img className="h-12 w-12 rounded-full" src="https://cdnn1.img.sputniknews.com/img/102062/98/1020629890_18:0:6469:3648_1920x0_80_0_0_0d1dd4223c23b0a4c2e27b7f9d7f9b1c.jpg" alt="ChitChat Logo"/>
                </div>
                <div>
                    <div className="text-xl font-medium text-white text-left">{props.name}</div>
                    <p className="text-gray-300">{props.message}</p>
                </div>
            </div>
        </div>
    );
}

function Dialogs() {
    return (
        <div className="container mx-auto mt-5 p-5 text-center h-screen">
            <div className="container mx-auto text-center mt-5">
                <h1 className="font-bold text-3xl text-white uppercase">My Dialog</h1>
            </div>

            <div className="flex border border-white rounded-md mt-5 h-4/5">
                <div className="flex-initial w-96 border-r">
                    <div className="container text-center border-b p-2">
                        <p className="text-2xl font-bold text-white">Dialogs</p>
                    </div>

                    <DialogItem id={dataDialog[0].id} name={dataDialog[0].name} message={dataDialog[0].message}/>
                    <DialogItem id={dataDialog[1].id} name={dataDialog[1].name} message={dataDialog[1].message}/>

                </div>

                <div className="flex-initial w-full">
                   <Message name={dataMessage[0].name} message={dataMessage[0].message}/>
                   <Message name={dataMessage[1].name} message={dataMessage[1].message}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;