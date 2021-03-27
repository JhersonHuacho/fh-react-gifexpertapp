import React, { useState } from 'react';
import  AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifEpertApp = () => {
  
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch'])
  console.log('inicio', categories);
  const handleApp = () => {
    console.log('dentro del método - Antes de setCategories', categories);
    //...categories => Operador Spread (Spread operator)
    setCategories([...categories, 'HunterXHunter']);        
    //setCategories(cats => [...cats, 'HunterXHunter']);
    console.log('dentro del método - Depues de setCategories', categories);    
    setCategories([...categories, 'huacho']);
  }

  console.log('antes del return', categories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      {/* <button onClick={handleApp}>Agregar</button> */}
      <hr/>      
      <ol>
        {
          categories.map(category => {
            //return <li key={ category }>{ category }</li>
            return <GifGrid key={category} category={category} />
          })
        }
      </ol>
    </>
  )
}

export default GifEpertApp;