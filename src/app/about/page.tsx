import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-10 mb-4">Sobre</h1>
      <p className="max-w-prose mb-2">
        Este é um pequeno projeto de revisão que fiz para relembrar e praticar, principalmente,
        conhecimentos referentes ao NextJS.
      </p>
      <p className="max-w-prose">Entre os conhecimentos praticados está a aquisição de dados de banco de dados através de action servers, criação de rotas de api pelo próprio NextJS (apesar de não serem necessárias ao utilizar action servers), uso do ORM Prisma, etc.</p>
    </div>
  );
};

export default About;
