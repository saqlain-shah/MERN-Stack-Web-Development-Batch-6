import Home from "./components/Home.jsx";
import Hooks from "./components/hooks/Hooks-useSate.jsx";
import Person from "./components/props/Person.jsx";
import User from "./components/hooks/User.jsx";
function App() {
  return (
    <>
      <h2>Raect Js</h2>
      <p>I'm Jalal Hussain, MERN stack intern at Rinor.</p>
      <hr />
      <Home />
      <hr />
      <Person prop={{ name: "Jalal Hussain", status: "student" }} />
      <hr />
      <Hooks />
      <hr />
      <User />
      <hr />
    </>
  );
}

export default App;
