import { styled } from "styled-components";
import {
	eCharacterClass,
	eClassColor,
} from "../../common/enums/character-class.enum";
import { useTranslation } from "react-i18next";

const ClassButton = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0px 2px 2px 0px;
	width: 90px;
	height: 110px;
`;

const ClassLabel = styled.div`
	display: flex;
	position: absolute;
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	color: #ffffff;
	top: calc(100% - 20px);
`;

export function ClassCard(props: {
	classCode: number;
	classColor: eClassColor;
}) {
	const { classCode, classColor } = props;
	const { t } = useTranslation();

	return (
		<>
			<ClassButton>
				<img
					alt=""
					key={classCode}
					src={`/images/char${classCode}.png`}
					style={{
						width: "90px",
						height: "90px",
					}}></img>
				<ClassLabel
					style={{
						backgroundColor: classColor,
					}}>
					{t(`CLASS_NAME.${eCharacterClass[classCode]}`)}
				</ClassLabel>
			</ClassButton>
		</>
	);
}
