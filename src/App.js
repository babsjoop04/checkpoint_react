
import './App.css';

function App() {
  return (
    <div className="App">

      <h1 className="display-4 titre" >Mon formulaire :</h1>

      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <form action="" method="post">
              <fieldset>
                <legend>Connectez Vous!!</legend>

                <label for="mail">Adresse Mail ou Pseudo</label>
                <input type="email" id="mail" name="mail" required /><br />

                <label for="passwd">Mot de Passe</label>
                <input type="password" id="passwd" name="passwd" required /><br />

                <input type="submit" className="btn btn-primary" value="Se Connecter" />
              </fieldset>
            </form>
          </div>
          <div class="col">
            <div class="row align-items-center">
              <form action="" method="post">
                <fieldset>
                  <legend>Inscrivez Vous!!</legend><br />
                  <label for="nom">Nom</label>
                  <input type="text" id="nom" name="nom" required /><br />

                  <label for="prenom">Prénom</label>
                  <input type="text" id="prenom" name="prenom" required /><br />

                  <label for="naiss">Date de Naissance</label>
                  <input type="date" id="naiss" required /><br />

                  <span>Sexe : </span>&nbsp;

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="optionhomme"
                    />
                    <label class="form-check-label" for="inlineRadio1">Homme</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">Femme</label>
                  </div>
                  <br />

                  <label for="mail">Email</label>
                  <input
                    type="email"
                    id="mail"
                    name="mail"
                    placeholder="name@example.com"
                    required
                  /><br />

                  <label for="number">Numero de Telephone</label>
                  <input type="text" id="number" placeholder='+ind 12 345 67 89' required /><br />

                  <label for="">Mot de Passe</label>
                  <input
                    type="password"
                    name="passwd1"
                    id="passwd1"
                    required
                  /><br />

                  <label for="">Confirmez le Mot de Passe</label>
                  <input
                    type="password"
                    name="passwd2"
                    id="passwd2"
                    required
                  /><br />



                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Pseudo"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <input type="submit" className="btn btn-primary" value="S'inscrire" />
                </fieldset>
              </form>

            </div>

          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
