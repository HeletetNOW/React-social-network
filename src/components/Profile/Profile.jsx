import Style from "./Profile.module.css";
import React from "react";
import Post from "./Post/Post";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  let posts = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let postChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };
  return (
    <div className={Style.profile}>
      <div className={Style.title}>ava+description</div>
      <img src={props.profile.photos.large} alt="" />
      <div className={Style.posts}>
        <div className={Style.posts_title}>My posts</div>
        <textarea
          onChange={postChange}
          ref={newPostElement}
          value={props.newPostText}
          cols="20"
          rows="5"
        ></textarea>
        <div className={Style.button}>
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={Style.row}>{posts}</div>
      </div>
    </div>
  );
};

export default Profile;
