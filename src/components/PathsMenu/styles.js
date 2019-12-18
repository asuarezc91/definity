import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

// export const PathsButton = styled.button`
//   position: absolute;
//   top: 50px;
//   width: 80px;
//   height: 30px;
//   background: red;
// `;

export const ContainerMenu = styled.div`
  position: absolute;
  right: 0px;
  width: 400px;
  height: 100%;
  background: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Link = styled(LinkRouter)`
  position: absolute;
  top: 0px;
  width: 80px;
  height: 30px;
  right: 0px;
  background: red;
`;

// export const buttonito = styled(LinkRouter)`
//   position: absolute;
//   top: 0px;
//   width: 80px;
//   height: 30px;
//   right: 0px;
//   background: red;
// `;

export const PathMenuPrint = styled.div``;

export const TopMenu = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 400px;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectMenu = styled.select`
  width: 70px;
  height: 20px;
  background: yellow;
`;

export const ButtonConsult = styled.button`
  width: 70px;
  height: 20px;
  background: yellow;
`;

export const InputSearch = styled.input`
  position: absolute;
  height: 24px;
  top: 90px;
  width: 395px;
  background: red;
`;

export const Scroll = styled.div`
  position: absolute;
  top: 120px;
  right: 0px;
  width: 400px;
  background: white;
  height: calc(100% - 120px);
`;

// position: absolute;
// top: 0px;
// right: 0px;
// width: 400px;
// height: calc(100% - 0px);
// background: blue;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
