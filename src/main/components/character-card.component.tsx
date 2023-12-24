import { styled } from "styled-components";
import { eCharacterClass } from "../../common/enums/character-class.enum";
import { useTranslation } from "react-i18next";
import Utils from "../../common/utils/utils";

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

const DetailButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 220px;
	height: 45px;
	color: white;
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
	margin: 10px;
`;

const PowerInfo = styled.span`
	font-size: 13px;
	font-weight: bold;
	line-height: 13px;
	color: rgb(132, 137, 153);
	font-family: Pretendard, -apple-system, Segoe UI, Roboto, Helvetica Neue,
		sans-serif;
`;

type characterInfo = {
	nickName: string;
	level: number;
	classCode: eCharacterClass;
	power: number;
};

interface iCharacterCardProps {
	image?: string;
	cardColor?: string;
	title: string;
	server: string;
	characterInfo: characterInfo;
}

export function CharacterCard(props: iCharacterCardProps) {
	const { cardColor, title, server, characterInfo } = props;
	const { t } = useTranslation();

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
						src={`/images/${server}.png`}
						style={{
							width: "19px",
							height: "19px",
							marginRight: "3px",
						}}
					/>
					<span style={{ fontWeight: 600, marginRight: "3px" }}>
						{characterInfo.nickName}
					</span>
					<span style={{ marginRight: "3px" }}>
						{"Lv." + characterInfo.level}
					</span>
					<span style={{ color: "#848999" }}>
						{t(`CLASS_NAME.${eCharacterClass[characterInfo.classCode]}`)}
					</span>
				</CharacterInfo>
				<CharacterImage src={`/images/char${characterInfo.classCode}.png`} />
				<PowerInfo>
					{"전투력 " + Utils.formatNumberToKorean(characterInfo.power)}
				</PowerInfo>
			</ContentBox>
			<DetailButton
				style={{
					backgroundColor: cardColor,
				}}
				onClick={() => {
					console.log("상세 정보 페이지 이동");
				}}>
				<div>상세 정보</div>
			</DetailButton>
		</Card>
	);
}
