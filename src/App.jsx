// import Nav from './Components/Header/Nav';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Price from './Components/Price/Price';
import LineChart from './Components/Rechart/LineChart';
import Phones from './Components/Phone/Phones';
function App() {
  return (
    <>
      {/* <Nav></Nav> */}
      <NavBar></NavBar>
      <Price></Price>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
