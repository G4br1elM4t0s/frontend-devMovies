/* eslint-disable react/prop-types */
import { LogoutBtn } from "../LogoutBtn";
import { SearchHeader } from "../SearchHeader";
import styles from "./styles.module.scss";
import user from "../../assets/user.svg";
import logo from "../../../public/logo.svg";

export function HeaderHome({ setIsSearchFocused }) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Historico</a>
        </nav>
        <div className={styles.utilsContent}>
          <SearchHeader setIsSearchFocused={setIsSearchFocused} />
          <img src={user} alt="Usuario" />
          <LogoutBtn />
        </div>
      </div>
    </header>
  );
}
