import Background from "./background/Background.jsx";
import UserInfo from "./userInfo/UserInfo.jsx";
import AddPost from "./addPost/AddPost.jsx";
import Posts from "./posts/Posts.jsx";

function Profile(props) {
    return (
        <div className="container mx-auto flex-grow">
            <Background/>
            <UserInfo/>
            <AddPost/>
            <Posts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;