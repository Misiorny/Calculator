import styles from '../../styles/styles.module.css';

function Menu() {
  return (
	  <nav className={styles.navbar}>
		<ul className={styles.navbar__list}>
		  <li className={styles.navbar__item}>
			<a href="/" className={styles.navbar__link}>Info</a>
		  </li>
		  <li className={styles.navbar__item}>
			<a href="/" className={styles.navbar__link}>Edition</a>
		  </li>
		  <li className={styles.navbar__list_double}>
			<p className={styles.navbar__text_double}>Details</p>
			<li className={styles.navbar__item_double}>
			  <a className={styles.navbar__link_double} href="/">Income</a>
			</li>
			<li className={styles.navbar__item_double}>
			  <a className={styles.navbar__link_double} href="/">Expenses</a>
			</li>
		  </li>

	  </ul>
</nav>
)
}

export default Menu;
