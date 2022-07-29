import styles from '../../styles/styles.module.css';
import InfoIncomes from './InfoIncomes';
import InfoExpenses from './InfoExpenses';
import InfoPocket from './InfoPocket';

function InfoPanel() {
  return (
	  <div className={styles.info__block}>
		<div className={styles.info}>
		  <h2 className={styles.info__header}>Your money management</h2>
		</div>
		<div className={styles.card}>
		  <InfoIncomes/>
		  <InfoExpenses/>
		  <InfoPocket/>
		</div>
	  </div>
  )
}

export default InfoPanel;
