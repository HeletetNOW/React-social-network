import Style from "./Home.module.css";

const Home = () => {
  return (
    <div className={Style.home}>
      <div className={Style.img}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt=""
        />
      </div>
      <div className={Style.title}>Social network on the React</div>
    </div>
  );
};

export default Home;
