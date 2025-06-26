import styles from "./styles.module.css";

type InputContainerProps = {
    label_text: string;
    input_type: string;
    input_id: string;
    input_placeholder: string;
};

export function InputContainer({
    label_text,
    input_type,
    input_id,
    input_placeholder,
}: InputContainerProps) {
    return (
        <div className={styles["input-container"]}>
            <label htmlFor={input_id} className={styles["label-text"]}>
                {label_text}
            </label>
            <input
                className={styles["input-field"]}
                type={input_type}
                id={input_id}
                placeholder={input_placeholder}
            />
        </div>
    );
}
