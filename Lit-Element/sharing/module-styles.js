import { css } from 'lit';

export const buttonStyles = css`
    .green-button {
        cursor: pointer;
        font-size: 25px;
        color: white;
        background-color: green;
    }
    .green-button:disabled {
        background-color: grey;
        cursor: not-allowed;
    }
`;
