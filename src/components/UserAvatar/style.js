import styled from "styled-components";

export const UserAvatarBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  /* font-size: 450%; */
  font-size: 100%;
  font-weight: 600;
  box-sizing: border-box;
  padding: 20px;
  letter-spacing: 2px;
  overflow: hidden;
  background-position: center;
  background-size: 100%;
  color: white;
  /* text-shadow: #ffffff 1.41px 1.41px, #ffffff 2px 0px, #ffffff 1.41px -1.41px, #ffffff 0px -2px, #ffffff -1.41px -1.41px, #ffffff -2px 0px, #ffffff -1.41px 1.41px, #ffffff 0px 2px; */
  
  /* &::selection{
    background-color: transparent;
  } */
`;


export const UserAvatarImg = styled.img`
  display: block;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;