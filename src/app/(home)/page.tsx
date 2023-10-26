import TimelineItem from "@/components/timelineItem";
import { pool } from "../../../db/db";
import PortfolioItem from "@/components/portfolioItem";
import ContatoItem from "@/components/contatoItem";

export default async function Home() {
  const client = await pool.connect();

 
    let data = await client.query("SELECT * FROM PUBLIC.TIMELINE WHERE STATUS = 'S'");
    const timeline = data.rows;

    data = await client.query("SELECT * FROM PUBLIC.PROJECTS WHERE STATUS = 'S'");
    const portfolio = data.rows;

    data = await client.query("SELECT * FROM PUBLIC.CONTACT WHERE STATUS = 'S'")
    const contact = data.rows;

    client.release()
  

  return (
    <>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4x1 md:text-7x1 text-white mb-1 md:mb-3 font-bold text-2xl">
          Natãn Schneider
        </h1>
        <p className="text-base md:text-x1 mb-3 font-medium">
          Desenvolvedor de Software. Situado no Brasil
        </p>
        <p className="text-small max-w-x1 mb-6 font-bold">
          Sou uma pessoa com muita sede de conhecimento. Ótimo em aprender
          sozinho, e em trabalho em equipe. <br />
          Comecei meu aprendizado em 2020, e foi aonde me encontrei como pessoa
          e como profissional.
        </p>
      </div>

      <div>
      <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-4 mb-5 text-white">
            Projetos
          </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((item: any) => (
            <PortfolioItem
              key={item.id}
              title={item.nome}
              imgUrl={item.img_url}
              stack={item.stack}
              link={item.url}
              repository={item.repo}
            />
          ))}
        </div>
      </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="w-full md:w-7/12">
          <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-4 mb-5 text-white">
            Timeline
          </h1>

          {timeline.map((item: any) => (
            <TimelineItem
              key={item.id}
              year={item.year}
              title={item.name}
              duration={item.duration}
              details={item.description}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-4 mb-5 text-white">
          Contato
        </h1>
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
            <p>
              Sinta-se livre para me contatar em qualquer uma destas Redes!{" "}
              <br />
              Toda e qualquer mensagem será bem vinda!
            </p>
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
            <div className="flex flex-wrap">
              {contact.map((item:any) => (
                <ContatoItem  
                  key={item.id}
                  nome={item.nome}
                  description={item.description}
                  address={item.address}
                  icon={item.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 text-center">
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()} Natãn Schneider. All Rights
          Reserved.
        </p>
      </div>
    </>
  );
}
