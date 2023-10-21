import styles from "./Tag.module.css"

function Tag({ el}) {


    return (
        <div className={styles.tag}>{el}</div>
    );
}

export default Tag;