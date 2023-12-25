import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getCharacterInfo } from "../common/apis/character.api";
import { styled } from "styled-components";
import { CharacterProfile } from "./components/character-profile.component";
import { CharacterStat } from "./components/character-stat.component";
import { CharacterSpec } from "./components/character-spec.component";
import { iCharacterInfo } from "../main/components/character-card.component";

const Title = styled.div`
	color: white;
	font-size: 30px;
	display: flex;
	font-weight: 700;
	font-family: revert;
	margin-bottom: 15px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 40px 15px 40px;
	color: #e9eaed;
`;

const DetailInfoContainer = styled.div`
	display: flex;
	flex-direction: Row;
	height: calc(100vh - 250px);
`;

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
		select: (res) => {
			if (res.success) {
				return res.data;
			} else if (!res.success) {
				console.log("캐릭터 정보 가져오기 실패");
				return {};
			}
		},
	});

	return isInfoFetched ? (
		<>
			<Wrapper>
				<Title>maple info</Title>
				<CharacterProfile characterInfo={characterInfo}></CharacterProfile>
				<DetailInfoContainer>
					<CharacterStat></CharacterStat>
					<CharacterSpec></CharacterSpec>
				</DetailInfoContainer>
			</Wrapper>
		</>
	) : null;
}
