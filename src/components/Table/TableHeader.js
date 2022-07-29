import styles from '../../styles/styles.module.css';

function TableHeader() {
  return (
	  <table className={styles.table}>
		<thead className={styles.table__header}>
		<tr>
		  <td>No</td>
		  <td>Date</td>
		  <td>Description</td>
		  <td>Value</td>
		</tr>
		</thead>
	  </table>
  )
}

export default TableHeader;
