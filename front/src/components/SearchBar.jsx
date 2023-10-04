import { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [id, setId] = useState("")

  const handleChange = (event) => {
    const eventId = event.target.value
    setId(eventId)
  }

  const handleSearch = (id) => {
    onSearch(id)
    setId("")
  }

  return (
    <div>
      <input type='search' value= {id} placeholder= "Ingresa un ID por favor" onChange = {handleChange} />
      <button onClick={() => handleSearch(id)}>Agregar</button>
    </div>
  );
}
