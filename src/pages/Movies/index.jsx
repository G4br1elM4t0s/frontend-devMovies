import { HeaderHome } from "../../components/Header";
import { Mensagem } from "../../components/Mensagem";
import { useState } from "react";

export default function Movies() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <>
      <HeaderHome setIsSearchFocused={setIsSearchFocused} />
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
