/** @jsx jsx */
import { jsx } from "@emotion/core";
import { principalContainer,container, text, title1, title2 } from "./TutorInformation.styles";

export const TutorInformationPage = () => {
  return (
    <div css={principalContainer}>
      <div css={container}>
        <div>
          <h1 css={title1}>Requisitos para ser tutor</h1>
          <h2 css={title2}>
            Para ser tutor debes cumplir con los siguientes requisitos:{" "}
          </h2>
          <ul css={text}>
            <li>Estar en el x semestre p en uno superior </li>
            <li>Hacer parte de la universidad x </li>
            <li>
              Haber visto el curso al cual se postula y haber obtenido una
              calificacion igual o superior a x.x{" "}
            </li>
            <li>Hacer parte de la universidad x </li>
            <li>
              Haber visto el curso al cual se postula y haber obtenido una
              calificacion igual o superior a x.x
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div css={container}>
          <div>
            <h1 css={title1}>¿Que documentos debo anexar a la solicitud?</h1>
            <ul css={text}>
              <li>Estar en el x semestre p en uno superior </li>
              <li>Hacer parte de la universidad x </li>
              <li>
                Haber visto el curso al cual se postula y haber obtenido una
                calificacion igual o superior a x.x{" "}
              </li>
              <li>Hacer parte de la universidad x </li>
              <li>
                Haber visto el curso al cual se postula y haber obtenido una
                calificacion igual o superior a x.x
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div css={container}>
          <div>
            <h1 css={title1}> Beneficios de ser tutor!!</h1>
            <ul css={text}>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem voluptate ut molestias illo nam. Vero facilis, officia, expedita ea inventore veritatis nobis magni corporis molestias ut quae animi eos. 
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus ipsam soluta eos? Omnis velit dolorem labore, sint eum pariatur voluptas adipisci tenetur molestias, quas, ad temporibus. Quo, eligendi voluptatum?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia omnis mollitia ipsam autem eveniet, illum officia in illo eaque facilis at ratione obcaecati. Voluptatibus modi in tempora sequi? Cupiditate?
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias soluta enim dicta, cumque ipsa maiores quo quod? Aut facilis voluptas ut rerum, officia fugiat animi possimus velit sed quae neque. 
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus cum quos, nihil provident maiores aut incidunt porro earum temporibus voluptate dolorem, voluptas recusandae exercitationem est ut, quibusdam eveniet explicabo dicta.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
