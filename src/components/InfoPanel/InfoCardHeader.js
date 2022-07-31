import styles from '../../styles/styles.module.css';

function InfoCardHeader({cardName}){
  return(
	  <h2 className={styles.card__header}>{cardName}</h2>
  )
}
export default InfoCardHeader;
