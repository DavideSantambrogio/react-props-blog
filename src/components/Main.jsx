import React from "react";
import styles from "../style/Main.module.css";
import CardList from "./CardList";
import TagList from "./TagList";


const Main = () => {
    return (
        <>
            <main className={styles.container}>
                <div className="row">
                    <div className="col-3 pxy">
                        <TagList/>
                    </div>
                    <div className="col-6 pxy">
                        <CardList />
                    </div>
                    <div className="col-3 pxy">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, rerum quam quod iste nobis nihil assumenda cum dignissimos sunt! Suscipit distinctio amet rerum harum voluptates ex possimus, excepturi voluptate nostrum?</p>
                    </div>
                </div>

            </main>
        </>
    );
}
export default Main