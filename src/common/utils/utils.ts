import {
	ARCHOR_CLASSES,
	MAGICIAN_CLASSES,
	PIRATE_CLASSES,
	THIEF_CLASSES,
	WARRIOR_CLASSES,
} from "../constants/class-map.constant";
import { ePotentialOptionGrade } from "../enums";
import { eClassColor } from "../enums/character-class.enum";

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

	static potentialOptionToColor(optionGrade: ePotentialOptionGrade) {
		switch (optionGrade) {
			case ePotentialOptionGrade.NONE:
				return "#8A8A8A";
			case ePotentialOptionGrade.RARE:
				return "#5393CA";
			case ePotentialOptionGrade.EPIC:
				return "#6454BD";
			case ePotentialOptionGrade.UNIQUE:
				return "#E09500";
			case ePotentialOptionGrade.LEGENDARY:
				return "#5CB85C";
		}
	}

	static filterOptions(option: string) {
		// 회복, 방어력, 공격 시
		if (
			["회복", "공격 시"].some((unuseOption) => option.includes(unuseOption))
		) {
			return "기타";
		}
		if (option.includes("크리티컬 확률")) {
			return option.replace("크리티컬 확률", "크확");
		}
		if (option.includes("크리티컬 데미지")) {
			return option.replace("크리티컬 데미지", "크뎀");
		}
		if (option.includes("몬스터 방어율 무시")) {
			return option.replace("몬스터 방어율 무시", "방무");
		}
		if (option.includes("보스 몬스터 공격 시 데미지")) {
			return option.replace("보스 몬스터 공격 시 데미지", "보뎀");
		}
		if (option.includes("캐릭터 기준 9레벨 당")) {
			return option.replace("캐릭터 기준 9레벨 당", "렙당");
		}

		return option;
	}
}

export default Utils;
