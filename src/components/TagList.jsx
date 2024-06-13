import React from "react";
import { posts } from "../../data/data"; // Assicurati di importare correttamente i dati dei post
import styles from "../style/TagsList.module.css"; // Importa il file CSS per le classi dinamiche

const Tags = () => {
  // Estrai tutti i tag dai post
  const allTags = posts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  // Funzione per ottenere la classe CSS corrispondente al tag
  const getTagClassName = tag => {
    return `${styles.tag} ${styles[tag]}`;
  };

  return (
    <div>
      <h2>Lista dei Tags</h2>
      <ul>
        {allTags.map((tag, index) => (
          <li key={index} className={getTagClassName(tag)}>
            {tag.toUpperCase()}
            
            
          </li>          
        ))}
        
      </ul>
    </div>
  );
};

export default Tags;
