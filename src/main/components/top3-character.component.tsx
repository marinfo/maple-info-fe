import { styled } from "styled-components";
import { CharacterCard } from "./character-card.component";
import { eCharacterClass } from "../../common/enums/character-class.enum";

const CharacterCardList = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-radius: 5px;
	margin: 20px;
	width: 100%;
	height: 250px;
`;

export function Top3Character() {
	const mockTop1Character = {
		nickName: "쪼빼미",
		level: 292,
		classCode: eCharacterClass.WIND_BREAKER,
		power: 720849372,
	};
	const mockTop2Character = {
		nickName: "쏴두마스터",
		level: 274,
		classCode: eCharacterClass.SOUL_MASTER,
		power: 680213276,
	};
	const mockTop3Character = {
		nickName: "케티써",
		level: 282,
		classCode: eCharacterClass.VIPER,
		power: 650329415,
	};
	return (
		<CharacterCardList>
			<CharacterCard
				cardColor="#5CB85C"
				title="TOP 1"
				server="베라"
				characterInfo={mockTop1Character}
			/>
			<CharacterCard
				cardColor="#5393CA"
				title="TOP 2"
				server="스카니아"
				characterInfo={mockTop2Character}
			/>
			<CharacterCard
				cardColor="#6D62A1"
				title="TOP 3"
				server="엘리시움"
				characterInfo={mockTop3Character}
			/>
		</CharacterCardList>
	);
}
