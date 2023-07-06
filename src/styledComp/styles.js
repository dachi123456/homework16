import styled from 'styled-components';

export const TodoListDiv = styled.div`
  border-color: #${Math.floor(Math.random() * 16777215).toString(16)};
  margin-top: 1rem;
  width:10rem;
  border-radius:0.5rem;
  border-style: solid;
  border-width: 3px 3px 3px 6px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  height:3.5rem;
`;

export const NewButton = styled.button`
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    border-radius: 4px;
    color: #ffffff;
    height:1.5rem;

    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    border-bottom: solid 3px #c58668;
`

export const ProgressDiv = styled.div`
    border-color: #${Math.floor(Math.random() * 16777215).toString(16)};
    margin-top: 1rem;
    width:10rem;
    border-radius:0.5rem;
    border-style: solid;
    border-width: 3px 3px 3px 6px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height:3.5rem;
`

export const FinishedDiv = styled.div`
border-color: #${Math.floor(Math.random() * 16777215).toString(16)};
  margin-top: 1rem;
  width:10rem;
  border-radius:0.5rem;
  border-style: solid;
  border-width: 3px 3px 3px 6px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  height:3.5rem;
`