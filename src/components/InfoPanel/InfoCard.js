import styles from '../../styles/styles.module.css';
import InfoCardHeader from './InfoCardHeader';
import InfoCardBody from './InfoCardBody';

function InfoCard({cardName, month, value}) {
  return (

		<div className={styles.card}>
		  <InfoCardHeader cardName={cardName}/>
		  <InfoCardBody cardName={cardName} month={month} value={value}/>
		</div>

  )
}

export default InfoCard;
