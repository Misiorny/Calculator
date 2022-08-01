import styles from '../../styles/styles.module.css';
import InfoCard from './InfoCard';

function InfoData() {
  return (
	  <div className={styles.info__block}>
		<div className={styles.info}>
		  <h2 className={styles.info__header}>Your money management</h2>
		</div>
		<div className={styles.cards}>
		  <InfoCard cardName='Incomes' month='Styczeń' value='1000'/>
		  <InfoCard cardName='Expenses' month='Styczeń' value='400'/>
		  <InfoCard cardName='Balance' month='Styczeń' value='600'/>
		</div>
	  </div>
  )
}

export default InfoData;
