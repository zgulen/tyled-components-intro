import styled from "styled-components";

const Header = styled.h1`
    color: ${(props) => props.color || "hotpink"};
    font-size: 1.5rem;
    margin:1rem 0;
`;

export default Header;
