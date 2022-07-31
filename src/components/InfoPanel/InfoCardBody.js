import styles from '../../styles/styles.module.css';

function InfoCardBody({cardName, month, value}){
  return(
	  <div className={styles.card__body}>
		<h3 className={styles.card__body_header}>{cardName} by month</h3>
		<p className={styles.card__body_text}>{month}</p>
		<p className={styles.card__body_text}>{value} PLN</p>
	  </div>
  )
}
export default InfoCardBody;
