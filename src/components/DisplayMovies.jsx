import React from 'react'
import App from '../App'

const DisplayMovies = (props) => {
    
    const loaded = () => {
     const favs =  props.favMovies.map((element)=> {
        return (
            <div key={element.imdbID} >
            <h1>{element.Title}</h1>
            </div>
    );
})
      // const loading = () => {
      //   return <h1>No Movie to Display</h1>;
      // };

      return props.favMovies ? loaded() : <h1> No Movie to Display </h1> 
 
}
  
 



// console.log('loaded')

}
export default DisplayMovies

// {favMovies.map((mov, index)=> {
//     return (
//         <h1 key={index}>{mov.Title}</h1>
//     )
// })}

// const loaded = () => {
//     return (
//       <>
//         <h1>{favMovies.Title}</h1>
//         <h2>{favMovies.Genre}</h2>
//         <img src={favMovies.Poster} alt={favMovies.Title} />
//         <h2>{favMovies.Year}</h2>

//       </>
//     );
//   };

// From Code Academy Lesson:
// import React, { useState } from "react";
 
// const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 
// export default function PersonalPizza() {
//   const [selected, setSelected] = useState([]);
 
//   const toggleTopping = ({target}) => {
//     const clickedTopping = target.value;
//     setSelected((prev) => {
//      // check if clicked topping is already selected
//       if (prev.includes(clickedTopping)) {
//         // filter the clicked topping out of state
//         return prev.filter(t => t !== clickedTopping);
//       } else {
//         // add the clicked topping to our state
//         return [clickedTopping, ...prev];
//       }
//     });
//   };
 
//   return (
//     <div>
//       {options.map(option => (
//         <button value={option} onClick={toggleTopping} key={option}>
//           {selected.includes(option) ? "Remove " : "Add "}
//           {option}
//         </button>
//       ))}
//       <p>Order a {selected.join(", ")} pizza</p>
//     </div>
//   );