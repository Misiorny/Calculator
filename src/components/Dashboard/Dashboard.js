import styles from '../../styles/styles.module.css';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import DashboardButtons from './DashboardButtons';

function Dashboard(){
  return(
	  <section className={styles.dashboard}>
		<DashboardHeader/>
		<DashboardContent/>
		<DashboardButtons/>
	  </section>
  )
}

export default Dashboard;
