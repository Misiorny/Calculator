import styles from '../../styles/styles.module.css';
import InfoCardHeader from './InfoCardHeader';
import InfoCardBody from './InfoCardBody';

function InfoCard() {
  return (

		<div className={styles.card}>
		  <InfoCardHeader cardName='Incomes'/>
		  <InfoCardBody cardName='Incomes' month='Styczeń' value='1000'/>
		</div>

  )
}

export default InfoCard;
