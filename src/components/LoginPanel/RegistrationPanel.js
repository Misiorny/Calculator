import styles       from '../../styles/styles.module.css';
import NameForm     from '../Form/NameForm';
import SurnameForm  from '../Form/SurnameForm';
import EmailForm    from '../Form/EmailForm';
import PasswordForm from '../Form/PasswordForm';
import StreetForm   from '../Form/StreetForm';
import CodeForm     from '../Form/CodeForm';

function RegistrationPanel() {
  return (
	  <form action="" className={styles.login}>
		<div>
		  <NameForm/> <SurnameForm/> <EmailForm/> <PasswordForm label='Enter'/> <PasswordForm label='Confirm'/>
		  <StreetForm/> <CodeForm/>
		</div>
	  </form>
  )
}

export default RegistrationPanel;
