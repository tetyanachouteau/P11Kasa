import styles from "./Tags.module.css"
import Tag from "./Tag"

function Tags({tags}) {
    

    return (
      <div className={styles.tags}>
        {tags.map( (el,index) => <Tag el={el} index={index}></Tag>)}
      </div>
    );
  }
  
  export default Tags;