import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCreate, orderByAttack, orderByName, filterByType,clearHome } from '../../Redux/Actions';
import "./Filter.css"


function Filter({ setCurrentPage }) {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)
    const types = useSelector((state) => state.pokeTypes);

    const clearFilters =()=>{
        dispatch(clearHome())
        setCurrentPage(0)
    }
    

    const handleType = (event) => {
        dispatch(filterByType(event.target.value))
    }
    const handleName = (event) => {
        dispatch(orderByName(event.target.value))
        setCurrentPage(0)
    }
    const handleAttack = (event) => {
        dispatch(orderByAttack(event.target.value))
        setCurrentPage(0)
    }
    const handleCreated = (event) => {
        dispatch(filterByCreate(event.target.value))
        setCurrentPage(0)
    }
   


    return (
        <div>
            <button onClick={clearFilters} className="filterButton" >Clear filters</button>
            <select onChange={handleAttack} className="filterButton">
                <option disabled selected>Order by Power</option>
                <option value="asc">Weak</option>
                <option value="des">Strong</option>
            </select>
            <select onChange={handleName} className="filterButton">
                <option disabled selected>Order by Name</option>
                <option value="asc">A-Z</option>
                <option value="des">Z-A</option>
            </select>
            <select onChange={handleCreated}  className="filterButton" >
                <option value="all">All pokemons</option>
                <option value="api">Existing pokemons</option>
                <option value="created">Created pokemons</option>
            </select>
            <select  onChange={handleType} className="filterButton">
                <option value="all">All </option>
                {types?.map((element) => {
                    return <option value = {element.name} key = {element.id}>{element.name}</option>
                })}
                
            </select>
        </div>

    );
}

export default Filter;