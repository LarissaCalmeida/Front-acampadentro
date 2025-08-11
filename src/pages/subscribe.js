import SuccessModal from "@/components/success-modal-subscribe";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ehMenorDeIdade, ehMenorQue12, maskPhone } from "@/lib/utils";
import { Check, Loader2, MessageCircleWarning } from "lucide-react";
import { Archivo_Black, Poppins } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "400"],
});

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    reset,
  } = useForm();
  const [isAMinor, setIsAMinor] = useState(false);
  const [isAMinor12, setIsAMinor12] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [watchHaveAllergies, watchMedicationUse, watchMedicalCondition] = watch(
    ["haveAllergies", "medicationUse", "medicalCondition"]
  );

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      await fetch("/api/subscribes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(data);
      setIsOpenModal(true);
      toast("Inscrição realizada com sucesso.", {
        icon: <Check className="text-green-400" />,
      });
      reset();
    } catch (error) {
      toast("Erro ao realizar inscrição.", {
        icon: <MessageCircleWarning className="text-red-600" />,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <header className="bg-[url(/florest2.png)] bg-[#2A553B]  bg-contain bg-bottom bg-no-repeat min-w-full min-h-screen flex flex-col items-center lg:p-9 p-5">
        <Head>
          <title>Acampadentro 2025 - Ficha de Inscrição</title>
        </Head>
        <img src={"/title.webp"} width={200} />
        <h1 className="text-[#DEC489] text-3xl font-bold mt-5">
          Inscrição para o Acampadentro 2025
        </h1>
        <p className="text-[#DEC489] text-sm">
          Só é permitido Acampantes maiores de 12 anos.
        </p>

        <div className="bg-[#D06335] rounded-md p-5 mt-9 max-w-5xl">
          <p className={`${poppins.className} text-[#E4D2C8]`}>
            <b>Taxa de Inscrição:</b> R$30 + 1 agasalho ou cobertor{" "}
          </p>

          <p className={`${poppins.className} text-sm text-[#E4D2C8] mt-2`}>
            Para participar do Acampadentro, pedimos uma contribuição simbólica.
            Além disso, cada participante deve trazer 1 agasalho ou cobertor,
            que será doado para ajudar quem precisa.
          </p>

          <p className={`${poppins.className} text-sm text-[#E4D2C8] mt-2`}>
            O valor deverá ser pago na <b>Chave PIX</b> abaixo ou entregue a
            algum dos Líderes da Juventude.
          </p>

          <p className={`${poppins.className} text-sm text-[#E4D2C8] mt-2`}>
            <b>Chave PIX:</b> 069.712.205-01 <br />
            <b>Nome: </b> Beatriz Bispo
          </p>

          <p className={`${poppins.className} text-sm text-[#E4D2C8] mt-2`}>
            <b>Atenção:</b> Realizar o preenchimento do formulário não garante a
            inscrição, a confirmação da inscrição é realizada com o comprovante
            do pagamento apresentado a um dos líderes.
          </p>
        </div>

        <form
          className="bg-white rounded-md max-w-5xl lg:p-9 p-5 mt-9 shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-bold text-xl text-gray-800">
            Informações Pessoais
          </h3>
          <hr></hr>

          <div className="mt-5 lg:grid grid-cols-3 lg:gap-9 gap-5 flex flex-wrap p-2 items-start">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="name">
                Nome Completo <span className="text-sm text-red-600">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Seu nome"
                {...register("name", {
                  required: "Informe seu nome completo.",
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />

              <span className="block text-sm text-red-600">
                {errors?.name?.message}
              </span>
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="date">
                Data de Nascimento{" "}
                <span className="text-sm text-red-600">*</span>
              </Label>
              <Input
                type="date"
                id="date"
                placeholder="Data de Nascimento"
                {...register("birthdate", {
                  required: "Informe a data de aniversário.",
                })}
                aria-invalid={errors.birthdate ? "true" : "false"}
                onChange={(e) => {
                  setIsAMinor(ehMenorDeIdade(e.target.value));

                  if (ehMenorQue12(e.target.value)) {
                    setIsAMinor12(true);
                    setError("birthdate", {
                      message: "O Acampante dever ser maior que 12 anos :(",
                    });
                  } else {
                    setIsAMinor12(false);
                    clearErrors("birthdate");
                  }
                }}
              />

              <span className="block text-sm text-red-600">
                {errors?.birthdate?.message}
              </span>
            </div>
          </div>

          <h3 className="font-bold text-xl text-gray-800 mt-9">Seu contato</h3>
          <hr></hr>

          <div className="mt-5 lg:grid grid-cols-3 lg:gap-9 gap-5 flex flex-wrap p-2 items-start">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="phone">
                Celular/Whatsapp <span className="text-sm text-red-600">*</span>
              </Label>
              <Input
                type="text"
                id="phone"
                placeholder="(xx) xxxxx-xxxx"
                {...register("phone", {
                  required: "Informe o seu número de celular.",
                  pattern: {
                    value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
                    message: "Formato de celular inválido",
                  },
                })}
                aria-invalid={errors.phone ? "true" : "false"}
                onChange={(e) => setValue("phone", maskPhone(e.target.value))}
                maxLength={15}
                minLength={15}
              />

              <span className="block text-sm text-red-600">
                {errors?.phone?.message}
              </span>
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                placeholder="email@example.com"
                {...register("email")}
              />
              <span className="block text-sm text-red-600">
                {errors?.email?.message}
              </span>
            </div>
          </div>

          {isAMinor && (
            <>
              <h3 className="font-bold text-xl text-gray-800 mt-9">
                Responsável (se for menor de idade)
              </h3>
              <hr></hr>

              <div className="mt-5 lg:grid grid-cols-3 gap-9 flex flex-wrap p-2 items-start">
                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="nameResponsiblePerson">
                    Nome Completo do Responsável{" "}
                    <span className="text-sm text-red-600">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="nameResponsiblePerson"
                    placeholder="John Doe"
                    {...register("nameResponsiblePerson", {
                      required: "Informe o nome do responsável.",
                    })}
                    aria-invalid={
                      errors.nameResponsiblePerson ? "true" : "false"
                    }
                  />

                  <span className="block text-sm text-red-600">
                    {errors?.nameResponsiblePerson?.message}
                  </span>
                </div>

                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="phone">
                    Celular <span className="text-sm text-red-600">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="phone"
                    placeholder="(xx) xxxxx-xxxx"
                    {...register("phoneResponsiblePerson", {
                      required: "Informe o número do responsável.",
                      pattern: {
                        value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
                        message: "Formato de celular inválido",
                      },
                    })}
                    aria-invalid={
                      errors.phoneResponsiblePerson ? "true" : "false"
                    }
                    onChange={(e) =>
                      setValue(
                        "phoneResponsiblePerson",
                        maskPhone(e.target.value)
                      )
                    }
                    maxLength={15}
                    minLength={15}
                  />
                  <span className="block text-sm text-red-600">
                    {errors?.phoneResponsiblePerson?.message}
                  </span>
                </div>

                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    {" "}
                    <Checkbox
                      id="termResponsiblePerson"
                      {...register("termResponsiblePerson", {
                        required: "Você deve aceitar os termos",
                      })}
                      onCheckedChange={(e) => {
                        setValue("termResponsiblePerson", e);
                      }}
                    />
                    <Label htmlFor="termResponsiblePerson">
                      Estou ciente e autorizo a participação do meu filho(a) no
                      evento
                    </Label>
                  </div>

                  <span className="text-sm text-red-600 block mt-2">
                    {errors?.termResponsiblePerson?.message}
                  </span>
                </div>
              </div>
            </>
          )}

          {!isAMinor && (
            <>
              <h3 className="font-bold text-xl text-gray-800 mt-9">
                Contato de Emergência
              </h3>
              <hr></hr>

              <div className="mt-5 lg:grid grid-cols-3 gap-9 flex flex-wrap p-2 items-start">
                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="nameEmergencyContact">
                    Nome do Responsável{" "}
                    <span className="text-sm text-red-600">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="nameEmergencyContact"
                    placeholder="John Doe"
                    {...register("nameEmergencyContact", {
                      required: "Informe o nome do responsável.",
                    })}
                    aria-invalid={
                      errors.nameEmergencyContact ? "true" : "false"
                    }
                  />
                  <span className="block text-sm text-red-600">
                    {errors?.nameEmergencyContact?.message}
                  </span>
                </div>

                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="phoneEmergencyContact">
                    Celular <span className="text-sm text-red-600">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="phoneEmergencyContact"
                    placeholder="(xx) xxxxx-xxxx"
                    {...register("phoneEmergencyContact", {
                      required: "Informe um telefone de emergência",
                      pattern: {
                        value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
                        message: "Formato de telefone inválido",
                      },
                    })}
                    aria-invalid={
                      errors.phoneEmergencyContact ? "true" : "false"
                    }
                    onChange={(e) =>
                      setValue(
                        "phoneEmergencyContact",
                        maskPhone(e.target.value)
                      )
                    }
                    maxLength={15}
                    minLength={15}
                  />
                  <span className="block text-sm text-red-600">
                    {errors?.phoneEmergencyContact?.message}
                  </span>
                </div>
              </div>
            </>
          )}
          <h3 className="font-bold text-xl text-gray-800 mt-9">
            Informações de Saúde
          </h3>
          <hr></hr>

          <div className="mt-5 lg:grid grid-cols-3 gap-9 flex flex-wrap p-2 items-start">
            <div className="flex items-center gap-3 w-full">
              <Checkbox
                id="haveAllergies"
                onCheckedChange={(e) => {
                  setValue("haveAllergies", e);
                }}
              />
              <Label htmlFor="haveAllergies">Possui alguma alergia?</Label>
            </div>

            {watchHaveAllergies && (
              <div className="grid w-full gap-3 col-start-2 col-end-4 lg:mt-0 mt-[-16px]">
                <Label htmlFor="descHaveAllergies">
                  Informe a(s) alergia(s){" "}
                  <span className="text-sm text-red-600">*</span>
                </Label>
                <Textarea
                  placeholder="Descreva aqui."
                  id="descHaveAllergies"
                  {...register("descHaveAllergies", {
                    required: watchHaveAllergies ? "Descreva a alergia" : false,
                  })}
                />
              </div>
            )}

            <div className="flex items-center gap-3 w-full">
              <Checkbox
                id="medicationUse"
                onCheckedChange={(e) => {
                  setValue("medicationUse", e);
                }}
              />
              <Label htmlFor="medicationUse">
                Faz uso contínuo de medicação?
              </Label>
            </div>

            {watchMedicationUse && (
              <div className="grid w-full gap-3 col-start-2 col-end-4 lg:mt-0 mt-[-16px]">
                <Label htmlFor="descMedicationUse">
                  Informe o medicamento e detalhe o que for necessário{" "}
                  <span className="text-sm text-red-600">*</span>
                </Label>
                <Textarea
                  placeholder="Descreva aqui."
                  id="descMedicationUse"
                  {...register("descMedicationUse", {
                    required: watchMedicationUse
                      ? "Descreva o medicamento"
                      : false,
                  })}
                />
              </div>
            )}

            <div className="flex items-center gap-3 w-full">
              <Checkbox
                id="medicalCondition"
                // {...register("medicalCondition")}
                onCheckedChange={(e) => {
                  setValue("medicalCondition", e);
                }}
              />
              <Label htmlFor="medicalCondition">
                Tem alguma restrição alimentar ou condição médica importante?
              </Label>
            </div>

            {watchMedicalCondition && (
              <div className="grid w-full gap-3 col-start-2 col-end-4 lg:mt-0 mt-[-16px]">
                <Label htmlFor="descMedicalCondition">
                  Quais? (Detalhe todas as informações importantes para ficarmos
                  por dentro :) ){" "}
                  <span className="text-sm text-red-600">*</span>
                </Label>
                <Textarea
                  placeholder="Descreva aqui."
                  id="descMedicalCondition"
                  {...register("descMedicalCondition", {
                    required: watchMedicalCondition
                      ? "Descreva as condições médicas"
                      : false,
                  })}
                />
              </div>
            )}
          </div>

          <h3 className="font-bold text-xl text-gray-800 mt-9">
            Ação Solidária
          </h3>
          <hr></hr>

          <div className="mt-5 grid gap-3 p-2">
            <div className="flex items-center gap-3">
              <Checkbox
                id="termSocialAction"
                {...register("termSocialAction", {
                  required: "Você deve aceitar os termos",
                })}
                onCheckedChange={(e) => {
                  setValue("termSocialAction", e);
                }}
              />
              <Label htmlFor="termSocialAction">
                Estou ciente de que preciso levar 1 agasalho ou cobertor no dia
                do evento. <span className="text-sm text-red-600">*</span>
              </Label>
            </div>

            <span className="text-sm text-red-600 block mt-2">
              {errors?.termSocialAction?.message}
            </span>
          </div>

          <h3 className="font-bold text-xl text-gray-800 mt-9">
            Declaração Final
          </h3>
          <hr></hr>

          <div className="mt-5 grid gap-3 p-2">
            <div className="flex items-center gap-3">
              <Checkbox
                id="termGeneral"
                {...register("termGeneral", {
                  required: "Você deve aceitar os termos",
                })}
                onCheckedChange={(e) => {
                  setValue("termGeneral", e);
                }}
              />
              <Label htmlFor="termGeneral">
                Confirmo que as informações acima são verdadeiras e estou ciente
                das responsabilidades durante o evento.{" "}
                <span className="text-sm text-red-600">*</span>
              </Label>
            </div>

            <span className="text-sm text-red-600 block mt-2">
              {errors?.termGeneral?.message}
            </span>
          </div>

          <button
            className={`${poppins.className} py-2 px-4 md:w-max w-full bg-[#D06335] hover:bg-[#a74f2a] text-md font-bold uppercase text-white rounded-sm mt-9 float-right cursor-pointer disabled:bg-gray-500 disabled:cursor-default flex items-center justify-center gap-2`}
            disabled={isAMinor12 || isLoading}
          >
            {isLoading ? (
              <>
                <span>Finalizando</span>
                <Loader2 className="animate-spin" />
              </>
            ) : (
              "Finalizar inscrição"
            )}
          </button>
        </form>
      </header>

      <footer
        className={`${poppins.className} bg-[#1F201F] text-[#DEC489] p-5`}
      >
        <p className="text-center">
          Desenvolvido por{" "}
          <b>
            <Link
              href="https://portfolio-larissa-carvalhos-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block  text-white  rounded-lg "
            >
              Larissa Carvalho
            </Link>
          </b>{" "}
          com 💚 e muito ☕
        </p>
      </footer>

      <SuccessModal
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
        pixCode={"069.712.205-01"}
        qrCodeImage={"/qrcode-pix.png"}
      />
    </div>
  );
}
