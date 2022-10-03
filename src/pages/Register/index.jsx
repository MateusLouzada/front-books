import { useState } from "react";
import { Navigate } from "react-router-dom";
import { createUser } from "../../services/api";
import { Container } from "./style";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [successRegister, setSuccessRegister] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Preencha todos os campos !");
    }

    if (name && email && password && confirmPassword) {
      const temp = await createUser(name, email, password, confirmPassword);

      if(temp === false) return

      alert("Conta criada com sucesso!")
      setSuccessRegister(true);
    }
  };

  const changeLogin = () => {
    setSuccessRegister(true);
  };

  return (
    <Container>
      <form onSubmit={registerUser}>
        <div>
          <span>Nome</span>
          <input type="text" onChange={handleName} />
        </div>
        <div>
          <span>Email</span>
          <input type="email" onChange={handleEmail} />
        </div>
        <div>
          <span>Senha</span>
          <input type="password" onChange={handlePassword} />
        </div>
        <div>
          <span>Confimação de senha</span>
          <input type="password" onChange={handleConfirmPassword} />
        </div>
        <div>
          <button type="submit">Enviar</button>
          <button type="button" onClick={changeLogin}>
            Voltar
          </button>
        </div>
      </form>
      {successRegister ? <Navigate to="/login" /> : <></>}
    </Container>
  );
}

export default Register;
