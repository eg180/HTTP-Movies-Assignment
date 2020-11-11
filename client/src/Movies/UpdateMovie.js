import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

function UpdateMovie({ modifyMovie }) {





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
            </form>
        </StyledDiv>
    )
}

export default UpdateMovie
