import './App.css';
import React from "react";
import MyTof from './component/ProfilePhoto';
import PrenomNom from './component/profile/FullName';
import Addresse from './component/profile/Address';


const App = () => {
  return (
    <>
      <h2>Hello from my first component !!</h2>
      <MyTof />
      <PrenomNom/>
      <Addresse  />
    </>
  );
 };
 export default App;