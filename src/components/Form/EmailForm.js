import styles from '../../styles/styles.module.css';

function EmailForm(){
  return(
	  <form className={styles.email} action="" >
		<label className={styles.email__label} htmlFor="email">Enter your e-mail:</label>
		<input className={styles.email__input} type="email" name="email" id="email" required={true}/>
	  </form>
  )
}

export default EmailForm;
