import React from "react";
import Style from "./Terminos.module.css"
import BacktoHome from "../blueprints/BacktoHome";
const Terminos = () => {
  return (
    <div className={Style.background}>
       <BacktoHome/>
      <h1 className={Style.title}>Terminos y Condiciones </h1>

      <p>
        Licencia de uso: CodeCuak concede a los usuarios una licencia limitada,
        no exclusiva y no transferible para usar la plataforma y el contenido
        generado por el usuario con el propósito de interactuar con otros
        usuarios de la plataforma.
      </p>
      <br />
      <p>
        Contenido generado por el usuario: Los usuarios son los únicos
        responsables del contenido que publiquen en la plataforma. CodeCuak se
        reserva el derecho de eliminar cualquier contenido que considere
        inapropiado o violatorio de los términos y condiciones.
      </p>
      <br />
      <p>
        Propiedad intelectual: Todo el contenido en la plataforma, incluyendo
        textos, imágenes, gráficos, videos y marcas registradas, son propiedad
        de CodeCuak o sus licenciantes. Los usuarios no pueden utilizar el
        contenido de la plataforma para ningún otro propósito que no sea el uso
        de la plataforma.
      </p>
      <br />
      <p>
        Privacidad: CodeCuak recopila, utiliza y protege la información personal
        de los usuarios de acuerdo con su política de privacidad. Los usuarios
        pueden controlar cómo se utiliza su información personal en la
        plataforma y pueden configurar la privacidad de sus perfiles y
        publicaciones.
      </p>
      <br />
      <p>
        Responsabilidad del usuario: Los usuarios de CodeCuak deben cumplir con
        todas las leyes aplicables y no pueden utilizar la plataforma para fines
        ilegales o inapropiados. Los usuarios son responsables del contenido que
        publiquen en la plataforma y deben respetar los derechos de propiedad
        intelectual de otros usuarios y terceros.
      </p>
      <br />
      <p>
        Modificaciones de los términos y condiciones: CodeCuak se reserva el
        derecho de modificar los términos y condiciones en cualquier momento y
        sin previo aviso a los usuarios. Los cambios en los términos y
        condiciones serán efectivos en la fecha en que se publiquen en la
        plataforma y se espera que los usuarios los revisen regularmente.
      </p>
    </div>
  );
};
export default Terminos;
