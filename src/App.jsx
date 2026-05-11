import { Suspense } from "react";
import navLogo from "./assets/cricket-logo.png";
import dollarSign from "./assets/dollar-sign.png";
import Players from "./components/Players";

const playersPromise = fetch("players.json").then((res) => res.json());

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <img src={navLogo} width="50px" alt="logo" />
          </div>
          <div className="flex gap-2">
            <span>60000000</span>
            <span>Coins</span>
            <img src={dollarSign} width="25px" alt="" />
          </div>
        </div>
        <div>
          {
            <Suspense fallback={<h3>Loading...</h3>}>
              <Players playersPromise={playersPromise}></Players>
            </Suspense>
          }
        </div>
      </div>
    </>
  );
}

export default App;
