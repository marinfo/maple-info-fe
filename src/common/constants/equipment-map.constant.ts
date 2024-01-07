export interface iEquipmentInfo {
	itemName?: string;
	itemEquipmentPart?: string;
	itemIcon?: string;
	itemShapeIcon?: string;
	itemAddOption?: {
		str: number;
		dex: number;
		int: number;
		luk: number;
		max_hp: number;
		max_mp: number;
		attack_power: number;
		magic_power: number;
		armor: number;
		speed: number;
		jump: number;
		boss_damage: number;
		damage: number;
		all_stat: number;
		equipment_level_decrease: number;
	};
	additionalPotentialOptionGrade: string;
	potentialOptionGrade: string;
	potentialOption1: string;
	potentialOption2: string;
	potentialOption3: string;
	additionalPotentialOption1: string;
	additionalPotentialOption2: string;
	additionalPotentialOption3: string;
	starforce: number;
}
