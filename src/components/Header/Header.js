import styles from '../../styles/styles.module.css'
function Header(){
  return(
	  <div className={styles.header}>
		<h1 className={styles.header__header}>Budget Calculator</h1>
		<p className={styles.header__text}>Calculate your budget</p>
	  </div>
  )
}

export default Header;
