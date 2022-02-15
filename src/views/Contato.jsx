import React from "react";

export default function Contato() {
    return (

  <body>
        
  <img class="d-block w-100 mb-5" src="img\pordosolfamilia.jpg"  alt="Imagem responsiva"/>
        
    <form>
      <div class="container mb-5">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Nome</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">E-mail</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Senha"></input>
        </div>
      </div>
      <div class="form-group">
      <label for="exampleFormControlTextarea1">Deixe sua mensagem</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" class="btn btn-primary">Enviar</button>
    </div>
    </form>
    </body>   
        
    );
}