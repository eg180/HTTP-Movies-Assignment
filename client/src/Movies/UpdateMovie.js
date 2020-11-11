import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

const StyledDiv = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

function UpdateMovie(props) {

    /* const handleSubmit = e => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${id}`, movie)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } */



    return (
        <StyledDiv>
            <h2>Edit Film</h2>
            <form>
                <label>Title
                    <input
                    name="title"
                    />
                </label>
                <label>Director
                    <input
                    name="director"
                    />
                </label>
                <label>Metascore
                    <input
                    name="metascore"
                    />
                </label>
                <label>Stars
                    <input
                    name="stars"
                    />
                </label>
                <button>UPDATE</button>
            </form>
        </StyledDiv>
    )
}

export default UpdateMovie;
