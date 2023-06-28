import Style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={Style.item}>
      <div className={Style.img}>
        <img src="" alt="" />
      </div>
      <div className={Style.title}>{props.message}</div>
      <div className={Style.like}>{props.likeCount}</div>
    </div>
  );
};

export default Post;
