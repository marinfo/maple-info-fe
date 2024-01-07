import { eApiMethod } from "../enums";
import { baseApi } from "./base.api";

// TODO. url 정보 받아올 수 있도록 개선
export async function getCharacterInfo(characterName: string): Promise<any> {
	return await baseApi({
		url: `http://localhost:8080/nexon/character/basic?characterName=${characterName}`,
		method: eApiMethod.GET,
	});
}

export async function getTop3CharacterInfo(): Promise<any> {
	return await baseApi({
		url: `http://localhost:8080/home/top3`,
		method: eApiMethod.GET,
	});
}

export async function getEquipmentInfo(characterName: string): Promise<any> {
	return await baseApi({
		url: `http://localhost:8080/nexon/character/item-equipment?characterName=${characterName}`,
		method: eApiMethod.GET,
	});
}
