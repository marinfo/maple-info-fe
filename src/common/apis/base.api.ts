import axios from "axios";
import { eApiMethod } from "../enums";

export interface iApiConfig {
	method: eApiMethod;
	url: string;
	data?: any;
}

export async function baseApi(apiConfig: iApiConfig) {
	const { url, method, data } = apiConfig;
	try {
		const apiResult = await axios({
			method,
			url,
			data,
		});
		return {
			success: true,
			data: apiResult.data,
		};
	} catch (error) {
		// TODO. 서버 측 에러 응답에 맞춰 사양 변경필요
		return {
			success: false,
			message: (error as any)?.message ?? "에러가 발생했습니다.",
		};
	}
}
