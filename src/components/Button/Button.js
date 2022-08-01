import styles from '../../styles/styles.module.css';
import { Link } from 'react-router-dom';

function Button({name}) {
  return (
	  <button className={styles.button}>

		<Link to="/login" className={styles.button__link}>{name}</Link>

	  </button>
  )
}

export default Button;
