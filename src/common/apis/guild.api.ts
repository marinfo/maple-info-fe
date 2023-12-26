import { eApiMethod } from "../enums";
import { baseApi } from "./base.api";

export async function getGuildInfo(
	guildName: string,
	worldName: string
): Promise<any> {
	return await baseApi({
		url: `http://localhost:8080/guild/basic?guildName=${guildName}&worldName=${worldName}`,
		method: eApiMethod.GET,
	});
}
