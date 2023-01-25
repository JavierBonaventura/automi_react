import React, { useState } from "react";

export default function Counter() {
  const [estado, setEstado] = useState(0);
  function abrir() {
    setEstado((count) => count = true);
  }
  function cerrar() {
    setEstado((count) => count = false);
  }
  if (estado) {
    return (
      <div>
        <div class="container" id="container">
          <div class="cuadrado"></div>
          <div class="circulo_ab"></div>         
        </div>
        <div>
          <p data-testid="count">ab</p>
          <button onClick={abrir}> ab</button>
          <button onClick={cerrar}> ce </button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
          <div class="container" id="container">
            
                 <svg width="100%" height="100%" fill="currentColor"  viewBox="4 0 7 20" id=""> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"  fill="#ff0000"></path> </svg>      {/* <Unifilar /> */}
                 <div class="circulo_ce"></div>   
        {/* <div class="container" id="container">
          <div class="cuadrado"></div>
          <div class="circulo_ce"></div>         
        </div> */}
        <div>
          <p data-testid="count">ab</p>
          <button onClick={abrir}> ab</button>
          <button onClick={cerrar}> ce </button>
        </div> 
      </div>
      </div>
    );
  }
}


<div class="container" id="container">
  <div class="box">Item one</div>
  <div class="box">Item two</div>
  <div class="box">Item three</div>
  <div class="box">Item four</div>
</div>