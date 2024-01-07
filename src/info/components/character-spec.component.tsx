import { styled } from "styled-components";
import { BaseTab } from "../../common/components/tab.component";
import { Equipment } from "./tab-panels/equipment/equipment.component";
import { Union } from "./tab-panels/union/union.component";
import { VMatrix } from "./tab-panels/vmatirx/vmatrix.component";

const SpecBox = styled.div`
	flex: 8;
	height: 570px;
	min-width: 640px;
	background-color: white;
	border-radius: 5px;
`;

export function CharacterSpec(props: { characterName: string }) {
	const { characterName } = props;

	return (
		<SpecBox>
			<BaseTab
				children={[
					{
						label: "장비",
						panel: <Equipment characterName={characterName}></Equipment>,
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
