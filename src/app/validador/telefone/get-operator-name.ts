type OperatorCode = {
  [key: number]: {
    name: string;
  };
};

const operatorCodes: OperatorCode = {
  5: { name: "Africell" },
  9: { name: "Movicel" },
  1: { name: "Movicel" },
  2: { name: "Unitel" },
  3: { name: "Unitel" },
  4: { name: "Unitel" },
};

export function getOperatorCodeName(phoneNumber: string): string {
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  const secondDigits = cleanedNumber.slice(1, 2);

  if (cleanedNumber.startsWith("+244")) {
    const firstDigit = cleanedNumber.slice(5, 6);
    return operatorCodes[+firstDigit].name;
  } else {
    return operatorCodes[+secondDigits].name;
  }
}
