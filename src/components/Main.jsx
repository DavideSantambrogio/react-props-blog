import React from "react";
import styles from "../style/Main.module.css";
import CardList from "./CardList";


const Main = () => {
    return (
        <>
            <main className={styles.container}>
                <CardList />
            </main>
        </>
    );
}
export default Main