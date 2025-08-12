import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function maskPhone(valor) {
  const apenasNumeros = valor.replace(/\D/g, "");

  if (apenasNumeros.length <= 10) {
    // Formato: (11) 1234-5678
    return apenasNumeros
      .replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
      .trim();
  } else {
    // Formato: (11) 91234-5678
    return apenasNumeros
      .replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
      .trim();
  }
}

export function ehMenorDeIdade(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();

  const idade =
    hoje.getFullYear() -
    nascimento.getFullYear() -
    (hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() &&
      hoje.getDate() < nascimento.getDate())
      ? 1
      : 0);

  return idade < 18;
}

export function ehMenorQue12(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();

  const idade =
    hoje.getFullYear() -
    nascimento.getFullYear() -
    (hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() &&
      hoje.getDate() < nascimento.getDate())
      ? 1
      : 0);

  return idade < 12;
}
