import * as Surplus from "surplus";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { html, attributes } from "assets/data/test.md";
import imgfile from "assets/img/import.jpg";

export const Home = () => {
  return [
    <Header />,
    <div>
      <p className={"text-center"}>
        Você pode usar conteúdo de <code>public</code> normalmente, como se fosse a raíz:<br/>
        <img src={"/img/hello.jpg"} alt={""}/>
      </p>

      <p className={"text-center"}>
        Ou importar via código, para que seja hasheada:<br/>
        <img src={imgfile} alt={""}/>
      </p>

      <p className={"text-center"}>
        Como bônus, adicionei Bootstrap e, também, FontAwesome! <i className={"fa fa-truck"}/>
      </p>

      <p className={"text-center"}>
        Também tem hot reload, resolução de caminhos pra JS/SCSS, imports de arquivos com resolução e outras mágicas.
      </p>

      <p className={"text-center"}>
        Este projeto foi feito com o intuito de ensinar as pessoas a usarem Webpack, e explicar como bundlers e templates de projeto funcionam. Fazendo parte de um projeto no qual monto o MESMO boilerplate para três frameworks diferentes, mas seguindo o mesmo conceito e lógicas.
      </p>

      <hr/>

      <h4>Quer mais? Então aqui:</h4>

      <p>A gente também suporta Markdown com frontmatter!</p>

      <h5>Aqui um markdownzinho:</h5>

      <div className={"shadow p-2 mb-2"} innerHTML={html}/>

      <h5>E o frontmatter dele:</h5>

      <div className={"shadow p-2"}>
        <pre>{JSON.stringify(attributes, null, 2)}</pre>
      </div>
    </div>,
    <Footer />,
  ];
};
