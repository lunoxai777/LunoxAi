import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Portal = () => {
  const navigate = useNavigate();
  const contractAddress = "ca will be pasted here"; // 🔹 Replace with your actual address
  const [copied, setCopied] = useState(false);

  const handleEnter = () => {
    navigate("/select");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/portal-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Foreground UI */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center space-y-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold neonText drop-shadow-lg">
          Welcome to LunoxAI
        </h1>

        <WalletMultiButton className="!bg-gray-800 !text-white hover:!bg-pink-600 transition" />

        <button
          onClick={handleEnter}
          className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Enter
        </button>

        {/* Contract Section */}
        <div className="mt-6 text-sm md:text-base bg-white/10 p-3 rounded-lg backdrop-blur-md">
          <p className="font-semibold text-pink-300">💠 Contract Address</p>
          <code className="block mt-1 text-pink-200 break-all">
            {contractAddress}
          </code>
          <button
            onClick={copyToClipboard}
            className="mt-2 px-3 py-1 bg-pink-600 hover:bg-pink-700 rounded-full text-xs font-semibold"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          {/* Explorer Links */}
          <div className="flex flex-col mt-2 space-y-1">
            <a
              href={`https://solscan.io/token/${contractAddress}`}
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 hover:underline"
            >
              View on Solscan
            </a>
            <a
              href={`https://dexscreener.com/solana/${contractAddress}`}
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 hover:underline"
            >
              View on Dexscreener
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
