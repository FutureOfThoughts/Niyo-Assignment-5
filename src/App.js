import './App.css';
import Grid from "./component-grid/Grid";
import Banner from "./component-banner/Banner";
import Data from "/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/component-grid/Data.js";

function App() {
  return (
    <>
    <div className='section1'>
    <h3>WHY NIYO BOOTCAMP</h3>
    <h1>Bespoke all round </h1>
    <h1 className='line2'>support!</h1>
    </div>
    <Grid/>
    <Data />
    <Banner />
    </>
  );
}

export default App;
