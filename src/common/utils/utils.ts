import { CLASS_CODE_MAP } from "../constants/class-code-map.constant";
import { eCharacterClass } from "../enums/character-class.enum";

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
}

export default Utils;
