import { useEffect, useState } from "react"
import React from "react"
import "./ListOfMeals.css"
import MealItem from "./MealItem"

const ListOfMeals = () => {

const [dataMeals, setDataMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =  await fetch("https://react-http-563d3-default-rtdb.europe-west1.firebasedatabase.app/order_meals.json")
        const ResponseData= await response.json()
         
        if (!response.ok) {
          throw new Error("Something went wrong")
        }

        const arrayOfMeals = [];
        for ( const key in ResponseData) {
          arrayOfMeals.push({
            id: key,
            name: ResponseData[key].name,
            price: ResponseData[key].price
          })
        }

        setDataMeals(arrayOfMeals)
        
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData()
}, [])

const MealList = dataMeals.map((meal) => 
<MealItem
    key={meal.key}
    name={meal.name}
    price={meal.price}
    id={meal.id}
    />
    )
    
    
   
    return (
      <section >
        <div className="background">
          <div className="menu-wrapper">
        {MealList}
        </div>
        </div>
    </section>
    )
}

export default ListOfMeals;