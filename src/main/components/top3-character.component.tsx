import { styled } from "styled-components";
import { CharacterCard } from "./character-card.component";
import { getTop3CharacterInfo } from "../../common/apis/character.api";
import { useQuery } from "react-query";
import Utils from "../../common/utils/utils";

const CharacterCardList = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: space-between;
	border-radius: 5px;
	margin: 20px;
	width: 100%;
	height: 250px;
`;

const Top3Label = styled.span`
	position: absolute;
	font-size: 12px;
	font-weight: bold;
	color: #bababa;
	top: -20px;
`;

export function Top3Character() {
	const { data: top3Info, isFetched: isTop3InfoFetched } = useQuery({
		queryFn: getTop3CharacterInfo,
		queryKey: ["getTop3CharacterInfo"],
		select: (res) => {
			if (res.success) {
				return res.data.rankUsers;
			} else if (!res.success) {
				console.log("TOP3 데이터 조회에 실패했습니다.");
				return [];
			}
		},
	});

	return (
		<CharacterCardList>
			<Top3Label>전체 서버 전투력 TOP3</Top3Label>
			{isTop3InfoFetched &&
				top3Info.map((info: any, idx: number) => {
					return (
						<CharacterCard
							key={idx}
							cardColor={Utils.classToColor(info.characterClass)}
							title={`TOP ${idx + 1}`}
							characterInfo={top3Info.find(
								(info: any) => info.rank === idx + 1
							)}
						/>
					);
				})}
		</CharacterCardList>
	);
}
