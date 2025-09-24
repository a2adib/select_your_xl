import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navber/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { ToastContainer} from 'react-toastify';
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playerPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [purchesedPlayer,setPurchesedPlayer] = useState([])

  const removePlayer = (p)=>{
    const filterData = purchesedPlayer.filter(ply=>ply.player_name!==p.player_name)
    setPurchesedPlayer(filterData)
    setAvailableBalance(availableBalance+parseInt(p.player_price.split("USD").join("").split(",").join("")))
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          <h1 className="font-bold">{toggle===true?"Available Players":`selected Player (${purchesedPlayer.length}/6)`}</h1>
          <div className="font-bold">
            <button onClick={()=>setToggle(true)} className={`border-2 border-r-0 border-gray-300 py-3 px-4 rounded-l-2xl ${toggle===true?"bg-[#E7FE29]":""}`}>Available</button>
            <button onClick={()=>setToggle(false)} className={`border-2 border-l-0 border-gray-300 py-3 px-4 rounded-r-2xl ${toggle===false?"bg-[#E7FE29]":""}`}>Selected (<span>{purchesedPlayer.length}</span>)</button>
          </div>

      </div>

      {
        toggle === true?<Suspense
        fallback={ <div className=" flex mx-auto max-w-[1200px] justify-center items-center"> <span className="loading loading-ring loading-xl"></span></div>}
      >
        <AvailablePlayers purchesedPlayer={purchesedPlayer}  setPurchesedPlayer={setPurchesedPlayer} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>:<SelectedPlayers purchesedPlayer={purchesedPlayer} removePlayer={removePlayer}></SelectedPlayers>
      }
      <ToastContainer />
    </>
  );
}

export default App;
