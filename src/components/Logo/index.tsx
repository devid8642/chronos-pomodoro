import { Timer } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
    return (
        <section className={styles["logo-container"]}>
            <a href="#" className={styles["logo-link"]}>
                <Timer size={48} color="#0da170" strokeWidth={2.25} />
                <h1 className={styles["logo-title"]}>Chronos</h1>
            </a>
        </section>
    );
}
