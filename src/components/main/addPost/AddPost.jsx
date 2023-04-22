function AddPost() {
    return (
        <div className="container mx-auto mt-5 p-5 text-center">
            <h3 className="font-bold text-3xl pt-2 text-white">Add Post</h3>
            <textarea className="inline-block rounded-lg bg-indigo-950 p-4 border-2 px-64 mt-5 drop-shadow-2xl"></textarea>
            <div className="mt-2">
                <button className="bg-cyan-500 shadow-lg shadow-cyan-500/40 rounded-full px-4 py-2 border-2 text-white uppercase">Send Post</button>
            </div>
        </div>
    );
}

export default AddPost;