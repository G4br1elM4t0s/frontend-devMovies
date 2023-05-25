import { useState } from "react";
import styles from "./styles.module.scss";
import menu from "../../assets/hamburgue.svg";

export function Filter() {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  function handleMenuClick() {
    setOpen(!open);
  }

  function handleItemClick(item) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  function handleRemoveItemClick(item) {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  }

  console.log(selectedItems);

  return (
    <>
      <div className={styles.filterContent}>
        <div className={styles.selectedItems}>
          {selectedItems.map((item) => (
            <div key={item} className={styles.selectedItem}>
              <span className={styles.itemName}>{item}</span>
              <button
                className={styles.removeButton}
                onClick={() => handleRemoveItemClick(item)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className={styles.container}>
          <div className={styles.menu}>
            <button onClick={handleMenuClick}>
              <img src={menu} alt="Menu" />
            </button>
          </div>
          <nav className={open ? styles.inactive : styles.active}>
            <ul>
              <li
                onClick={() => handleItemClick("Gostei")}
                className={
                  selectedItems.includes("Gostei") ? styles.selected : ""
                }
              >
                Gostei
              </li>
              <li
                onClick={() => handleItemClick("Não Gostei")}
                className={
                  selectedItems.includes("Não Gostei") ? styles.selected : ""
                }
              >
                Não Gostei
              </li>
              <li
                onClick={() => handleItemClick("Assistido")}
                className={
                  selectedItems.includes("Assistido") ? styles.selected : ""
                }
              >
                Assistido
              </li>
              <li
                onClick={() => handleItemClick("A Assistir")}
                className={
                  selectedItems.includes("A Assistir") ? styles.selected : ""
                }
              >
                A Assistir
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
