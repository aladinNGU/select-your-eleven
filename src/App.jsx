import { Suspense, useState } from "react";

import Players from "./components/Players";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("players.json");
  return res.json();
};
const playersPromise = fetchPlayers();
// const playersPromise = fetch("players.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(100);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // const playersPromise = fetchPlayers();

  const removeSelectedPlayer = (p) => {
    // console.log(p);
    const remainingSelectedPlayers = selectedPlayers.filter(
      (ply) => ply.name !== p.name,
    );
    setSelectedPlayers(remainingSelectedPlayers);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar availableBalance={availableBalance}></Navbar>
        <div className="flex justify-between font-bold mt-6">
          <div>
            {toggle === true ? (
              <h3>Available Players</h3>
            ) : (
              <h3>Selected Players</h3>
            )}
          </div>
          <div className="flex">
            <button
              onClick={() => setToggle(true)}
              className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE28]" : ""}`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE28]" : ""}`}
            >
              Selected (<span>{selectedPlayers.length}</span>)
            </button>
          </div>
        </div>
        <div>
          {toggle === true ? (
            <Suspense fallback={<h3>Loading...</h3>}>
              <Players
                playersPromise={playersPromise}
                setAvailableBalance={setAvailableBalance}
                availableBalance={availableBalance}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
              ></Players>
            </Suspense>
          ) : (
            <SelectedPlayers
              selectedPlayers={selectedPlayers}
              removeSelectedPlayer={removeSelectedPlayer}
            ></SelectedPlayers>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
