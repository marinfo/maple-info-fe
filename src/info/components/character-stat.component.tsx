import { styled } from "styled-components";
import { iCharacterInfo } from "../../main/components/character-card.component";
import { Font12Px, Font14Px } from "../../common/styles/global-component";

const StatBox = styled.div`
	flex: 3;
	background-color: rgba(255, 255, 255, 0.2);
	height: 550px;
	max-width: 250px;
	min-width: 250px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	padding: 10px;
	border-radius: 5px;
	margin-right: 10px;
`;

const Content = styled.div``;

const SubTitle = styled.span`
	font-size: 14px;
	font-weight: bold;
`;

const ClassImage = styled.img`
	border-radius: 25px;
	margin-bottom: 5px;
	height: 96px;
	width: 96px;
`;

const AlignCenterRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Divider = styled.div`
	display: flex;
	margin: 10px 0px 10px 0px;
	border: 0.5px solid #00000066;
`;

export function CharacterStat(props: { characterInfo: iCharacterInfo }) {
	const { characterInfo } = props;
	const {
		characterClass,
		characterGuildName,
		characterImage,
		characterLevel,
		characterName,
		combatPower,
		guildMark,
		rank,
		worldName,
		guildMarkCustom,
	} = characterInfo;

	return (
		<StatBox>
			<SubTitle>능력치</SubTitle>
			<Content>
				<AlignCenterRow>
					<ClassImage
						src={`/images/characters/${characterClass}.png`}></ClassImage>
				</AlignCenterRow>
				<AlignCenterRow>
					<Font14Px>{characterClass}</Font14Px>
				</AlignCenterRow>
				<Divider />
				<Row>
					<Font14Px>직업 순위</Font14Px>
				</Row>
				<Row>
					<Font12Px>589위 (상위 24%)</Font12Px>
				</Row>
				<Divider />
				<Row>
					<Font14Px>스탯 공격력</Font14Px>
				</Row>
				<Row>
					<Font12Px>185,343,104 ~ 205,936,780</Font12Px>
				</Row>
				<Divider />
				<Row>
					<Font14Px>주스탯</Font14Px>
				</Row>
				<Row
					style={{
						justifyContent: "space-between",
						padding: "0px 10px 0px 10px",
						marginBottom: "10px",
					}}>
					<Col>
						<Font12Px>68,549</Font12Px>
						<Font12Px>HP</Font12Px>
					</Col>
					<Col>
						<Font12Px>16,342</Font12Px>
						<Font12Px>MP</Font12Px>
					</Col>
					<Col>
						<Font12Px>7,743</Font12Px>
						<Font12Px>STR</Font12Px>
					</Col>
				</Row>
				<Row
					style={{
						justifyContent: "space-between",
						padding: "0px 10px 0px 10px",
					}}>
					<Col>
						<Font12Px>109,726</Font12Px>
						<Font12Px>DEX</Font12Px>
					</Col>
					<Col>
						<Font12Px>8,128</Font12Px>
						<Font12Px>INT</Font12Px>
					</Col>
					<Col>
						<Font12Px>6,763</Font12Px>
						<Font12Px>LUK</Font12Px>
					</Col>
				</Row>
				<Divider />
			</Content>
		</StatBox>
	);
}
