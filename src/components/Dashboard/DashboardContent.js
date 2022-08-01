import styles from '../../styles/styles.module.css';

function DashboardContent(){
  return(
	  <div className={styles.dashboard__content}>
		<p className={styles.dashboard__content_text}>Application allows you to input all your incomes and expenses.</p>
		<p className={styles.dashboard__content_text}>As result, you know current balance. </p>
		<p className={styles.dashboard__content_text}>Please, login or register yourself. </p>
	  </div>
  )
}

export default DashboardContent;
