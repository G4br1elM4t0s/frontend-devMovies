import { LogoutBtn } from "../LogoutBtn";
import { SearchHeader } from "../SearchHeader";

export function HeaderHome() {
  return (
    <header>
      <div>
        <img src="" alt="" />
        <nav>
          <a href="">Home</a>
          <a href="">Historico</a>
        </nav>
        <SearchHeader />
        <LogoutBtn />
      </div>
    </header>
  );
}
