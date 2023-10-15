import styles from "./Tag.module.css"

function Tags({ el, index }) {


    return (
        <div key={"tag" + index} className={styles.tag}>{el}</div>
    );
}

export default Tags;