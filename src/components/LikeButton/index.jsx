import like from "../../assets/gostei.svg";
import styles from "./styles.module.scss";

export function LikeButton() {
  return (
    <button className={styles.buttonLike}>
      <img src={like} alt="like" />
    </button>
  );
}
