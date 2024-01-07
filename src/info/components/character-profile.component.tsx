import { styled } from "styled-components";
import { iCharacterInfo } from "../../main/components/character-card.component";
import Utils from "../../common/utils/utils";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useQuery } from "react-query";
import { getGuildInfo } from "../../common/apis/guild.api";
import { Font12Px, Font14Px, Logo } from "../../common/styles/global-component";

const ProfileBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	min-height: 220px;
	max-height: 220px;
	min-width: 880px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 5px;
	margin-bottom: 10px;
	padding: 20px;
`;

const SquareImage = styled.img`
	width: 144px;
	height: 144px;
	margin: 15px 30px 15px 30px;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
	margin: 5px 5px 0px 0px;
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

const StartButton = styled.button`
	margin-top: 5px;
	width: 35px;
	height: 35px;
	border: 0px;
	background-color: #2a2a2a;
	font-weight: bold;
	color: white;
	border-radius: 5px;
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

	const { data: guildInfo, isFetched: isGuildFetched } = useQuery({
		queryFn: () => getGuildInfo(characterGuildName, worldName),
		queryKey: ["getGuildName"],
		select: (res) => {
			if (res.success) {
				const info = res.data;
				if (info.guildMarkCustom) {
					info.guildMark = info.guildMarkCustom;
				}
				return info;
			} else if (!res.success) {
				console.log("길드 정보 조회에 실패했습니다.");
				return {};
			}
		},
	});

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
					{isGuildFetched && guildInfo.guildName && (
						<Row>
							<Logo
								src={`data:image/png;base64,${guildInfo.guildMarkCustom}`}></Logo>
							<Font12Px>{guildInfo.guildName}</Font12Px>
						</Row>
					)}
					<Row>
						<CharacterName>{characterName}</CharacterName>
						<div
							style={{
								border: "1px solid #969899",
								borderRadius: "20px",
								display: "flex",
								alignItems: "center",
								padding: "3px 5px 3px 5px",
								marginRight: "5px",
							}}>
							<Logo src={`/images/servers/${worldName}.png`}></Logo>
							<Font12Px>{worldName}</Font12Px>
						</div>
					</Row>
					<Row style={{ marginBottom: "10px" }}>
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
					<Row>
						<RefreshButton>
							<Button>정보 갱신</Button>
						</RefreshButton>
						<StartButton>
							<StarBorderIcon />
						</StartButton>
					</Row>
					<Row>
						<Font12Px>마지막 업데이트: 12분 전</Font12Px>
					</Row>
				</Description>
			</Row>
			<Col style={{ alignItems: "center" }}>
				<SquareImage src="/images/tiers/challenger.png"></SquareImage>
			</Col>
		</ProfileBox>
	);
}
