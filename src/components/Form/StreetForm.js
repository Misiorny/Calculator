import styles from '../../styles/styles.module.css';

function StreetForm() {
  return (
	  <form className={styles.street} action="">
		<label className={styles.street__label} htmlFor="street">Enter name of the street:</label>
		<input className={styles.street__input_name} type="text" name="street" id="street" required={true}/>
		<label className={styles.street__label} htmlFor="number">Enter number of the street:</label>
		<input className={styles.street__input_number} type="number" name="number" id="number" required={true}/>
		<label className={styles.street__label} htmlFor="local">Enter local number:</label>
		<input className={styles.street__input_local} type="number" name="local" id="local" required={true}/>
	  </form>
  )
}

export default StreetForm;
