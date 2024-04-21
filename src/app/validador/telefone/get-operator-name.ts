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

function getSecondDigit(phoneNumber: string): string {
  if (phoneNumber.startsWith("+244")) {
    return phoneNumber.slice(5, 6);
  } else {
    return phoneNumber.slice(1, 2);
  }
}

export function getOperatorCodeName(phoneNumber: string): string {
  const secondDigit = getSecondDigit(phoneNumber);
  return operatorCodes[+secondDigit].name;
}
