import styles from '../../styles/styles.module.css';

function EmailForm({label}){
  return(
	  <form className={styles.password} action="" >
		<label className={styles.password__label} htmlFor="password">{label} your password:</label>
		<input className={styles.password__input} type="password" name="password" id="password" required={true}/>
	  </form>
  )
}

export default EmailForm;
