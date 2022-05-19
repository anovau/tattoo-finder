import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./Searchbar.css";
import {useState} from "react";

function Searchbar() {

  const [valueStyle, setValueStyle] = useState("Todos")

  const [valueCity, setValueCity] = useState("Toda España")

  return (
    <div className="bar" >
      <Autocomplete
        disablePortal
        id="style"
        options={tattoStyles}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Estilo" />}
        value={valueStyle}
        onChange={(event, newValue) => { setValueStyle(newValue);  }}
      />
      <Autocomplete
        disablePortal
        id="location"
        options={locations}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Dónde" />}
        value={valueCity}
        onChange={(event, newValue) => { setValueCity(newValue);  }}
      />
      <Button variant="contained" color="secondary" startIcon={<SearchIcon/>} href={`/resultspage?style=${valueStyle}&city=${valueCity}`} >Buscar</Button>
    </div>
  );
}

export default Searchbar;

const tattoStyles = [
    "Todos", "Anime", "Tradicional", "Japanese", "Ilustrativo", "Blackout", "Color", "Microrealismo", "Blackwork", 
    "Lettering", "Ornamental", "Realismo", "Watercolor", "Black & Grey", "Sketch", "Fineline", "Puntillismo", 
    "Neotradicional", "New School", "Minimalismo", "Geometrico"
]

const locations = [
    "Barcelona", "Bilbao", "Madrid", "Valecia", "Sevilla", "Toda España"
]
