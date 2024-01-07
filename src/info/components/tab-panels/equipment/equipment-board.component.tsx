import { styled } from "styled-components";
import { iEquipmentInfo } from "../../../../common/constants/equipment-map.constant";
import { useEffect, useState } from "react";
import { BaseTooltip } from "../../../../common/components/tooltip.component";
import { Grid } from "@mui/material";
import Utils from "../../../../common/utils/utils";
import { ePotentialOptionGrade } from "../../../../common/enums";
import { Col, Font12Px, Row } from "../../../../common/styles/global-component";

const Wrapper = styled.div`
	display: grid;
	gap: 8px;
	color: black;
	width: 100%;
	height: 490px;
`;

const EquipmentBox = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	padding: 5px 0px;
	border: 1px solid #969899;
	height: 100px;
`;

const ImageWrapper = styled.div`
	border: 1.5px solid;
	border-radius: 3px;
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const Starforce = styled.div`
	background-color: #fff8e8;
	border-radius: 3px;
	color: #f6a730;
	font-size: 12px;
	width: fit-content;
	font-weight: bold;
`;

const AdditionalOption = styled.div`
	background-color: #efefef;
	border-radius: 3px;
	color: #666a7a;
	font-size: 12px;
	width: fit-content;
	font-weight: bold;
`;

export function EquipmentBoard(props: { equipmentList: iEquipmentInfo[] }) {
	const [openTooltip, setOpenTooltip] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { equipmentList } = props;

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Wrapper>
			<Grid container spacing={1}>
				{equipmentList.map((equip, idx) => {
					const {
						itemName,
						itemEquipmentPart,
						itemIcon,
						itemShapeIcon,
						starforce,
						potentialOptionGrade,
						additionalPotentialOptionGrade,
						potentialOption1,
						potentialOption2,
						potentialOption3,
						additionalPotentialOption1,
						additionalPotentialOption2,
						additionalPotentialOption3,
					} = equip;

					return (
						<Grid item xs={12} sm={windowWidth > 1200 ? 4 : 6} key={idx}>
							<EquipmentBox>
								<Row
									style={{
										gap: 8,
										flex: 3,
										borderBottom: "0.5px solid #969899",
										padding: "0px 11px",
										alignItems: "center",
									}}>
									<ImageWrapper
										style={{
											borderColor: `${Utils.potentialOptionToColor(
												potentialOptionGrade as ePotentialOptionGrade
											)}`,
										}}>
										<img src={itemIcon} />
									</ImageWrapper>
									<Col>
										<Font12Px style={{ color: "#666A7A" }}>
											{itemEquipmentPart}
										</Font12Px>
										<Font12Px style={{ fontWeight: "bold" }}>
											{itemName}
										</Font12Px>
										<Row style={{ gap: 8 }}>
											{starforce > 0 && (
												<Starforce>{"★" + starforce}</Starforce>
											)}
											<AdditionalOption>200급</AdditionalOption>
										</Row>
									</Col>
								</Row>
								<Row
									style={{
										flex: 1,
										padding: "5px 11px 0px 11px",
										fontWeight: "bold",
										gap: 6,
										color: `${Utils.potentialOptionToColor(
											potentialOptionGrade as ePotentialOptionGrade
										)}`,
									}}>
									<Font12Px>{potentialOption1}</Font12Px>
									<Font12Px>{potentialOption2}</Font12Px>
									<Font12Px>{potentialOption3}</Font12Px>
								</Row>
								<Row
									style={{
										flex: 1,
										padding: "5px 11px 0px 11px",
										gap: 6,
										fontWeight: "bold",
										color: `${Utils.potentialOptionToColor(
											additionalPotentialOptionGrade as ePotentialOptionGrade
										)}`,
									}}>
									<Font12Px>{additionalPotentialOption1}</Font12Px>
									<Font12Px>{additionalPotentialOption2}</Font12Px>
									<Font12Px>{additionalPotentialOption3}</Font12Px>
								</Row>
							</EquipmentBox>
						</Grid>
					);
				})}
			</Grid>
			{openTooltip && <BaseTooltip title="테스트 툴팁"></BaseTooltip>}
		</Wrapper>
	);
}
