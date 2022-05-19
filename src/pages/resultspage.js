import Searchbar from "../components/Searchbar";
import Businessitem from "../components/Businessitem";
import { useLocation } from "react-router-dom";
import { data } from "../data.js";

function Resultspage() {
  let {search} = useLocation();
  let query = new URLSearchParams(search);
  let style = query.get("style");
  let city = query.get("city");
  console.log(style, city);

  const results = data.filter(artist => artist.styles?.includes(style) && artist.city === city )

    return (
        <>
        <Searchbar/>
        <div>
        {results.map((item) => (
          <Businessitem key={item.placeId} name={item.name} address={item.address} score={item.score} url={item.placeId}/>
        ))}
        </div>
      </>
    );
  }

  export default Resultspage;