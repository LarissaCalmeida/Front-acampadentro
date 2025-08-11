import { useState } from "react";
import Image from "next/image";

export default function SuccessModal({
  isOpen,
  onClose,
  pixCode,
  qrCodeImage,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-md relative">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center text-green-600 mb-2">
          Inscrição realizada com sucesso!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Realize o pagamento via PIX para confirmar sua inscrição.
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-4">
          <Image
            src={qrCodeImage}
            alt="QR Code PIX"
            width={200}
            height={200}
            className="rounded-lg border"
          />
        </div>

        {/* Código PIX */}
        <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between gap-2 mb-4">
          <span className="text-sm text-gray-800 break-all">{pixCode}</span>
          <button
            onClick={handleCopy}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          >
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>

        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
