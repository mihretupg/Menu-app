import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [category, setCategory] = useState([]);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>De' Resto Rante</h2>
          <div className="underline"></div>
        </div>
        <button className="btn btn-primary">Button</button>
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
