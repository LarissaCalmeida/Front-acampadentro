import { Archivo_Black, Poppins } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "400"],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading)
    return (
      <div className="min-w-full min-h-screen bg-[#2A553B] flex items-center justify-center">
        <Head>
          <title>Acampadentro 2025</title>
        </Head>
        <img src="/loading.gif" alt="Loading" width={800} />
      </div>
    );

  return (
    <div>
      <Head>
        <title>Acampadentro 2025</title>
      </Head>
      <header className="bg-[url(/background.webp)] bg-cover  bg-no-repeat min-w-full min-h-screen flex items-center justify-center p-9">
        <div className="lg:grid grid-cols-4">
          <div className="col-span-2">
            <img src={"/title.webp"} />

            <div className="bg-[#2A553B] w-full py-2 mt-3">
              <h3
                className={`${archivoBlack.className} text-3xl text-center font-bold text-[#E4D2C8]`}
              >
                22 a 24 - AGOSTO
              </h3>
            </div>

            <p
              className={`${poppins.className} text-lg font-bold mt-8 text-[#DEC489]`}
            >
              Três dias intensos, zero sinal e 100% propósito.
            </p>
            <p
              className={`${poppins.className} text-lg font-normal  text-[#DEC489]`}
            >
              Inscreva-se agora e venha viver tudo isso com a gente.
            </p>

            <div className="mt-9 flex gap-2 items-center flex-wrap">
              <Link
                href="/subscribe"
                className={`${poppins.className} py-2 px-4 bg-[#D06335] text-lg font-bold uppercase text-white rounded-sm`}
              >
                Inscreva-se
              </Link>
              <Link
                href="#manual"
                className={`${poppins.className} py-2 px-4 bg-white text-lg font-bold uppercase text-[#D06335] rounded-sm`}
              >
                Manual de Inscrição
              </Link>
            </div>
          </div>
          <div className="lg:block hidden col-end-5">
            <img src={"/tree.webp"} />
          </div>
        </div>
      </header>
      <section
        id="manual"
        className="min-h-screen bg-[#2A553B] p-9 flex items-center"
      >
        <div className="lg:grid grid-cols-2 gap-9 flex flex-col items-center">
          <img src="/camp.webp" className="lg:w-xl w-sm" />

          <div>
            <h2 className={`${archivoBlack.className} text-4xl text-[#E4D2C8]`}>
              Manual de Inscrição
            </h2>

            <ul className="mt-9 flex flex-col gap-4">
              <li className={`${poppins.className} flex items-start gap-2`}>
                <span className=" min-w-[32px] h-[32px] font-bold rounded-sm bg-[#D06335] text-[#E4D2C8] flex items-center justify-center">
                  1
                </span>

                <p className="text-[#DEC489]">
                  Clique no botão <b>Inscreva-se agora</b> ou{" "}
                  <Link href="/subscribe" className="underline">
                    clique aqui
                  </Link>{" "}
                  para acessar o formulário
                </p>
              </li>

              <li className={`${poppins.className} flex items-start gap-2`}>
                <span className="min-w-[32px] h-[32px] font-bold rounded-sm bg-[#D06335] text-[#E4D2C8] flex items-center justify-center">
                  2
                </span>

                <p className="text-[#DEC489]">
                  Preencha todo o formulário. Mas fique atento(a), o Acampante
                  terá que ser maior de 12 anos.
                </p>
              </li>

              <li className={`${poppins.className} flex items-start gap-2`}>
                <span className="min-w-[32px] h-[32px] font-bold rounded-sm bg-[#D06335] text-[#E4D2C8] flex items-center justify-center">
                  3
                </span>

                <p className="text-[#DEC489]">
                  Ao finalizar pague a taxa de inscrição até o dia 17. Você pode
                  optar por PIX ou entregar o pagamento pessoalmente a um dos
                  Líderes da Juventude.
                </p>
              </li>

              <li className={`${poppins.className} flex items-start gap-2`}>
                <span className="min-w-[32px] h-[32px] font-bold rounded-sm bg-[#D06335] text-[#E4D2C8] flex items-center justify-center">
                  4
                </span>

                <p className="text-[#DEC489]">
                  <b>Chave PIX:</b> 069.712.205-01 <br />
                  <b>Nome: </b> Beatriz Bispo
                </p>
              </li>
            </ul>

            <div className="bg-[#D06335] rounded-md p-5 mt-9">
              <p className={`${poppins.className} text-[#E4D2C8]`}>
                <b>Taxa de Inscrição:</b> R$30 + 1 agasalho ou cobertor{" "}
              </p>

              <p className={`${poppins.className} text-sm text-[#E4D2C8] mt-2`}>
                Para participar do Acampadentro, pedimos uma contribuição
                simbólica. Além disso, cada participante deve trazer 1 agasalho
                ou cobertor, que será doado para ajudar quem precisa.
              </p>

              <p className={`${poppins.className} text-sm text-[#E4D2C8] mt-2`}>
                O <b>Prazo final</b> de inscrições será no dia 17/08
              </p>
            </div>
            <div className="mt-9 flex gap-2 items-center flex-wrap">
              <Link
                href="/subscribe"
                className={`${poppins.className} py-2 px-4 bg-white text-md font-bold uppercase text-[#D06335] rounded-sm`}
              >
                Inscreva-se agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen bg-[#1d3523] p-9 lg:grid grid-cols-3 flex flex-col-reverse  justify-between gap-9"
      >
        <div className="col-start-1 col-end-3 gap-9 flex flex-col  lg:ml-5 max-w-3xl">
          <div>
            <h2
              className={`${archivoBlack.className} text-4xl text-[#E4D2C8] wrap-break-word`}
            >
              Sobre o Acampadentro
            </h2>

            <p className="text-[#E4D2C8] mt-9 text-lg ">
              <b>Vem aí o Acampadentro!</b> <br />
              Durante um fim de semana especial, nossa igreja será transformada
              em um espaço de comunhão, diversão e crescimento espiritual. Toda
              a programação acontecerá dentro da própria igreja, garantindo
              segurança e proximidade, com exceção da Ação Social no sábado,
              onde todos terão a oportunidade de colocar em prática o amor ao
              próximo.
            </p>

            <p className="text-[#E4D2C8] mt-9 text-lg">
              O objetivo do Acampadentro é promover momentos de amizade e
              integração, aprofundando no tema da quinzena de forma leve e
              descontraída. Teremos gincanas, meditações, louvores, dinâmicas e
              muitas surpresas ao longo do evento. É a oportunidade perfeita
              para fortalecer a fé, criar novas amizades e viver experiências
              marcantes!
            </p>

            <p className="text-[#E4D2C8] mt-9 text-lg">
              Se prepare para um final de semana diferente, cheio de risadas,
              desafios, momentos especiais e memórias que ficarão para sempre no
              coração.
            </p>
          </div>
        </div>
        <img src="/mochila.webp" className="lg:w-sm w-28 col-end-4" />
      </section>

      <section
        id="localization"
        className="min-h-screen bg-[#2A553B] p-9 flex items-center"
      >
        <div className="lg:grid grid-cols-2 gap-9 flex flex-col ">
          <img src="/localization.webp" className="lg:w-sm w-28 " />

          <div className="col-end-3 lg:ml-36">
            <h2 className={`${archivoBlack.className} text-4xl text-[#E4D2C8]`}>
              Como chegar?
            </h2>
            <p className="text-[#E4D2C8] mt-9 text-lg ">
              Toda a programação ocorrerá dentro da Igreja Batista Shalom.{" "}
              <br />
              <b>Endereço:</b> Rua Nossa Sra. de Fátima, 23, Urbis IV
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+Nossa+Sra.+de+Fátima,+23,+Urbis+IV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D06335] text-white px-4 py-2 rounded-lg hover:bg-[#966e5d] transition mt-9"
            >
              📍 Traçar rota no Google Maps
            </a>
          </div>
        </div>
      </section>

      <section
        id="aboutUs"
        className="min-h-screen bg-[#1E1E1E] p-9 lg:grid grid-cols-3 flex flex-col-reverse  justify-between gap-9"
      >
        <div className="col-start-1 col-end-3 gap-9 flex flex-col items-center lg:ml-5 max-w-3xl">
          <div>
            <h2 className={`${archivoBlack.className} text-4xl text-[#E4D2C8]`}>
              Quem somos?
            </h2>

            <p className="text-[#E4D2C8] mt-9 text-lg ">
              Somos Líderes da Juventude da <b>Igreja Batista Shalom</b> que,
              durante todo o ano, promovemos encontros, dinâmicas e ações para
              aproximar os jovens de Deus e uns dos outros. O Acampadentro é um
              dos momentos mais especiais dessa jornada — um final de semana
              para viver amizades, diversão e fé de forma intensa e segura.
            </p>

            <div className="lg:grid grid-cols-4 mt-9 flex flex-wrap gap-5">
              <div className="flex flex-col items-center gap-1">
                <img src="/beatriz.webp" />
                <span className="text-[#E4D2C8]">Beatriz Bispo</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <img src="/Nilson.webp" />
                <span className="text-[#E4D2C8]">Nilson Mendes</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <img src="/Larissa.webp" />
                <span className="text-[#E4D2C8]">Larissa Carvalho</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <img src="/Silas.webp" />
                <span className="text-[#E4D2C8]">Silas Portugal</span>
              </div>
            </div>
          </div>
        </div>
        <img src="/logo-juventude.webp" className="lg:w-md w-28 col-end-4" />
      </section>

      <section
        id="localization"
        className="min-h-screen bg-[#1d3523] p-9 flex items-center justify-center"
      >
        <div className="flex flex-col">
          <div className="col-end-2 lg:ml-36">
            <h2 className={`${archivoBlack.className} text-4xl text-[#E4D2C8]`}>
              Ficou com alguma dúvida?
            </h2>
            <p className="text-[#E4D2C8] mt-9 text-lg ">
              Entre em contato com <b>Lari Carvalho</b> pelo WhatsApp. Será um
              prazer ajudar você!{" "}
              <Link
                href="https://wa.me/5573988684480"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mt-5"
              >
                <span>(73) 98868-4480</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <footer
        className={`${poppins.className} bg-[#1F201F] text-[#DEC489] p-5`}
      >
        <p className="text-center">
          Desenvolvido por{" "}
          <b>
            {" "}
            <Link
              href="https://portfolio-larissa-carvalhos-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block  text-white  rounded-lg "
            >
              Larissa Carvalho
            </Link>
          </b>{" "}
          com 💚e muito ☕
        </p>
      </footer>
    </div>
  );
}
