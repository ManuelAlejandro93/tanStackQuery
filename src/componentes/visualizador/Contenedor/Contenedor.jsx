import styles from './Contenedor.module.css';

const Contenedor = ({ children }) => {
  return (
    <>
      <div className={styles.ContenedorVisualizador}>{children}</div>
    </>
  );
};

export default Contenedor;
