import Post from "../post/Post.jsx";

function Posts(props) {
    let postsElement = props.posts.map( p => <Post name={p.name} message={p.message} like={p.like}/>)

    return (
        <div className="container mx-auto mt-5 p-5 text-center">
            <h3 className="font-bold text-3xl text-white mt-10">My Posts</h3>
            <div className="overflow-y-auto h-80 inline-block mt-2 py-5 w-full drop-shadow-xl">
                {postsElement}
            </div>
        </div>
    );
}

export default Posts;