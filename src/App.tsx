import { FC } from 'react'

import data from './data.json'

import './App.css'
import Flights from './components/Flights';
import Accordion from './components/Accordion';
import Products from './components/Products';
import TermsAndCondition from './components/TermsAndCondition';
import Price from './components/Price';


const App = () => {
  //console.log(data)
  return (
    <div className='container'>
      <Price />
      <TermsAndCondition />
    <Products />
     <Accordion />
   <Flights />

    </div>
  );
};


export default App
