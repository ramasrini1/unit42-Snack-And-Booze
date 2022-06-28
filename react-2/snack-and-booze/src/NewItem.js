import React, {useState} from "react";
import SnackOrBoozeApi from "./Api";
import { useHistory } from "react-router-dom";
import './NewItem.css';

function NewItem({handleAdd}) {
  const history = useHistory();

  const INITIAL_STATE = {
    id: '',
    name: '',
    description: '',
    recipe: '',
    serve: '',
    foodType: 'snacks'
  }

 
  const [formData, setFormData] = useState(INITIAL_STATE);
  
  const handleChange =  (e) => {
    const {name, value} = e.target;
    console.log("name is " + e.target.name);
    console.log("value is " + e.target.value);
    
    setFormData(formData => ( {
      ...formData,
      [name]: value 
    } ))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    SnackOrBoozeApi.addNewItem({...formData, id:(formData.name).toLowerCase()})
    handleAdd();
    history.push(`/${formData.foodType}`);
    setFormData(INITIAL_STATE);
  }
  
  return (
    <>
    
    <div align="center">
      <h1 style={{
      color: 'blue'
    }}>Add New Snacks/Drinks</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <select name="foodType" value={formData.foodType} onChange={handleChange}>
            <option value="snacks">Snacks</option>
            <option value="drinks">Drinks</option>    
        </select> 
      </div>
    
    <label htmlFor="name">Name</label>
    <input 
      id="name" 
      type="text" 
      name="name"
      placeholder="Name" 
      value={formData.name} 
      onChange={handleChange}
      required
    />
    <label htmlFor="description">Description</label>
    <input 
      id="description" 
      type="text" 
      name="description"
      placeholder="Description"
      value={formData.description} 
      required
      onChange={handleChange}

    />

    <label htmlFor="recipe">Recipe</label>
    <input 
      id="recipe" 
      type="text" 
      name="recipe"
      placeholder="recipe"
      value={formData.recipe} 
      required
      onChange={handleChange}
    />

    <label htmlFor="serve">Serve</label>
    <input 
      id="serve" 
      type="text" 
      name="serve"
      placeholder="serve"
      value={formData.serve} 
      required
      onChange={handleChange}
    />

    <button>Add Food Item!</button>
   
  </form>
  </div>
  </>
  );
}

export default NewItem;

// import useLocalStorageState from './hooks/useLocalStorageState';
// const ColorPicker = () => {
//   const [color, setColor] = useLocalStorageState('color', 'teal');
//   const changeColor = e => {
//     setColor(e.target.value)
//   }
//   return (
//     <div>
//       <h1 style={{ color }}>Your Color Is  {color}</h1>
//       <div>
//       <select value={color} onChange={changeColor}>
//         <option value="red">Red</option>
//         <option value="teal">Teal</option>
//         <option value="orange">Orange</option>
//         <option value="yellow">Yellow</option>
//         <option value="purple">Purple</option>
//       </select>
//       </div>
//     </div>
//   )
// }

// export default ColorPicker;