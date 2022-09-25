import { Container, ContainerLogin } from "./style";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <ContainerLogin onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changePassword}
          />
        </div>
        <div>
          <button type="submit">Entrar</button>
          <button>Cadastrar</button>
        </div>
      </ContainerLogin>
    </Container>
  );
}

export default Login;
