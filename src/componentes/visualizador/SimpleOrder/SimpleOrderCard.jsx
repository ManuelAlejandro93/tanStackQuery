import styles from './SimpleOrderCard.module.css';

const SimpleOrderCard = ({ titulo }) => {
  return (
    <div className={styles.singleCard}>
      <p>{titulo}</p>
      <button
        href={'https://rickandmortyapi.com/'}
        className={styles.simpleOrderCardButton}
      >
        EJECUTAR
      </button>
    </div>
  );
};

export default SimpleOrderCard;
