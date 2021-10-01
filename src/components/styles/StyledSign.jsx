import styled from "styled-components";

export const ContainerSign = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Form = styled.form`
  width: 380px;
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 2rem;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Input = styled.input`
  height: 25px;
  font-size: 16px;
  background: unset;
  border: none;
  border-bottom: 1px solid;
  padding-left: 9px;
`;
export const Label = styled.label`
  text-align: center;
  font-size:18px;
  margin-top: 5px;
  padding-bottom: 3px;
  font-weight: 300;
`;
export const ContainerButton = styled.div`
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    border-radius: 4px;
    padding: 5px;
    margin-right: 25px;
    background: #fff;
    color: #7f8ac7;
    border: 1px solid #7f8ac7;
  }
  a:hover {
    background: #7f8ac7;
    color: #fff;
  }
`;
export const Button = styled.button`
  height: 35px;
  width: 150px;
  border: none;
  background: #7f8ac7;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
export const Info = styled.span`
  p {
    font-size: 11px;
  }
  height: 35px;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Error = styled.div`
  font-size: 11px ;
  color: red;
  text-align: center;
`


export const TextArea = styled.textarea`
  width: 100%;
  height: 125px;
  padding: 15px;
  font-size: 16px;
`;

