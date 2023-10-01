import styles from "./Tags.module.css"

function Tags({tags}) {
    

    return (
      <div >
        {tags.map(el => <div className={styles.tag}>{el}</div>)}
      </div>
    );
  }
  
  export default Tags;