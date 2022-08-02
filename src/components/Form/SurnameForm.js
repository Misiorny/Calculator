import styles from '../../styles/styles.module.css';

function SurnameForm(){
  return(
	  <form className={styles.surname} action="" >
		<label className={styles.surname__label} htmlFor="surname">Enter your name:</label>
		<input className={styles.surname__input} type="text" name="surname" id="surname" required={true}/>
	  </form>
  )
}

export default SurnameForm;
