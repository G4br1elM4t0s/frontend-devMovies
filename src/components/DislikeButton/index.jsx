import naogostei from "../../assets/naogostei.svg";
import styles from "./styles.module.scss";

export function DislikeButton() {
  return (
    <button className={styles.dislikeButton}>
      <img src={naogostei} alt="dislike" />
    </button>
  );
}
