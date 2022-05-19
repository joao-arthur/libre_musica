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
    width: 55px;
    height: 55px;
    font-size: 1.25em;
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
    height: 55px;
    font-size: 1rem;
    margin: 0 3px;
    border: none;
    padding: 5px;
    outline: none;
    border: 1px solid transparent;
    border-radius: 5px;
    width: 7rem;

    :focus {
        border: 1px solid var(--primaryGrey);
    }
`;
