import styles from '../../styles/styles.module.css';
import Button from '../Button/Button';

function DashboardButtons() {
  return (
	  <div className={styles.dashboard__buttons}>
		<Button name='Login' to='/login'/>
		<Button name='Register' to='/register'/>
	  </div>
  )
}

export default DashboardButtons;
