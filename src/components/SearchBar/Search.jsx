import React, { useEffect, useState } from 'react'
import search_icon from '../../assets/search_icon.svg'
import Results from './Results'
import { Link } from 'react-router-dom'
 import './Search.css'


function Search() {
    const [searchResults, setSearchResults] =useState ([])
    const [query, setQuery] = useState('')


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTI4YjUzMjZhYThhMDE5MmIwYTM2ZjJlMTUwYzY0MCIsInN1YiI6IjY2M2E3OGNmNzM2MDYxZTg0YThhYTQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2LDBRFsMjDU8cAgGVppmVaf6J8ADJC6VSJiZSohZ7Go'
        }
      };

function handleSubmit (event) {
event.preventDefault()
console.log(event.target.querySelector('#inputText').value)
const newQuery = event.target.querySelector('#inputText').value
setQuery (newQuery)
}

useEffect (()=> {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setSearchResults(response.results))
  .catch(err => console.error(err));
},[query])

console.log(searchResults)
  return (
    <div>
        
        <form onSubmit = {handleSubmit} className='search-bar'>
            <label><img src = {search_icon} alt='...' className="img-icon"/></label>
            <input type = "text" placeholder='Search by title'id='inputText' onChange = {(e)=> setQuery(e.target.value)}></input>
            <button className="submit-button">Go</button>
        </form>

{/* search results */}
<div className="search-results">
{searchResults.map((movie) => (
    <Results movies= {movie} key= {movie.id}/>
        ))}
</div>
    </div>
  )
}

export default Search