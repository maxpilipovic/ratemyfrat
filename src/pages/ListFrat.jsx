import React from 'react';
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import { getFratById } from '../services/getFrats';

const ListFrat = () => {

    const { id } = useParams();
    const [frat, setFrat] = useState(null);
    const [loading, setLoading] = useState(true);

    //Fetch schoos from db
    
    useEffect(() => {
      const fetchFrat = async () => {
        try {
          const data = await getFratById(id);
          setFrat(data);
        } catch(error) {
          console.error("Error with grabbing data by school id", error);
        } finally {
          setLoading(false);
        }
      };
    
      fetchFrat();
    }, [id]);
    
    
    //Loading stuff
    if (loading) return <p className="p-8">Loading Fraternity...</p>;
    if (!frat) return <p className="p-8">Fraternity not found.</p>;

    return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{frat.name}</h1>
      <p className="text-gray-700">Location: {frat.location || "N/A"}</p>
      <p className="text-gray-700">Rating: {frat.averageRating || "N/A"}</p>
    </div>
  );
}

export default ListFrat;
