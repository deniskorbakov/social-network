import DialogItem from "./dialogItem/DialogItem.jsx";
import Message from "./message/Message.jsx";


function Dialogs(props) {
    let dialogsElement = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} message={d.message}/>);
    let messagesElement = props.state.message.map( m => <Message name={m.name} message={m.message}/>)

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

                    {dialogsElement}
                </div>

                <div className="flex-initial w-full">
                    {messagesElement}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;