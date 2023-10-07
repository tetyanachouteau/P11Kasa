import styles from "./Tags.module.css"

function Tags({tags}) {
    

    return (
      <div className={styles.tags}>
        {tags.map( (el,index) => <div key={"tag" + index} className={styles.tag}>{el}</div>)}
      </div>
    );
  }
  
  export default Tags;