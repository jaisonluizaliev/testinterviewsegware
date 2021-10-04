import styled from "styled-components";

export const ContainerCards = styled.ul`
  padding: 30px;
  background: #7f8ac79d;
`;

export const Card = styled.li`
  width: 80%;
  margin: 30px auto;
  background:#7f8ac7;
  border: 1px solid #b8b8b8;
  border-radius: 4px;
  box-shadow: 4px 4px rgba(0,0,0,.25);
  padding: 15px;
`;

export const ContainerUpVotes = styled.div`
  display: flex;
  width: 100%;
`

export const Text = styled.h3`
  height: 150px;
  max-height: auto;
  background: #fff;
  border-radius: 2px;
  padding: 5px;
`
export const Author = styled.span`
  margin: 1rem 0;
  color: white;
  font-weight: 500;
  font-size: 17px;
  display: block;
  height: 55px;
`;

export const ButtonLike = styled.button`
  width: 40px;
  height: 30px;
  font-size: 11px;
`

