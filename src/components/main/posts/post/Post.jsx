function Post(props) {
    return (
        <div
            className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mb-6">
            <div className="">
                <img className="h-12 w-12 rounded-full"
                     src="https://android-obzor.com/wp-content/uploads/2022/03/28e4ac42f547e6ac0f50f7cfa916ca93.jpg"
                     alt="ChitChat Logo"/>
            </div>
            <div className="text-left">
                <div className="text-xl font-medium text-black">{props.name}</div>
                <p className="text-slate-500 mt-1">{props.message}</p>
            </div>
        </div>
    );
}

export default Post