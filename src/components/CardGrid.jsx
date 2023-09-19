import styles from "./CardGrid.module.css"
import Card from "./Card";
function CardGrid() {
    return (
        <div className={styles.cardgrid}>
            <p>CardGrid debut</p>
            <p >CardGrid</p>
            <p>CardGrid fin</p>
            <Card/>
        </div>
    );
}
export default CardGrid;