import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addNewItem(newItem) {
    console.log(`newItem is id: ${newItem.id} description: ${newItem.description} 
    serve: ${newItem.serve} recipe: ${newItem.recipe} name:${newItem.name} foodType:${newItem.foodType}`);
    const res = await axios.post(`${BASE_API_URL}/${newItem.foodType}`, 
    { 
      id: newItem.id,
      name: newItem.name,
      description: newItem.description,
      recipe: newItem.recipe,
      serve: newItem.serve
    });
    return res.data;
  }

}

export default SnackOrBoozeApi;
