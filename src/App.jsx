import { useState } from "react";
import "./App.css";
import logoPol from "./assets/logoPol.png";
import person from "./assets/person.png";
import Button from "./component/button";

const App = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <main>
      <section className="flex flex-col justify-center items-center bg-blue-800 pb-5 relative">
        <figure>
          <img src={logoPol} alt="Logo" className="w-30 mt-15" />
        </figure>
        <h1 className="text-2xl font-bold mt-5 text-white font-['Parkinsans']">
          Politeknik Negeri Banjarmasin
        </h1>
      </section>

       <div className="w-full absolute">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="scale-[1.01]">
            <path
              fill="#193cb8"
              fillOpacity="1"
              d="M0,96L26.7,122.7C53.3,149,107,
              203,160,197.3C213.3,192,267,128,
              320,122.7C373.3,117,427,171,480,170.7C533.3,171,587,117,640,106.7C693.3,
              96,747,128,800,165.3C853.3,203,
              907,245,960,250.7C1013.3,256,1067,224,1120,208C1173.3,192,1227,192,1280,
              176C1333.3,160,1387,128,1413,112L1440,96L1440,0L1413.3,0C1386.7,0,1333,0
              ,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,
              0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,
              0,160,0C106.7,0,53,0,27,0L0,0Z"
            ></path>
          </svg>
        </div>

      <section className="pt-28 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-['Parkinsans'] font-bold pb-20">Welcome</h2>
        <form action="">
          <label htmlFor="" className="flex items-center justify-center gap-2 border-b-2">
            <figure>
              <img src={person} alt="" className="w-7" />
            </figure>
            <input type="text" placeholder="Nim atau Email anda" className="w-60 text-left
            focus:outline-0"/>
          </label>
        </form>
         <button className="bg-blue-800 p-3 text-[19px] mt-10 w-[40%] text-white font-['Parkinsans']
         rounded-md shadow-black hover:bg-blue-400" type="submit">
          Login
          </button>
      </section>
    </main>
  );
};

export default App;
