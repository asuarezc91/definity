import React from "react";
import { MainMenu } from "./styles";
import { Selectors } from "../Selectors";

export const Container = () => {
  return (
    <MainMenu>
      <Selectors></Selectors> 
      <Selectors></Selectors>
      <Selectors></Selectors> 
      <Selectors></Selectors>
    </MainMenu>
  );
};
