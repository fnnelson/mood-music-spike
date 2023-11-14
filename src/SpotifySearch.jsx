import { useEffect, useState } from "react";
import axios from "axios";

function SpotifySearch() {

    const [searchInput, setSearchInput] = useState('');
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        // API Access Token
        fetchSpotifyAccessToken();
    }, [])

    const fetchSpotifyAccessToken = () => {
        axios.post('/api/spotify')
            .then(response => {
                console.log("access token is:", response.data.access_token);
                // setting access token to local state
                setAccessToken(response.data.access_token);
            })
            .catch(error => {
                console.log("error with access token fetch POST", error);
            })
    }

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
    };

    const gridItemStyle = {
        backgroundColor: 'lightblue',
        border: '5px solid black',
        height: '200px',
        width: '200px',
    }

    // Search
    async function handleSearch(event) {
        event.preventDefault();
        console.log('Searching for:', searchInput);





        setSearchInput('');
    }

    return (

        <section id="search">
            <form onSubmit={handleSearch}>
                <input
                    placeholder="Search Artist"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                >
                </input>
                <button>Search</button>
            </form>
            <h4>search results to show here:</h4>
            <div style={gridContainerStyle}>
                <div style={gridItemStyle}></div>
                <div style={gridItemStyle}></div>
                <div style={gridItemStyle}></div>
                <div style={gridItemStyle}></div>
                <div style={gridItemStyle}></div>
                <div style={gridItemStyle}></div>
                <div style={gridItemStyle}></div>
                <div style={gridItemStyle}></div>
            </div>
        </section>
    );
}

export default SpotifySearch;