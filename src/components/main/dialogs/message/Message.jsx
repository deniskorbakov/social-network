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

export default Message;