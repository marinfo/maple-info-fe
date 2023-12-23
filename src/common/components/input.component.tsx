import { TextField } from "@mui/material";
import { eInputType, eInputWidth } from "../enums";
import { styled } from "styled-components";

export interface iInputProps {
	type: eInputType;
	label?: string;
	helperText?: string;
	width?: eInputWidth;
	disabled?: boolean;
}

const InputStyle = styled.div`
	padding: 0px 10px 0px 10px;

	.MuiInputBase-input {
		padding: 10px;
	}
`;

export function Input(props: iInputProps) {
	const { label, helperText, type, disabled, width } = props;
	return (
		<InputStyle>
			<TextField
				sx={{
					width: width,
				}}
				maxRows={1}
				label={label}
				type={type}
				disabled={disabled}
				helperText={helperText}
			/>
		</InputStyle>
	);
}
