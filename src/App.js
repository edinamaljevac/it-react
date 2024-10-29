import { useState } from 'react';
import './App.css';
import NewsCard from './components/NewsCard/NewsCard';

// function App() {
//   return (
//     <div className="container">
//       <NewsCard 
//       title = "7 golova u Novom Pazaru"
//       description = "U Novom Pazaru na Gradskom Stadionu, utakmica izmedju Novog Pazara i Partizana zavrsena rezultatom 3:4"
//       date="22.10.2024."
//       />
//       <NewsCard 
//         title = "Samo odrasle osobe mogu da gledaju film Terrifer"
//         description = "Kulturni Centar u Novom Pazaru zabranjuje deci gledanje filma Terrifer iz nekog razloga"
//         date="23.10.2024."
//       />
//       <NewsCard 
//         title = "Suncano u Novom Pazaru"
//         description = "U Novom Pazaru najavljeno je +24C, zahladjenje najavljeno tek od sledece nedelje"
//         date="23.10.2024."/>
//     </div>
//   );      
// }

function App(){
  const [broj, setBroj] = useState(0);
  
 
  function changeNumber(){
    let RandomNum = Math.floor(Math.random() * 100);
    setBroj(RandomNum);
  }
  
  return(
    <>
    <div className='container' style={{flexDirection: 'column'}}>
      <h1>{broj}</h1>
      <button
      style={{
        padding: "5px 10px",
        border: "none",
        borderRadius: 12,
        outline: "none",
        backgroundColor: "lightblue",
        color: "black",
        fontSize: 24,
        cursor: "pointer",
      }}
      onClick={() => setBroj(changeNumber)}>
        Inkrementiraj
      </button>
    </div>

    <div 
    style={{
      height: 300,
      width: 300,
      border: "2px solid black",
      backgroundColor: broj % 2 === 0 ? "beige" : "lightpink",
    }}>
    </div>
    </>
  );
}
export default App;
