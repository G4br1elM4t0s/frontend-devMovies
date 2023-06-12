import { Filter } from "../../components/Filter";
import { HeaderHome } from "../../components/Header";
import { Mensagem } from "../../components/Mensagem";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { BackgroundLogged } from "../../components/BackgroundLogged";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import api from "../../services/axios";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");

  const [selectedMovieName, setSelectedMovieName] = useState("");

  const user = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user === "") {
      navigate("/");
    }
  }, [user, navigate]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get("/movies");
      console.log(response);

      setMovies(response.data);
    };
    loadMovies();
  }, []);

  const handleDivClick = (id, name) => {
    setIsModalOpen(true);
    setSelectedMovieId(id);
    setSelectedMovieName(name);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleOutsideClick = () => {
    setIsModalOpen(false);
  };

  const handleLike = async () => {
    const userId = localStorage.getItem("userId");
    const type = "gostei";
    await api.post(`/movie/${selectedMovieName}/ratings`, {
      type,
      userId,
    });
  };

  const handleDislike = async () => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    const type = "nao-gostei";
    await api.post(`/movie/${selectedMovieName}/ratings`, {
      type,
      userId,
    });
  };

  const handleWatched = async () => {
    const userId = localStorage.getItem("userId");
    const type = "assistido";
    await api.post(`/movie/${selectedMovieName}/ratings`, {
      type,
      userId,
    });
  };

  const handleToWatch = async () => {
    const userId = localStorage.getItem("userId");
    const type = "assistir";
    console.log(selectedMovieName);
    await api.post(`/movie/${selectedMovieName}/ratings`, {
      type,
      userId,
    });
  };

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
        <main className={styles.mainContent}>
          <BackgroundLogged />
          <div className={styles.cardsControll}>
            {movies.map((movie) => (
              <Card
                key={movie.id}
                onclick={() => handleDivClick(movie.id, movie.name)}
                filmeImage={movie.thumbnail}
                title={movie.name}
              />
            ))}
            {isModalOpen && (
              <Modal
                fechar={isModalOpen ? handleOutsideClick : () => {}}
                manter={handleModalClick}
                selectedMovieId={selectedMovieId}
                handleLike={handleLike}
                handleDislike={handleDislike}
                handleWatched={handleWatched}
                handleToWatch={handleToWatch}
              />
            )}
          </div>
        </main>
      )}
    </>
  );
}
