import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../components/SimpSearch/simpSearch";
import Gallery from "../Gallery/Gallery";



export default function Characters() {
const [characters, setCharacters] = useState([]);

const getCharacters = async (SimpSearch= "") => {
const res = await axios.get(
    "https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=" + SimpSearch
);
console.log(res.data);
setCharacters(res.data)
};

useEffect(() => getCharacters, []);

return (
    <div>
    <Search onSubmit={getCharacters}></Search>
        <Gallery list={characters}></Gallery>
    </div>
);
}