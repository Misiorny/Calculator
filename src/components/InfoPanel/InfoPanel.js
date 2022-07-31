import styles from '../../styles/styles.module.css';
import InfoCard from './InfoCard';

function InfoPanel() {
  return (
	  <div className={styles.info__block}>
		<div className={styles.info}>
		  <h2 className={styles.info__header}>Your money management</h2>
		</div>
		<div className={styles.cards}>
		  <InfoCard cardName='Incomes' />
		  <InfoCard cardName='Expenses'/>
		  <InfoCard cardName='Balance'/>
		</div>
	  </div>
  )
}

export default InfoPanel;
