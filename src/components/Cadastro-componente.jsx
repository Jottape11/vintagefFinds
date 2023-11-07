import '../css/Login.css'
 
function Cadastro() {
    return (

            <main className="login-conteudo">
        
              <h1>Cadastro de produtos</h1>
        
              <form className="form">
                <div className="div-EmailSenha">
                  <label value="text">Id do produto vintage:</label>
                  <input type="text" name="text" id="text"/>
                </div>
        
                <div className="div-EmailSenha">
                  <label value="text">Descrição:</label>
                  <input type="text" id="text" name="text"/>
                </div>

                <div className="div-EmailSenha">
                  <label value="text">Marca:</label>
                  <input type="text" name="text" id="text"/>
                </div>
        
                <div className="div-EmailSenha">
                  <label value="text">Data fabricação:</label>
                  <input type="text" id="text" name="text"/>
                </div>

                <div className="div-EmailSenha">
                  <label value="text">Quantidade estoque:</label>
                  <input type="text" name="text" id="text"/>
                </div>
        
                <button type="submit">Cadastrar:</button>
              </form>
          </main>
  )
}

export default Cadastro;