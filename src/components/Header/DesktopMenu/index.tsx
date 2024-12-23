import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/BeansProject/beans">Бобы</Link>
      <Link to="/BeansProject/facts">Факты</Link>
      <Link to="/BeansProject/recipes">Recipes</Link>
      <Link to="/BeansProject/combinations">Combinations</Link>
      <Link to="/BeansProject/history">History</Link>
    </nav>
  );
};
