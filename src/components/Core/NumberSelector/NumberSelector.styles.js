import styled from 'styled-components';

export const Container = styled.div`
    flex: auto;
`;

export const Title = styled.h3`
    text-align: center;
`;

export const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    margin: 0 3px;
    background-color: var(--light);
    color: white;
    border: 1px solid var(--lightGrey);
    width: 30px;
    height: 30px;
    font-size: 1em;
    outline: none;

    :focus {
        background-color: var(--primary);
    }

    :active {
        background-color: var(--dark);
    }

    :disabled {
        background-color: var(--primaryGrey);
    }
`;

export const Input = styled.input`
    height: 20px;
    margin: 0 3px;
    border: none;
    padding: 5px;
    outline: none;

    :focus {
        height: 18px;
        border: 1px solid var(--primaryGrey);
        margin: 0 2px;
        border-radius: 5px;
    }
`;
