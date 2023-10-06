import styles from "./header.module.css";

import logoSteam from "../../assets/favicon.svg";
import carrinho from "../../assets/cart.svg"

const Header = () => {
  return (
    <div className={styles.bar}>
      <div>
        <img src={logoSteam} alt="Logo branca devSteam" width={"72"} />
        DevSteam
      </div>
      <input type="text" placeholder="Buscar" />
      <img src={carrinho} alt="ícone de carrinho de compras" onClick={""} width={"46"} />
    </div>
  );
};

export default Header;
