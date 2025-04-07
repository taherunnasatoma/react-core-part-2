import { useState } from "react"

export default function Batsman(){

    const[runs,setRuns]=useState(0);

    const[sixs,setSixs]=useState(0);


    const handleSingles=()=>{
        const updatedRuns= runs+1;
        setRuns(updatedRuns)
    }

    const handleFour=()=>{
        const updatedRuns = runs+4;
        setRuns(updatedRuns)
    }

    const handleSix=()=>{
        const updatedRuns=runs+6;
        const updatedSixs=sixs+1;
        setSixs(updatedSixs)
        setRuns(updatedRuns)
    }

    return(
        <div>

            <h3>Player: Bangla Batsman </h3>
            <p><small>Six: {sixs}</small></p>
            {
                runs > 50 && <p>You score:50</p>
            }
            <h1>Score:{runs}</h1>
            <button onClick={handleSingles}  >Singles</button>
            <button onClick={handleFour} >Four</button>
            <button onClick={handleSix}  >Six</button>

        </div>
    )
}