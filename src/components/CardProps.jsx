import React from "react";
import styles from "../style/Card.module.css";

const CardProps = ({ title, image, content, tags, published }) => {
  
  const imageUrl = image ? image : `https://picsum.photos/600/400?random=${Math.random()}`;

  return (
    <div className={`${styles.card} ${!published ? styles.unpublished : ""}`}>
      <img className={styles.image} src={imageUrl} alt={`immagine di ${title}`} />
      <div className={styles.txtContainer}>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.description}>{content}</p>
        <div>
          Tags: {tags.map((tag, index) => (
            <span key={index} className={`${styles.tag} ${styles[tag]}`}>
              {tag}
            </span>
          ))}
        </div>
        
        <div className={styles.button}>LEGGI DI PIÙ</div>
      </div>
    </div>
  );
};

export default CardProps;
