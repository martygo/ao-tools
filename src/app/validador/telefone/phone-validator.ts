import parsePhoneNumber from "libphonenumber-js";

import { IPhoneValidator } from "./phone-validator.interface";

export class PhoneValidator implements IPhoneValidator {
  isPhone(value: string) {
    const regex = /^(?:(\+244|00244))?(9)(1|2|3|4|5|9)([\d]{7,7})$/i;
    return regex.test(value);
  }
}
