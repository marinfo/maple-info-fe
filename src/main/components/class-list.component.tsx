import { styled } from "styled-components";
import { BaseTab } from "../../common/components/tab.component";
import { useTranslation } from "react-i18next";
import {
	eCharacterClass,
	eClassColor,
} from "../../common/enums/character-class.enum";
import { CharacterCard } from "./character-card.component";
import { ClassCard } from "./class-card.component";

const Container = styled.div`
	background-color: white;
	border: 1px solid #555555;
	border-radius: 5px;
	margin: 20px;
	position: relative;
	width: 100%;
	height: 330px;
`;

const BoxLabel = styled.div`
	position: absolute;
	font-size: 12px;
	font-weight: bold;
	color: #bababa;
	top: -20px;
`;

const ClassButton = styled.div`
	display: flex;
	justify-content: center;
	padding: "0px 10px 10px 10px";
	position: relative;
	width: 100px;
	height: 120px;
`;

const ClassLabel = styled.div`
	position: absolute;
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	width: 100%;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	color: #ffffff;
	top: calc(100% - 20px);
`;

export function ClassList() {
	const { t } = useTranslation();

	const warriorClassCodeList = Array(12)
		.fill(1)
		.map((v, i) => {
			return i + 1;
		});

	const magicianClassCodeList = Array(10)
		.fill(1)
		.map((v, i) => {
			return i + 1 + warriorClassCodeList.length;
		});

	const archorClassCodeList = Array(7)
		.fill(1)
		.map((v, i) => {
			return i + 1 + warriorClassCodeList.length + magicianClassCodeList.length;
		});
	const thiefClassCodeList = Array(9)
		.fill(1)
		.map((v, i) => {
			return (
				i +
				1 +
				warriorClassCodeList.length +
				magicianClassCodeList.length +
				archorClassCodeList.length
			);
		});

	const pirateClassCodeList = Array(9)
		.fill(1)
		.map((v, i) => {
			return (
				i +
				1 +
				warriorClassCodeList.length +
				magicianClassCodeList.length +
				archorClassCodeList.length +
				thiefClassCodeList.length
			);
		});

	return (
		<Container>
			<BoxLabel>직업별 전투력 순위</BoxLabel>
			<BaseTab
				children={[
					{
						label: "전사",
						panel: (
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
								}}>
								{warriorClassCodeList.map((v, i) => {
									return (
										<ClassCard
											key={i}
											classCode={v}
											classColor={eClassColor.WARRIOR}></ClassCard>
									);
								})}
							</div>
						),
					},
					{
						label: "마법사",
						panel: (
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
								}}>
								{magicianClassCodeList.map((v, i) => {
									return (
										<ClassCard
											key={i}
											classCode={v}
											classColor={eClassColor.MAGICIAN}></ClassCard>
									);
								})}
							</div>
						),
					},
					{
						label: "궁수",
						panel: (
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
								}}>
								{archorClassCodeList.map((v, i) => {
									return (
										<ClassCard
											key={i}
											classCode={v}
											classColor={eClassColor.ARCHOR}></ClassCard>
									);
								})}
							</div>
						),
					},
					{
						label: "도적",
						panel: (
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
								}}>
								{thiefClassCodeList.map((v, i) => {
									return (
										<ClassCard
											key={i}
											classCode={v}
											classColor={eClassColor.THIEF}></ClassCard>
									);
								})}
							</div>
						),
					},
					{
						label: "해적",
						panel: (
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
								}}>
								{pirateClassCodeList.map((v, i) => {
									return (
										<ClassCard
											key={i}
											classCode={v}
											classColor={eClassColor.PIRATE}></ClassCard>
									);
								})}
							</div>
						),
					},
				]}></BaseTab>
		</Container>
	);
}
