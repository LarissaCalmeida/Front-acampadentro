import Image from "next/image";
import { Archivo_Black, Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";

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
      <header className="bg-[url(/background.webp)] bg-cover bg-no-repeat min-w-full min-h-screen flex items-center justify-center p-9">
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
          <img src="/camp.webp" className="lg:w-full w-sm" />

          <div>
            <h2 className={`${archivoBlack.className} text-4xl text-[#E4D2C8]`}>
              Manual de Inscrição
            </h2>

            <ul className="mt-9 flex flex-col gap-4">
              <li className={`${poppins.className} flex items-center gap-2`}>
                <span className=" min-w-[32px] h-[32px] font-bold rounded-sm bg-[#D06335] text-[#E4D2C8] flex items-center justify-center">
                  1
                </span>

                <p className="text-[#DEC489]">
                  Clique no botão <b>Inscreva-se</b> agora ou{" "}
                  <Link href="/subscribe" className="underline">
                    clique aqui
                  </Link>{" "}
                  para acessar o formulário
                </p>
              </li>

              <li className={`${poppins.className} flex items-center gap-2`}>
                <span className="min-w-[32px] h-[32px] font-bold rounded-sm bg-[#D06335] text-[#E4D2C8] flex items-center justify-center">
                  2
                </span>

                <p className="text-[#DEC489]">
                  Preencha todo o formulário. Mas fique atento(a), o Acampante
                  terá que ser maior de 15 anos.
                </p>
              </li>

              <li className={`${poppins.className} flex items-center gap-2`}>
                <span className="min-w-[32px] h-[32px] font-bold rounded-sm bg-[#D06335] text-[#E4D2C8] flex items-center justify-center">
                  3
                </span>

                <p className="text-[#DEC489]">
                  Ao finalizar pague a taxa de inscrição até o dia 20, Você pode
                  optar por PIX ou entregar o pagamento pessoalmente.
                </p>
              </li>

              <li className={`${poppins.className} flex items-center gap-2`}>
                <span className="min-w-[32px] h-[32px] font-bold rounded-sm bg-[#D06335] text-[#E4D2C8] flex items-center justify-center">
                  4
                </span>

                <p className="text-[#DEC489]">
                  <b>Chave PIX:</b> (xx) xxxxx-xxxx
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

      <footer
        className={`${poppins.className} bg-[#1F201F] text-[#DEC489] p-5`}
      >
        <p className="text-center">
          Desenvolvido por <b>Larissa Carvalho</b> com 💚 e muito ☕
        </p>
      </footer>
    </div>
  );
}
