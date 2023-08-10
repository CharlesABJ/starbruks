"use client";
import React, { useState } from "react";
import "./Main.scss";

function Main(props) {
  const [selectedCoffeeSrc, setSelectedCoffeeSrc] = useState(
    "./assets/images/img1.png"
  );
  const [selectedCoffeeClass, setSelectedCoffeeClass] = useState("coffee-1");

  const selectCoffee = (src, coffeeClass) => {
    setSelectedCoffeeSrc(src);
    setSelectedCoffeeClass(coffeeClass);
  };

  return (
    <main>
      <section>
        <div className="presentation">
          <h1>
            It's not just Coffee <br />
            It's <span>Starbruks</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            illo. Autem iste aut mollitia veritatis, error porro consequuntur.
            Alias quibusdam omnis voluptate distinctio, velit nisi similique
            optio error in rerum? Quos doloremque error placeat, possimus nam
            eaque maxime fugiat nisi quia voluptas expedita sapiente.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className={`coffee-selected ${selectedCoffeeClass}`}>
          <img src={selectedCoffeeSrc} alt="Selected Coffee" />
          <div className="contact">
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="coffees-zone">
        <img
          className={selectedCoffeeClass === "coffee-1" ? "active-coffe" : ""}
          onClick={() => selectCoffee("./assets/images/img1.png", "coffee-1")}
          width={92}
          src="./assets/images/img1.png"
          alt="Miam1"
        />

        <img
          className={selectedCoffeeClass === "coffee-2" ? "active-coffe" : ""}
          onClick={() => selectCoffee("./assets/images/img2.png", "coffee-2")}
          width={92}
          src="./assets/images/img2.png"
          alt="Miam2"
        />

        <img
          className={selectedCoffeeClass === "coffee-3" ? "active-coffe" : ""}
          onClick={() => selectCoffee("./assets/images/img3.png", "coffee-3")}
          width={92}
          src="./assets/images/img3.png"
          alt="Miam3"
        />
      </div>
    </main>
  );
}

export default Main;
