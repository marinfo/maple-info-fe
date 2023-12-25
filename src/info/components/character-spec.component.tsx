import { styled } from "styled-components";
import { BaseTab } from "../../common/components/tab.component";
import { Equipment } from "./tab-panels/equipment.component";
import { Union } from "./tab-panels/union.component";
import { VMatrix } from "./tab-panels/vmatrix.component";

const SpecBox = styled.div`
	flex: 7;
	height: 100%;
	background-color: white;
	border-radius: 5px;
`;

export function CharacterSpec() {
	return (
		<SpecBox>
			<BaseTab
				children={[
					{
						label: "장비",
						panel: <Equipment></Equipment>,
					},
					{
						label: "유니온",
						panel: <Union></Union>,
					},
					{
						label: "코어 매트릭스",
						panel: <VMatrix></VMatrix>,
					},
				]}></BaseTab>
		</SpecBox>
	);
}
