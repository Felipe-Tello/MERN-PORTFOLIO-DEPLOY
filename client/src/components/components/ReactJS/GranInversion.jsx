import styles from './ReactJS.module.css' ;

const GranInversion = ({firstName, lastName, age, hairColor}) => {

    return (
        <div className={`${styles.propsCards} bgn-primary`}>
            <h3>{lastName}, {firstName}</h3>
            <h5>Age: {age}</h5>
            <h5>Hair Color: {hairColor}</h5>
        </div>
    );
}
 
export default GranInversion;