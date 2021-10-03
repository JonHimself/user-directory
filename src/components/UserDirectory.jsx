import React from 'react'
import '../css/UserDirectory.css'

const UserDirectory = ({data, count}) => {

    return (
        <div className='container'>
        <div className='user-direct'>
            <h1>{data[count].name.first} {data[count].name.last}</h1>
            <p>{count + 1}/{data.length}</p>
            <p>From: {data[count].city}, {data[count].country}</p>
            <p>Job Title: {data[count].title}</p>
            <p>Employer: {data[count].employer}</p>
            <br />
            <div className='favorites'>
                <h3>Favorite Movies:</h3>
                <ol>
                    <li>{data[count].favoriteMovies[0]}</li>
                    <li>{data[count].favoriteMovies[1]}</li>
                    <li>{data[count].favoriteMovies[2]}</li>
                </ol>
            </div>
        </div>
        </div>
    );
}

export default UserDirectory
