import Link from 'next/link';
import styles from './SimpleCharacterCard.module.css';
import Image from 'next/image';

const SimpleCharacterCard = ({ name, status, photo, webURL }) => {
  return (
    <span className={styles.singleCard}>
      <Image
        src={`${photo}`}
        width={500}
        height={500}
        alt={name}
        className={styles.characterPhoto}
      ></Image>
      <div className={styles.characterInfoContainer}>
        <p>{name}</p>
        <p>Status: {status}</p>
        <Link href={`${webURL}`} className={styles.characterInfoContainerLink}>
          Visitar Web
        </Link>
      </div>
    </span>
  );
};

export default SimpleCharacterCard;
