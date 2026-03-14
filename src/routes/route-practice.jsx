import Comments from "@/pages/Comments";
import Header from "@/pages/Header";
import NotFound from "@/pages/not-found";
import RecipeDetails from "@/pages/RecipeDetails";
import Recipes from "@/pages/Recipes";
import { Route, Routes, useNavigate } from "react-router-dom";

const Route_practice = () => {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path={"/home"} element={<Header />}>
          <Route path={"comments"} element={<Comments />} />
          <Route path={"recipes"} element={<Recipes />} />
          <Route path={"recipes/:id"} element={<RecipeDetails />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Route_practice;
