import { styled } from "styled-components";
import { iCharacterInfo } from "../../main/components/character-card.component";
import Utils from "../../common/utils/utils";
import { Button } from "@mui/material";

const ProfileBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	min-height: 240px;
	max-height: 240px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 5px;
	margin-bottom: 10px;
	padding: 20px;
`;

const SquareImage = styled.img`
	width: 192px;
	height: 192px;
	margin: 15px;
`;

const ServerLogo = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 5px;
`;

const Font12Px = styled.span`
	font-size: 12px;
`;

const Font14Px = styled.span`
	font-size: 14px;
	font-weight: bold;
	margin-top: 5px;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 5px;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

const CharacterName = styled.span`
	font-size: 24px;
	font-weight: bold;
	margin-right: 10px;
`;

const RefreshButton = styled.div`
	margin-top: 5px;
	.MuiButtonBase-root {
		width: 72px;
		height: 35px;
		border: 0px;
		background-color: #607b32;
		font-weight: bold;
		color: white;
		border-radius: 5px;
	}
`;

export function CharacterProfile(props: { characterInfo: iCharacterInfo }) {
	const { characterInfo } = props;
	const {
		characterClass,
		characterImage,
		characterName,
		characterLevel,
		characterGuildName,
		combatPower,
		worldName,
	} = characterInfo;

	return (
		<ProfileBox>
			<Row>
				<Col
					style={{
						alignItems: "center",
					}}>
					<SquareImage src={characterImage}></SquareImage>
					<Font12Px>마지막 접속일: 1일 전</Font12Px>
				</Col>
				<Description>
					<Row>
						<CharacterName>{characterName}</CharacterName>
						<div
							style={{
								border: "1px solid #969899",
								borderRadius: "20px",
								display: "flex",
								alignItems: "center",
								padding: "3px 5px 3px 5px",
							}}>
							<ServerLogo src={`/images/servers/${worldName}.png`}></ServerLogo>
							<Font12Px>{worldName}</Font12Px>
						</div>
					</Row>
					<Row>
						<Font12Px>
							{"Lv. " +
								characterLevel +
								" | " +
								characterClass +
								" | 3499위 (상위 30%)"}
						</Font12Px>
					</Row>
					<Row>
						<Font14Px>{"환산 주스탯 8.9만"}</Font14Px>
					</Row>
					<Row>
						<Font14Px>
							{"전투력 " + Utils.formatNumberToKorean(734391223)}
						</Font14Px>
					</Row>
					<RefreshButton>
						<Button>정보 갱신</Button>
					</RefreshButton>
				</Description>
			</Row>
			<Col style={{ alignItems: "center" }}>
				<SquareImage src="/images/tiers/challenger.png"></SquareImage>
			</Col>
		</ProfileBox>
	);
}
