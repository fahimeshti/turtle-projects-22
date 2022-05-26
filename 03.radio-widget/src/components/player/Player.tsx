import classes from './Player.module.css';
// images
import radioCoverImg from "../../assets/images/cover.jpg";
import minusImg from "../../assets/images/minus.png";
import plusImg from "../../assets/images/plus.png";

const Player = () => {
    return (
        <div className={classes["card-body-img-box"]}>
            <button className={classes["btn-no-style"]}>
                <img src={minusImg} alt="" />
            </button>
            <span className={classes["radio-image"]}>
                <img src={radioCoverImg} alt="" />
            </span>
            <button className={classes["btn-no-style"]}>
                <img src={plusImg} alt="" />
            </button>
        </div>
    );
};

export default Player;