import preloader from "./Preloader.gif";
import Style from "./preloader.module.css";

const Preloader = () => {
  return (
    <div>
      <img src={preloader} className={Style.preloader} alt="" />
    </div>
  );
};

export default Preloader;
