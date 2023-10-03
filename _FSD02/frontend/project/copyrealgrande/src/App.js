import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResult from './components/SearchResult';
import SearchHouse from './components/SearchHouse';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  const [houses, setHouses] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
        const resData = await fetch('/houses.json');
        const data = await resData.json(); 
        setHouses(data);
    }

    fetchData();

  },[])



  return (
    <div>
      <Header/>
      <SearchFilter houses={houses}/>
      {/* <SearchResult houses={houses}/> */}
      <Routes>
        <Route path="/" element={<House houseInfo={houses[Math.floor(Math.random()*10)]}/>}/>
        <Route path="/searchResult/:county" element={<SearchResult houses={houses}/>} />
        <Route path="/searchHouse/:id" element={<SearchHouse houses={houses}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
