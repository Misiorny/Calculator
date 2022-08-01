import styles from '../../styles/styles.module.css';

function DashboardHeader(){
  return(
	  <div className={styles.dashboard__header}>
		<h2 className={styles.dashboard__header_head}>Welcome to Budget Calculator!</h2>
		<p className={styles.dashboard__header_text}>The best application for control your cash flow.</p>
	  </div>
  )
}

export default DashboardHeader;
