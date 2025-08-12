import React from 'react';
import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../services/firebase';

const states = ["Select","Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"];

const AddSchool = () => {
    const [school, setSchool] = useState('');
    const [state, setState] = useState(states[0]);
    const [city, setCity] = useState('');
    
    //Handle submit function
    //Probably
    const handleSubmit = async (e) => {
      
      //Prevent nothing from being submitted
      e.preventDefault();
      
      // Simple validation
      if (!school || !city || state === "Select") {
        alert("Please fill out all fields.");
        return;
      }

      //Attempt to store in firebase db
      try {
        //Add doc instead of setDoc for auto-generated ID
        await addDoc(collection(db, 'schools'), {
          name: school,
          city: city,
          state: state,
          reviewCount: 0,
          imageUrl: "https://via.placeholder.com/150"
        });

        //Reset
        setSchool('');
        setCity('');
        setState(states[0]);
        alert("School added successfully!");

    } catch (error) {
      console.error("Error adding school:", error);
    }
  };

    return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Add School Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type = "text"
          placeholder = "City"
          value = {city}
          onChange = {(e) => setCity(e.target.value)}
        />
        <input
          type = "text"
          placeholder = "University"
          value = {school}
          onChange = {(e) => setSchool(e.target.value)}
        />
        <select
          value = {state}
          onChange = {(e) => setState(e.target.value)}
        >
          {states.map((s) => (
            //Key unique key
            //Value what gets submitted when form is sent
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          type="submit"
          class="text-black py-2 px-4 rounded"
        >
          Add School
        </button>
      </form>
    </div>
  );
}

export default AddSchool;