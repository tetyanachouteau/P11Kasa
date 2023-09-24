import styles from "./CardGrid.module.css"
import Card from "./Card";
function CardGrid(props) {
    return (
        <div className={styles.cardgrid}>
            {props.data.map((logement) => (
                <div key={logement.id} className={styles.card}>
                    <Card data={logement} />
                </div>
            ))}
        </div>
    );
}
export default CardGrid;