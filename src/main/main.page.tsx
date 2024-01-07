import styled from "styled-components";
import { SearchBar } from "../common/components/search-bar.component";
import { ClassList } from "./components/class-list.component";
import { Top3Character } from "./components/top3-character.component";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.form`
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
	const form = useForm({
		defaultValues: {
			id: "",
		},
	});
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate(`/info?id=${form.getValues().id}`);
	};

	return (
		<MainContainer onSubmit={handleSubmit}>
			<Title>maple info</Title>
			<SearchBar form={form} onSubmit={handleSubmit} name="id"></SearchBar>
			<Top3Character></Top3Character>
			<ClassList></ClassList>
		</MainContainer>
	);
}
