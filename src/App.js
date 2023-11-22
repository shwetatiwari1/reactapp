import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import Plantly from "./Plantly";
import HomePage from "./HomePage";
import Sidebar from "./Sidebar";

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  ).then((response) => response.json());
  return {
    props: { data }
  };
};  

function App() {
  return (
   <div>
    <Plantly></Plantly>
    {/* <HomePage></HomePage> */}
    {/* <Login></Login> */}
    {/* <Sidebar></Sidebar> */}
    
   </div>
  );
}
export default App;
