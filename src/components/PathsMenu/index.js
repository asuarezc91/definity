import React from "react";
import {
  Link,
  TopMenu,
  SelectMenu,
  ButtonConsult,
  InputSearch,
  ContainerMenu,
  Scroll
} from "./styles";

export const PathsMenu = () => {
  return (
    <ContainerMenu>
      <TopMenu>
        <Link to="/">Inicio</Link>
        <p>Dificultad : </p>
        <SelectMenu>
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
          <option value="Extrema">Extrema</option>
        </SelectMenu>
        <ButtonConsult>Consultar</ButtonConsult>
      </TopMenu>  
        <Scroll />
      <InputSearch />
    </ContainerMenu>
  );
};

// <InputSearch/>
// <Scroll />
// <PathMenuPrint></PathMenuPrint>


// <div id="scrool">
// {this.state.list
//   .filter(isSearched(this.state.searchTerm))
//   .map(item => (
//     <div id="display">
//       <div id="headBox">
//         <span>{item.ID}</span>
//         <button
//           onClick={() => this.zoomToGeometry(item.ID)}
//           type="button"
//           class="zoom"
//         ></button>
//       </div>
//       <div id="result">
//         <span>Dificultad: {item.DIFICULTAD}</span>
//         <span>Tipo: {item.TIPO}</span>
//         <span>Longitud: {item.LONGITUD} km</span>
//       </div>
//     </div>
//   ))}
// </div>