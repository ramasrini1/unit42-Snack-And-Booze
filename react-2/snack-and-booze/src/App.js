import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import FoodItem from "./FoodItem";
import NewItem from "./NewItem";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);

  async function getSnacksAndDrinks() {
    console.log("useEffect get snacks");
    let snacks = await SnackOrBoozeApi.getSnacks();
    setSnacks(snacks);
    let drinks = await SnackOrBoozeApi.getDrinks();
    setDrinks(drinks);
    setIsLoading(false);
  }
  
  const handleAdd = () => {
    console.log("handleAdd");
    setItemAdded(!itemAdded);
  }

  useEffect(() => {
    getSnacksAndDrinks();
  }, [itemAdded]);

  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route exact path="/snacks">
              <Menu food={snacks} foodType={"snacks"} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu food={drinks} foodType={"drinks"} title="Drinks"/>
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/newItem">
              <NewItem handleAdd={handleAdd}/>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;



// -----------
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
