import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";
import { MenuItem } from "../MenuItem";
import styles from "./styles.module.css";

export function Menu() {
    return (
        <nav className={styles["menu"]}>
            <MenuItem>
                <HomeIcon />
            </MenuItem>
            <MenuItem>
                <HistoryIcon />
            </MenuItem>
            <MenuItem>
                <SettingsIcon />
            </MenuItem>
            <MenuItem>
                <SunIcon />
            </MenuItem>
        </nav>
    );
}
