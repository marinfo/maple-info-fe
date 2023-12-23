import styled from "styled-components";
import { SearchBar } from "../common/components/search-bar.component";
import { ClassList } from "./components/class-list.component";
import { Top3Character } from "./components/top3-character.component";

const MainContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	position: absolute;
	left: calc(50% - 392px);
	width: 784px;
`;

const Title = styled.div`
	color: white;
	font-size: 50px;
	display: flex;
	font-weight: 700;
	font-family: revert;
	margin: 30px;
	z-index: -1;
`;

export function MainPage() {
	return (
		<MainContainer>
			<Title>maple info</Title>
			<SearchBar></SearchBar>
			<Top3Character></Top3Character>
			<ClassList></ClassList>
		</MainContainer>
	);
}
