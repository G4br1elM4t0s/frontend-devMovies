import { Filter } from "../../components/Filter";
import { HeaderHome } from "../../components/Header";
import { Mensagem } from "../../components/Mensagem";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Movies() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <>
      <HeaderHome setIsSearchFocused={setIsSearchFocused} />
      <div className={styles.secondyBar}>
        <div className={styles.contentBar}>
          <Filter />
        </div>
      </div>
      {isSearchFocused ? (
        <Mensagem
          isSearchFocused={isSearchFocused}
          msg="pesquise o nome de um filme ou série."
        />
      ) : (
        <div>
          <h1>conteudo principal</h1>
        </div>
      )}
    </>
  );
}
