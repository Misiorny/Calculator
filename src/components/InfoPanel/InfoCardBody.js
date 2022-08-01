import styles from '../../styles/styles.module.css';

function InfoCardBody({cardName, month, value}) {
  return (
	  <div className={styles.card__body}>
		<h3 className={styles.card__body_header}>{cardName} by month</h3>
		<div className={styles.card__body_text}>
		  <p className={styles.card__body_month}>{month}</p>
		  <p className={styles.card__body_value}>{value} PLN</p>
		</div>
	  </div>
  )
}

export default InfoCardBody;
