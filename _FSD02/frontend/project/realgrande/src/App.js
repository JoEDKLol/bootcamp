import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import House from './components/House';
import { useEffect, useState } from 'react';
import SearchFilter from './components/SearchFilter';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import Test from './components/Test';
import SignUp from './components/SignUp';
import Login from './components/Login';





function App() {
  const [housesData, setHousesData] = useState([]);
  //;

  //to read houses. Json and send one house obj to House.js
  useEffect(()=>{
    // console.log('useEffect start');
    const fetchData = async () => {
      const resp = await fetch('/house.json');
      const data = await resp.json();
        if (!data) { return null }
        // console.log(' date from json - ');
        // console.log(data);
        setHousesData(data);
        //write the data to the state so we can use it anywhere in the component
    };
    fetchData();
    // console.log('data from state');
    // console.log(housesData);
  },[]);



  return (
    <div className='container-flud'>
      <Header />
      <SearchFilter houseinfo={housesData}/>

      <Routes>
        <Route path='/' element={<House houseinfo={housesData[Math.floor(Math.random() * 10)]}/>}/>
        <Route path='/searchresults/:county' element={<SearchResults houses={housesData}/>}/>
        <Route path='/searchedHouse/:id' element={<SearchedHouse houseinfo={housesData}/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        
        {/* <Route path='/test' element={<Test/>}/> */}
      </Routes>

      {/* { housesData[0] && <House houseinfo={housesData[0]} /> } */}
      {/* {(housesData[0]) ? <House houseinfo={housesData[0]} /> : ''} */}
      {/* <House houseinfo={housesData[Math.floor(Math.random() * 10)]}/> */}
      <Footer />
    </div>
  );
}

export default App;
