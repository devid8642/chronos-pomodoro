import styles from "./styles.module.css";

export function CountDown() {
    return (
        <section className={styles["countdown-container"]}>
            <p className={styles["countdown-counter"]}>00:00</p>
        </section>
    );
}
