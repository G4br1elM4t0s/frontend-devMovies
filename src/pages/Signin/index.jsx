/* eslint-disable no-unused-vars */
import { HeaderAuth } from "../../components/HeaderAuth";

import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";
import Fields from "../../components/Fields";
import { BtnAuthSubmit } from "../../components/BtnAuthSubmit";

import leftLogin from "../../assets/leftLogin.svg";
import rightLogin from "../../assets/rightLogin.svg";

import { useNavigate } from "react-router-dom";

import api from "../../services/axios";
import { Footer } from "../../components/Footer";
import { useEffect } from "react";

export default function Signin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const resolve = await api.post("/auth", data);
    console.log(resolve + " " + resolve.status);

    if (resolve.status === 200) {
      navigate("/movies");
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
              type="password"
              label="password"
              register={register}
              errors={errors}
            />
            <BtnAuthSubmit name="Logar" />
          </form>
        </div>
        <img className={styles.rightLogin} src={leftLogin} alt="rightLogin" />
      </main>
      <Footer />
    </>
  );
}
