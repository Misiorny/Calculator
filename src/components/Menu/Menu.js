import styles from '../../styles/styles.module.css';

function Menu() {
  return (
	  <nav className={styles.navbar}>
		<ul className={styles.navbar__list}>
		  <li className={styles.navbar__item}>
			<a href="/edit" className={styles.navbar__link}>Edition</a>
		  </li>
		  <li className={styles.navbar__item}>
			<a href="/info" className={styles.navbar__link}>Info</a>
		  </li>
		  <ul className={styles.navbar__list_double}>
			<li className={styles.navbar__item_full}>
			  <a className={styles.navbar__link_double} href="/detail">Details</a>
			</li>
			<li className={styles.navbar__item_double}>
			  <a className={styles.navbar__link_double} href="/detail/incomes">Income</a>
			</li>
			<li className={styles.navbar__item_double}>
			  <a className={styles.navbar__link_double} href="/detail/expenses">Expenses</a>
			</li>
		  </ul>
		</ul>
	  </nav>
  )
}

export default Menu;
