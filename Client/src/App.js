import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';

//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
//const API_KEY = '17980ff24e1b.5043e89ffeefcfcde167';
const email = 'Kenny@gmail.com';
const password = 'ken12345';

function App() {
   const navigate = useNavigate ();
   const location = useLocation ();
   const [characters, setCharacters] = useState ([]);
   const [access,setAccess] = useState (false);
   const login = (userData) => {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }
    useEffect(() => {
      !access && 
      navigate('/')

   }, [access, navigate]);


   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data) 
         .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !==Number (id))
      setCharacters(charactersFiltered)

   }
   
   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} />
            
         }
         
         <Routes>
            <Route path = "/" element = {<Form login = {login}/>} />
            <Route path = '/home' element = {<Cards characters = {characters} onClose = {onClose} />} />
            <Route path = '/about' element = {<About/> } />
            <Route path = '/detail/:id' element = {<Detail/>} />
            <Route path = '/favorites' element ={<Favorites/>} />
         </Routes>
         
      </div>
   );
}

export default App;
