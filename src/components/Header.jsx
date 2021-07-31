import * as Surplus from "surplus";

export const Header = () => {
  return (
    <header>
      <h1 className={"text-center text-muted font-weight-100"}>
        Hello, World!
      </h1>

      <p className={"text-center"}>
        Olá! Esta é uma aplicação usando S.js com Surplus inspirada no <code>create-react-app</code> feita apenas com Webpack!
      </p>
    </header>
  );
};
