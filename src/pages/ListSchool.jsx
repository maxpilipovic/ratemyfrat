import React from 'react';
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import { getSchoolById } from '../services/getSchools';

const ListSchool = () => {

    const { id } = useParams();
    const [school, setSchool] = useState(null);
    const [loading, setLoading] = useState(true);

    //Fetch schoos from db

    useEffect(() => {
      const fetchSchool = async () => {
        try {
          const data = await getSchoolById(id);
          setSchool(data);
        } catch(error) {
          console.error("Error with grabbing data by school id", error);
        } finally {
          setLoading(false);
        }
      };

      fetchSchool();
    }, [id]);


    //Loading stuff
    if (loading) return <p className="p-8">Loading school...</p>;
    if (!school) return <p className="p-8">School not found.</p>;



    return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{school.name}</h1>
      <p className="text-gray-700">Location: {school.location || "N/A"}</p>
      <p className="text-gray-700">Rating: {school.averageRating || "N/A"}</p>
    </div>
  );
}

export default ListSchool;
