import styles from '../../styles/styles.module.css';
import Button from '../Button/Button';

function DashboardButtons() {
  return (
	  <div className={styles.dashboard__buttons}>
		<Button name='Login'/>
		<Button name='Register'/>
	  </div>
  )
}

export default DashboardButtons;
