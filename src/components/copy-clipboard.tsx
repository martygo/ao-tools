import { CopyToClipboard } from "@/helpers/copy-to-clipboard";
import { Check, ClipboardIcon } from "lucide-react";
import { useState } from "react";

interface CopyToClipboardProps {
  textToBeCopied: string;
}

export function CopyClipboard({ textToBeCopied }: CopyToClipboardProps) {
  const [wasCopied, setWasCopied] = useState<boolean>(false);

  async function handleCopyToClipboard() {
    CopyToClipboard(textToBeCopied).then((copiedValue) => {
      setWasCopied(copiedValue);
    });

    setTimeout(() => {
      setWasCopied(false);
    }, 1500);
  }

  return (
    <>
      {wasCopied ? (
        <Check className="text-green-400 w-5 h-5 " />
      ) : (
        <ClipboardIcon
          onClick={handleCopyToClipboard}
          className="text-gray-400 w-5 h-5 cursor-pointer animate-jump animate-infinite"
        />
      )}
    </>
  );
}
