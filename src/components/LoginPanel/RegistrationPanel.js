import styles from '../../styles/styles.module.css';
import NameForm from '../Form/NameForm';
import SurnameForm from '../Form/SurnameForm';
import EmailForm from '../Form/EmailForm';
import PasswordForm from '../Form/PasswordForm';

function RegistrationPanel(){
  return(
	  <form action="" className={styles.login}>
		<div>
		  <NameForm/>
		  <SurnameForm/>
		  <EmailForm/>
		  <PasswordForm label='Enter'/>
		  <PasswordForm label='Confirm'/>
		</div>
	  </form>
  )
}

export default RegistrationPanel;
