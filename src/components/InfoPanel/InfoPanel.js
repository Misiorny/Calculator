import InfoData from './InfoData';
import { Route, Routes } from 'react-router-dom';
import LoginPanel from '../LoginPanel/LoginPanel';
import EditionPanel from '../EditionPanel/EditionPanel';
import DetailsPanel from '../DetaislPanel/DetailsPanel';
import IncomesDetails from '../DetaislPanel/IncomesDetails';
import ExpensesDetails from '../DetaislPanel/ExpensesDetails';
import Dashboard from '../Dashboard/Dashboard';
import RegistrationPanel from '../LoginPanel/RegistrationPanel';

function InfoPanel() {
  return (
	  <Routes>
		<Route path="/" element={<Dashboard/>}/>
		<Route path="/login" element={<LoginPanel/>}/>
		<Route path="/register" element={<RegistrationPanel/>}/>
		<Route path="/info" element={<InfoData/>}/>
		<Route path='/edit' element={<EditionPanel/>}/>
		<Route path='/detail' element={<DetailsPanel/>}/>
		<Route path='/detail/incomes' element={<IncomesDetails/>}/>
		<Route path='/detail/expenses' element={<ExpensesDetails/>}/>
	  </Routes>
  )
}

export default InfoPanel;
