import Header from '../components/Header/Header';
import InfoPanel from '../components/InfoPanel/InfoPanel';
import Menu from '../components/Menu/Menu';

function BudgetCalc(){
  return(
	<div className="main">
	  <Header/>
	  <Menu/>
	  <InfoPanel/>
	</div>
  );
}

export default BudgetCalc;
