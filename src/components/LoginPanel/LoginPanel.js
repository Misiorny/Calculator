import styles from '../../styles/styles.module.css';
import EmailForm from '../Form/EmailForm';
import PasswordForm from '../Form/PasswordForm';

function LoginPanel() {
  return (
	  <form action="" className={styles.login}>
		<div>
		  <EmailForm/>
		  <PasswordForm/>
		</div>
	  </form>
  )
}

export default LoginPanel;
