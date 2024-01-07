import { styled } from "styled-components";
import { BaseTab } from "../../common/components/tab.component";
import { eClassColor } from "../../common/enums/character-class.enum";
import { ClassCard } from "./class-card.component";
import {
	ARCHOR_CLASSES,
	MAGICIAN_CLASSES,
	PIRATE_CLASSES,
	THIEF_CLASSES,
	WARRIOR_CLASSES,
} from "../../common/constants/class-map.constant";

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

export function ClassList() {
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
								{WARRIOR_CLASSES.map((className, i) => {
									return (
										<ClassCard
											key={i}
											className={className}
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
								{MAGICIAN_CLASSES.map((className, i) => {
									return (
										<ClassCard
											key={i}
											className={className}
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
								{ARCHOR_CLASSES.map((className, i) => {
									return (
										<ClassCard
											key={i}
											className={className}
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
								{THIEF_CLASSES.map((className, i) => {
									return (
										<ClassCard
											key={i}
											className={className}
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
								{PIRATE_CLASSES.map((className, i) => {
									return (
										<ClassCard
											key={i}
											className={className}
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
