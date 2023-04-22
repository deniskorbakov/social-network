// import s from '../../style/main/Main.module.scss';
import Background from "./background/Background.jsx";
import UserInfo from "./userInfo/UserInfo.jsx";
import AddPost from "./addPost/AddPost.jsx";
import Posts from "./posts/Posts.jsx";

function Main() {
    return (
        <main className="container mx-auto flex-grow shadow-2xl rounded bg-gradient-to-r from-indigo-800 to-cyan-500">
            <Background/>
            <UserInfo/>
            <AddPost/>
            <Posts/>
        </main>
    );
}

export default Main;