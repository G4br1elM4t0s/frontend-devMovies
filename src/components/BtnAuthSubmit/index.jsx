/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styles from "./styles.module.scss";

export function BtnAuthSubmit(props) {
  return (
    <>
      <button type="submit" className={styles.btnSubmit}>{props.name}</button>
    </>
  );
}
