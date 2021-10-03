import React from 'react'
import api from "../api/persons";

const EditForm = (props) => {
   
    const entry = {
            id: 0,
            name: {
              first: "",
              last: ""
            },
            city: "",
            country: "",
            employer: "",
            title: "",
            favoriteMovies: []
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        entry.name.first = e.target[0].value
        entry.name.last = e.target[1].value
        entry.city = e.target[2].value
        entry.country= e.target[3].value
        entry.title = e.target[4].value
        entry.employer = e.target[5].value
        entry.favoriteMovies = [e.target[6].value, e.target[7].value, e.target[8].value ]
        entry.id = e.target[9].value
        try {
            const response = await api.put(`/persons/${entry.id}`, entry)
            console.log(response.data)
        }catch(e) {
            console.log(e)
        }
    };
    

    return (
        <div>
            <h1 style={{color: 'white'}}>Edit Form</h1>
            <form style={{color: 'white', display: 'flex', flexDirection:'column', alignItems: 'center'}} onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="firstName">First Name:</label>
                <input   type="text" id="firstName" />
                <label htmlFor="lastName">Last Name:</label>
                <input  type="text" id="lastName"/>
                <label htmlFor="city">City:</label>
                <input   type="text" id="city" />
                <label htmlFor="country">Country:</label>
                <input  type="text" id="country" />
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" />
                <label htmlFor="employer">Employer:</label>
                <input   type="text" id="employer" />
                <label htmlFor="fMovie1">Movie choice 1</label>
                <input   type="text" id="fMovie1" />
                <label htmlFor="fMovie2">Movie choice 2</label>
                <input   type="text" id="fMovie2" />
                <label id="fMovie3">Movie choice 3</label>
                <input  type="text" id="fMovie3" />
                <label htmlFor="id">id:</label>
                <input   type="text" id="id" />
                <input style={{backgroundColor:'#34a5da', color: 'white', borderRadius: '20px', padding: '.05rem 1rem'}} value='Submit' type="submit"/>
            </form>
        </div>
    )
}

export default EditForm