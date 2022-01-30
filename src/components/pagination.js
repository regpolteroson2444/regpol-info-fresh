import React from 'react'
import styles from "styled-components";



const StyledPagination = styles.div`
width: 80vw;
margin: 10px auto;

p {
    margin-bottom: 10px;
}
ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
li {
    width: 10%;
    text-align: center;
    margin: 2px;
    cursor: pointer;
}

button{ 
    border: none;
    color: #153243;
    outline: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
}
@media only screen and (min-width: 520px ){
    width: 60vw;
}
@media only screen and (min-width: 850px) {
    font-size: 17px;
}
@media only screen and (min-width: 1100px) {
    li {
        width: 4%;
        margin: 1px;
    }
}


`

const pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [ ];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <StyledPagination>
            <ul>
                {pageNumbers.map(number => (
                    
                    <li key={number}>
                        
                        <button   onClick={() => paginate(number)} >{number}</button>
                    </li>
                ))}
            </ul>
            </StyledPagination>
    )
}

export default pagination
