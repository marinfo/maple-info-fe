import { Input } from "./input.component";
import { eSearchBarWidth } from "../enums";
import { Button, TextField } from "@mui/material";
import { styled } from "styled-components";
import { Search } from "@mui/icons-material";

export interface iSearchBarProps {
	label?: string;
	width?: eSearchBarWidth;
}

const SearchBarStyle = styled.div`
	display: flex;
	flex-flow: row;
	background-color: white;
	border: 1px solid #202020;
	width: 100%;
	border-radius: 5px;
	justify-content: space-between;
	margin: 10px;

	.MuiOutlinedInput-notchedOutline {
		border: 0px;
	}
`;

export function SearchBar(props: iSearchBarProps) {
	const { label, width } = props;
	return (
		<SearchBarStyle>
			<TextField
				placeholder="닉네임을 입력하세요."
				fullWidth={true}></TextField>
			<Button>
				<Search
					sx={{
						height: "100%",
						width: "30px",
						padding: "0px 10px 0px 10px",
					}}
				/>
			</Button>
		</SearchBarStyle>
	);
}
