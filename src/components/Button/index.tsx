import styles from "./styles.module.css";

type ButtonProps = {
    icon: React.ReactNode;
    color?: "green" | "red";
};

export function Button({ icon, color = "green" }: ButtonProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`}>
                {icon}
            </button>
        </>
    );
}
