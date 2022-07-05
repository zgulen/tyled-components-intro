import styled from "styled-components";

const Button = styled.button`
    /* color: ${(props) => (props.primary ? "white" : "purple")}; */
    color: ${(props) => (props.primary ? "white" : "purple")};
    background-color: ${(props) => (props.primary ? "purple" : "white")};
    cursor: pointer;
    padding: 0.7rem 1.2rem;
    border: 2px solid purple;
    border-radius: 5px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    &:hover {
        transform: scale(0.97);
    }
`;

export const TomatoButton = styled(Button)`
    color: ${(props) => (props.primary ? "white" : "tomato")};
    background-color: ${(props) => (props.primary ? "tomato" : "white")};
    border-color: tomato;




`
export default Button;

