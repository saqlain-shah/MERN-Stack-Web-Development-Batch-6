import Home from "./components/Home.jsx";
import Hooks from "./components/hooks/Hooks-useSate.jsx";
import Person from "./components/props/Person.jsx";
function App() {
  return (
    <>
      <h2>Jalal Hussain</h2>
      <p>I'm Jalal Hussain, MERN stack intern at Rinor.</p>
      <Home />
      <Person prop={{ name: "Jalal Hussain", status: "student" }} />
      <Hooks/>
    </>
  );
}

export default App;
