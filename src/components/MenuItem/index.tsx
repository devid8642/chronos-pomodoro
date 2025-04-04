import styles from "./styles.module.css";

type MenuItemProps = {
    children: React.ReactNode;
};

export function MenuItem({ children }: MenuItemProps) {
    return (
        <a href="#" className={styles["menu-item-link"]}>
            {children}
        </a>
    );
}
