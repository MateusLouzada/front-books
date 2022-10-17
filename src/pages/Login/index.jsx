import { Container, ContainerLogin } from "./style";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Navigate } from "react-router-dom";
import { Button } from "@material-ui/core";

function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register, setRegister] = useState(false);

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

  const handleRegister = () => {
    setRegister(true);
  };

  return (
    <Container>
      <ContainerLogin autoComplete="off" onSubmit={handleSubmit}>
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
          <div>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              type="submit"
            >
              Entrar
            </Button>
          </div>
          <div>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              type="button"
              onClick={handleRegister}
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </ContainerLogin>
      {register ? <Navigate to="/register" /> : <></>}
    </Container>
  );
}

export default Login;
