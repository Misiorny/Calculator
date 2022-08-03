import styles from '../../styles/styles.module.css';

function CodeForm(){
  return(
	  <form className={styles.code} action="" >
		<label className={styles.code__label} htmlFor="code">Enter your e-mail:</label>
		<input className={styles.code__input} type="number" name="code" id="code" required={true}/>
	  </form>
  )
}

export default CodeForm;
