import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import { ReactNode, useState } from "react";
import { styled } from "styled-components";

interface iTabProps {
	children: panel[];
}

type panel = {
	label: string;
	panel: ReactNode | ReactNode[];
};

const TabStyle = styled.div`
	height: 100%;
	.MuiTabPanel-root {
		padding: 0px;
	}
`;

export function BaseTab(props: iTabProps) {
	const [value, setValue] = useState("1");
	const { children } = props;

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<TabStyle>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList onChange={handleChange}>
						{children.map((v, i) => {
							return <Tab key={i} label={v.label} value={String(i + 1)} />;
						})}
					</TabList>
				</Box>
				{children.map((v, i) => {
					return (
						<TabPanel
							key={i}
							value={String(i + 1)}
							style={{ padding: "10px", overflow: "scroll" }}>
							{v.panel}
						</TabPanel>
					);
				})}
			</TabContext>
		</TabStyle>
	);
}
