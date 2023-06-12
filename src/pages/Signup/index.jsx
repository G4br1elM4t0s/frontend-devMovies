/* eslint-disable no-unused-vars */
import { HeaderAuth } from "../../components/HeaderAuth";

import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";
import Fields from "../../components/Fields";
import { BtnAuthSubmit } from "../../components/BtnAuthSubmit";

import leftLogin from "../../assets/leftLogin.svg";
import rightLogin from "../../assets/rightLogin.svg";
import btnAjuda from "../../assets/ajuda.svg";

import { useNavigate } from "react-router-dom";

import api from "../../services/axios";

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const resolve = await api.post("/signup", data);

    if (resolve.status === 201) {
      navigate("/signin");
    }
  };

  return (
    <>
      <HeaderAuth />
      <main className={styles.mainContent}>
        <img className={styles.leftLogin} src={rightLogin} alt="leftLogin" />
        <div>
          <form className={styles.formSignup} onSubmit={handleSubmit(onSubmit)}>
            <Fields
              email={true}
              type="text"
              label="email"
              register={register}
              errors={errors}
            />
            <Fields
              type="text"
              label="name"
              register={register}
              errors={errors}
            />
            <Fields
              type="password"
              label="password"
              register={register}
              errors={errors}
            />
            <BtnAuthSubmit name="Criar Conta" />
          </form>
        </div>
        <img className={styles.rightLogin} src={leftLogin} alt="rightLogin" />
      </main>
      <footer className={styles.rodape}>
        <img className={styles.btnAjuda} src={btnAjuda} alt="ajuda" />
      </footer>
    </>
  );
}
