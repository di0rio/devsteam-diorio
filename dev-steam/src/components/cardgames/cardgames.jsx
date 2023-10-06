import styles from "./cardgames.module.css";

import cs from "../../assets/counter-strike.svg";

const Cardgames = () => {
  return (
    <>
      <div className={styles.cardgame}>
        <div className={styles.infos}>
          <img src={cs} alt="" />
          <strong>Counter strike: Global offensive</strong>
          <h4>Ação, estratégia, multijogador.</h4>
          <p>R$99,90</p>
        </div>
        <div className={styles.btn2}>
          {/* <button><p>Adicionar ao carrinho</p></button> */}
        </div>
      </div>
    </>
  );
};

export default Cardgames;
