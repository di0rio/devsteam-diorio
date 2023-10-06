import styles from "./cardpromo.module.css";

import lol from "../../assets/league-of-legends.svg";
import dota from "../../assets/dota.svg"
import valorant from "../../assets/valorant.svg"



const Cardpromo = () => {
  return (
    <div className={styles.card}>
      <div className={styles.promo1}>
        <img src={lol} alt="Jogo League of Legends nas promoções do dia!!!" />
        <strong>oferta exclusiva</strong>
        <div className={styles.desc}>
          <p>-50% </p>
          <div className={styles.preco}>
            <h6>R$199,80</h6>
            <h3>R$99,90</h3>
          </div>
        </div>
        <div>
          <button className={styles.btn}><h4>Adicionar ao carrinho</h4></button>
        </div>
      </div>
      {/* <div className={styles.desconto}>
        <p>-50% </p>

      </div> */}
    </div>
  );
};

export default Cardpromo;
