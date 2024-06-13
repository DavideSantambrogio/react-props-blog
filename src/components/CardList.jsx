import React from "react";
import styles from "../style/CardList.module.css";
import CardProps from "./CardProps";
import { posts } from "../../data/data";

const CardList = () => {
  return (
    <main className={styles.cardContainer} >
      {posts.map((post) => (
        <CardProps 
          key={post.id} 
          title={post.title} 
          image={post.image} 
          content={post.content} 
          tags={post.tags} 
          published={post.published} 
        />
      ))}
    </main>
  );
};

export default CardList;
