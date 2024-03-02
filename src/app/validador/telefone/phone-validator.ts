import parsePhoneNumber from "libphonenumber-js";

import { IPhoneValidator } from "./phone-validator.interface";

export class PhoneValidator implements IPhoneValidator {
	isPhone(value: string) {
		return parsePhoneNumber(value, "AO");
	}
}
