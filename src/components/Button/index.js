/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
color: var(--primary);
border: 1px solid var(--primary);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: 0.5s;
&:hover,
&:focus {
color: var(--black);
border: 1px solid var(--primary);
background-color: var(--primary);
}
`;

export default Button;
