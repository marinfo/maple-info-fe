import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getCharacterInfo } from "../common/apis/character.api";

export function InfoPage() {
	const location = useLocation()
		.pathname.split("/")
		.filter((v) => v !== "/");

	const characterName = decodeURIComponent(
		location[location.indexOf("info") + 1]
	);

	const { data: characterInfo, isFetched: isInfoFetched } = useQuery({
		queryFn: () => getCharacterInfo(characterName),
		queryKey: ["getCharacterInfo"],
	});

	return isInfoFetched ? (
		<>
			<span
				style={{
					fontSize: "20px",
					color: "white",
				}}>
				{characterInfo.characterName}
			</span>
			<img alt={""} src={characterInfo.characterImage}></img>
		</>
	) : null;
}
