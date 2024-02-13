import { useState } from "react";

function Player({initialName, symbol}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(){
        //setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing);
        // setIsEditing(!isEditing);
        setIsEditing(editing => !editing); // Best practice 
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }
    let editableplayerName = <span className='player-name'>{playerName}</span>
    if (isEditing){
        editableplayerName = <input value={playerName} type="text" onChange={handleChange}required/>
    }
    return (
          <li>
            <span className="player">
            {editableplayerName}
            <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?"Save" :"Edit"}</button>
          </li>
    )
}

export default Player ;