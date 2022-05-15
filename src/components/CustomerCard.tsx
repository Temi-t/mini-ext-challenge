import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";
interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}
export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
  const dispatch = useDispatch();
  const [cusFoodInput, setCusFoodInput] = useState("");
  const handleAddFood = () => {
    if (!cusFoodInput) return;
    dispatch(
      addFoodToCustomer({
        id,
        food: cusFoodInput,
      })
    );
    setCusFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((item, i) => (
            <p key={"foodItem_" + i}>{item}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={cusFoodInput}
            onChange={(e) => setCusFoodInput(e.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
}
