import {
	ARCHOR_CLASS_CODES,
	CLASS_CODE_MAP,
	MAGICIAN_CLASS_CODES,
	PIRATE_CLASS_CODES,
	THIEF_CLASS_CODES,
	WARRIOR_CLASS_CODES,
} from "../constants/class-code-map.constant";
import { eCharacterClass, eClassColor } from "../enums/character-class.enum";

class Utils {
	static classNameToCode(className: string): eCharacterClass {
		return CLASS_CODE_MAP[className as keyof typeof CLASS_CODE_MAP];
	}

	static formatNumberToKorean(num: number): string {
		const units = ["", "만", "억", "조", "경", "해"];
		const numString = num.toString();

		const groups = [];
		for (let i = numString.length; i > 0; i -= 4) {
			groups.push(numString.slice(Math.max(0, i - 4), i));
		}

		const koreanNumber = groups
			.map((group, index) => {
				const parsedGroup = parseInt(group, 10);
				if (parsedGroup === 0) return "";
				const unit = units[index];
				return `${parsedGroup}${unit}`;
			})
			.reverse()
			.join("");

		return koreanNumber || "0";
	}

	static classToColor(className: string) {
		// 전사 0~12, 마법사 13~22, 궁수 23~29, 도적 30~38, 해적 39~47
		const classCode = this.classNameToCode(className);

		if (WARRIOR_CLASS_CODES.some((code) => code === classCode)) {
			return eClassColor.WARRIOR;
		}
		if (MAGICIAN_CLASS_CODES.some((code) => code === classCode)) {
			return eClassColor.MAGICIAN;
		}
		if (ARCHOR_CLASS_CODES.some((code) => code === classCode)) {
			return eClassColor.ARCHOR;
		}
		if (THIEF_CLASS_CODES.some((code) => code === classCode)) {
			return eClassColor.THIEF;
		}
		if (PIRATE_CLASS_CODES.some((code) => code === classCode)) {
			return eClassColor.PIRATE;
		}
	}
}

export default Utils;
