import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
{/* data is being placed as props in the child element */}
      <Home city={user.city} color={user.color} bio={user.bio} name={user.name} />
      <About links={user.links} bio={user.bio} />
    </div>
  );
}
export default App;