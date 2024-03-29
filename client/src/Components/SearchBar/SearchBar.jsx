import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getByName } from "../../Redux/Actions/index"
import "./SearchBar.css"


function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch()

    const [input, setInput] = useState("")
    const pokemons = useSelector((state) => state.pokemons)


    let handlerChange = (event) => {
        setInput(event.target.value);
    }

    let handleSubmit = (event) => {

        event.preventDefault();
        dispatch(getByName(input))
        setInput('');
        setCurrentPage(0)

      



    }

    return (
        <div className ="searchForm">
            <form onSubmit={handleSubmit} >
                <input
                    className='input'
                    onChange={handlerChange}
                    type="search"
                    value={input}
                    placeholder="Search pokemon..."
                    onClick={() => setInput('')}
                />
                <button type="submit" className='searchButton'  > Search! </button>
            </form>
        </div>
    );
}

export default SearchBar;