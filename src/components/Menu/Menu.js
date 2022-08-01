import styles from '../../styles/styles.module.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
	  <nav className={styles.navbar}>
		<ul className={styles.navbar__list}>
		  <li className={styles.navbar__item}>
			<Link to="/edit" className={styles.navbar__link}>Edition</Link>
		  </li>
		  <li className={styles.navbar__item}>
			<Link to="/info" className={styles.navbar__link}>Info</Link>
		  </li>
		  <ul className={styles.navbar__list_double}>
			<li className={styles.navbar__item_full}>
			  <Link className={styles.navbar__link_double} to="/detail">Details</Link>
			</li>
			<li className={styles.navbar__item_double}>
			  <Link className={styles.navbar__link_double} to="/detail/incomes">Income</Link>
			</li>
			<li className={styles.navbar__item_double}>
			  <Link className={styles.navbar__link_double} to="/detail/expenses">Expenses</Link>
			</li>
		  </ul>
		</ul>
	  </nav>
  )
}

export default Menu;
