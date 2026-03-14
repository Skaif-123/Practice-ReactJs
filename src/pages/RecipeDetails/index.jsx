import React from "react";
import { useLocation, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  console.log(location);

  return (
    <>
    {params.id}
    </>
  )
};

export default RecipeDetails;
