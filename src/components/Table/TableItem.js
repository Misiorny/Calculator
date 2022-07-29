import styles from '../../styles/styles.module.css';

function TableRow(no, date, description, value) {
  return (
	  <tbody className={styles.table__row}>
	  <tr>
		<td>{no}</td>
		<td>{date}</td>
		<td>{description}</td>
		<td>{value}</td>
	  </tr>
	  </tbody>
  )
}

export default TableRow;
