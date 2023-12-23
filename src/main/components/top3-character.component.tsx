import { styled } from "styled-components";
import { CharacterCard } from "./character-card.component";

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
	return (
		<CharacterCardList>
			<CharacterCard borderColor="#5CB85C" />
			<CharacterCard borderColor="#5393CA" />
			<CharacterCard borderColor="#6D62A1" />
		</CharacterCardList>
	);
}
