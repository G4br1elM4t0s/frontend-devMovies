/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";

// eslint-disable-next-line react/prop-types
export default function Fields({ label, register, errors }) {
  return (
    <div className={styles.fieldContent}>
      <label>{label}</label>
      <input
        type="text"
        name={label}
        {...register(label, { required: true })}
      />
      {errors?.[label]?.type === "required" && (
        <p className={styles.errorMessage}> {label} is required</p>
      )}
    </div>
  );
}
