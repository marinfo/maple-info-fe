import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getCharacterInfo } from "../common/apis/character.api";
import { styled } from "styled-components";
import { CharacterProfile } from "./components/character-profile.component";
import { CharacterStat } from "./components/character-stat.component";
import { CharacterSpec } from "./components/character-spec.component";

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
	width: calc(100% - 80px);
	color: #e9eaed;
`;

const DetailInfoContainer = styled.div`
	display: flex;
	flex-direction: Row;
	height: calc(100vh - 250px);
`;

export function InfoPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const params = new URLSearchParams(location.search);
	const id = params.get("id") as string;

	const { data: characterInfo, isFetched: isInfoFetched } = useQuery({
		queryFn: () => getCharacterInfo(id),
		queryKey: ["getCharacterInfo"],
		select: (res) => {
			if (res.success) {
				return res.data;
			} else if (!res.success) {
				console.log("캐릭터 정보 조회에 실패했습니다.");
				return {};
			}
		},
	});

	return isInfoFetched ? (
		<>
			<Wrapper>
				<Title
					onClick={() => {
						navigate("/");
					}}>
					maple info
				</Title>
				<CharacterProfile characterInfo={characterInfo}></CharacterProfile>
				<DetailInfoContainer>
					<CharacterStat characterInfo={characterInfo}></CharacterStat>
					<CharacterSpec
						characterName={characterInfo.characterName}></CharacterSpec>
				</DetailInfoContainer>
			</Wrapper>
		</>
	) : null;
}
