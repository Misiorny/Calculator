import styles from '../../styles/styles.module.css';

function NameForm(){
  return(
	  <form className={styles.name} action="" >
		<label className={styles.name__label} htmlFor="name">Enter your name:</label>
		<input className={styles.name__input} type="text" name="name" id="name" required={true}/>
	  </form>
  )
}

export default NameForm;
