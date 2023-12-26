import {
	ARCHOR_CLASSES,
	MAGICIAN_CLASSES,
	PIRATE_CLASSES,
	THIEF_CLASSES,
	WARRIOR_CLASSES,
} from "../constants/class-map.constant";
import { eCharacterClass, eClassColor } from "../enums/character-class.enum";

class Utils {
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
		if (WARRIOR_CLASSES.some((name) => name === className)) {
			return eClassColor.WARRIOR;
		}
		if (MAGICIAN_CLASSES.some((name) => name === className)) {
			return eClassColor.MAGICIAN;
		}
		if (ARCHOR_CLASSES.some((name) => name === className)) {
			return eClassColor.ARCHOR;
		}
		if (THIEF_CLASSES.some((name) => name === className)) {
			return eClassColor.THIEF;
		}
		if (PIRATE_CLASSES.some((name) => name === className)) {
			return eClassColor.PIRATE;
		}
	}
}

export default Utils;
