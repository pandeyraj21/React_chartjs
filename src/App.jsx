

import LineGraph from './components/Line'
import BarGraph from './components/BarChart';
import PieChart from './components/Pie';

function App() {

  const divStyle = {
    height: '10%',
    width: '30%',
  };

  return (
    <>
    <div   style={divStyle} >

    <LineGraph/>
    <BarGraph/>
    <PieChart/>


    </div>

    </>
  )
}

export default App
