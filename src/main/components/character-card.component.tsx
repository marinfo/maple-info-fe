import { styled } from "styled-components";
import { eCharacterClass } from "../../common/enums/character-class.enum";
import { useTranslation } from "react-i18next";
import Utils from "../../common/utils/utils";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	border: 1.5px solid;
	border-radius: 5px;
	box-shadow: 0px 3px 3px 0px;
	width: 220px;
	height: 250px;
`;

const DetailButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 220px;
	height: 45px;
	color: white;
	border: 0px;
	font-weight: bold;
`;

const TitleBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 220px;
	height: 45px;
	font-weight: bold;
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 190px;
	height: 160px;
	padding: 15px;
`;

const CharacterInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 12px;
`;

const CharacterImage = styled.img`
	width: 96px;
	height: 96px;
	margin: 5px;
`;

const PowerInfo = styled.span`
	font-size: 13px;
	font-weight: bold;
	margin-bottom: 5px;
	line-height: 13px;
	color: rgb(132, 137, 153);
`;

const GuildInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const GuildLabel = styled.span`
	font-size: 13px;
	line-height: 13px;
	margin-right: 5px;
	color: rgb(132, 137, 153);
`;

const GuildName = styled.span`
	font-size: 13px;
	line-height: 13px;
	font-weight: bold;
	margin-right: 5px;
	color: #848999;
`;

const GuildMarkImage = styled.img`
	margin: 3px;
`;

type characterInfo = {
	characterClass: string;
	characterGuildName: string;
	characterImage: string;
	characterLevel: number;
	characterName: string;
	combatPower: number;
	guildMark: string;
	guildMarkCustom?: string;
	rank: number;
	worldName: string;
};

interface iCharacterCardProps {
	cardColor?: string;
	title: string;
	characterInfo: characterInfo;
}

export function CharacterCard(props: iCharacterCardProps) {
	const { cardColor, title, characterInfo } = props;
	const navigation = useNavigate();
	const { t } = useTranslation();

	console.log(characterInfo.guildMark);

	return (
		<Card
			style={{
				borderColor: cardColor,
			}}>
			<TitleBox
				style={{
					borderBottom: `1px solid ${cardColor}`,
					color: cardColor,
				}}>
				{title}
			</TitleBox>
			<ContentBox>
				<CharacterInfo>
					<img
						alt={""}
						src={`/images/servers/${characterInfo.worldName}.png`}
						style={{
							width: "19px",
							height: "19px",
							marginRight: "3px",
						}}
					/>
					<span style={{ fontWeight: 600, marginRight: "3px" }}>
						{characterInfo.characterName}
					</span>
					<span style={{ marginRight: "3px" }}>
						{"Lv." + characterInfo.characterLevel}
					</span>
					<span style={{ color: "#848999" }}>
						{t(
							`CLASS_NAME.${
								eCharacterClass[
									Utils.classNameToCode(characterInfo.characterClass)
								]
							}`
						)}
					</span>
				</CharacterInfo>
				<CharacterImage src={characterInfo.characterImage} />
				<PowerInfo>
					{"전투력 " + Utils.formatNumberToKorean(characterInfo.combatPower)}
				</PowerInfo>
				<GuildInfo>
					<GuildLabel>{"길드 "}</GuildLabel>
					<GuildMarkImage
						src={`data:image/png;base64,${characterInfo.guildMarkCustom}`}
						style={{
							marginRight: "3px",
						}}></GuildMarkImage>
					<GuildName>
						{characterInfo.characterGuildName
							? characterInfo.characterGuildName
							: "없음"}
					</GuildName>
				</GuildInfo>
			</ContentBox>
			<DetailButton
				style={{
					backgroundColor: cardColor,
				}}
				onClick={() => {
					navigation(`/info/${characterInfo.characterName}`);
				}}>
				<div>상세 정보</div>
			</DetailButton>
		</Card>
	);
}
