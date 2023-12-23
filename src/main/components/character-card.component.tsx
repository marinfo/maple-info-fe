import { styled } from "styled-components";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	border: 1.5px solid;
	border-radius: 5px;
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

interface iCharacterCardProps {
	image?: string;
	borderColor?: string;
}

export function CharacterCard(props: iCharacterCardProps) {
	const { borderColor } = props;

	return (
		<Card
			style={{
				borderColor: borderColor,
			}}>
			<div></div>
			<DetailButton
				style={{
					backgroundColor: borderColor,
				}}
				onClick={() => {
					console.log("상세 정보 페이지 이동");
				}}>
				<div>상세 정보</div>
			</DetailButton>
		</Card>
	);
}
