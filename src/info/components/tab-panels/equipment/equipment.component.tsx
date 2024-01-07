import { styled } from "styled-components";
import { EquipmentBoard } from "./equipment-board.component";
import { useQuery } from "react-query";
import { getEquipmentInfo } from "../../../../common/apis/character.api";
import { iEquipmentInfo } from "../../../../common/constants/equipment-map.constant";
import { MOCK_EQUIPMENT } from "../../../../common/constants/mock-data.constant";
import Utils from "../../../../common/utils/utils";

type itemType = {
	item_equipment_part?: any;
	item_equipment_slot?: any;
	item_name?: any;
	item_icon?: any;
	item_description?: any;
	item_shape_name?: any;
	item_shape_icon?: any;
	item_gender?: any;
	item_total_option?: any;
	item_base_option?: any;
	potential_option_grade?: any;
	additional_potential_option_grade?: any;
	potential_option_1?: any;
	potential_option_2?: any;
	potential_option_3?: any;
	additional_potential_option_1?: any;
	additional_potential_option_2?: any;
	additional_potential_option_3?: any;
	equipment_level_increase?: any;
	item_exceptional_option?: any;
	item_add_option?: any;
	growth_exp?: any;
	growth_level?: any;
	scroll_upgrade?: any;
	cuttable_count?: any;
	golden_hammer_flag?: any;
	scroll_resilience_count?: any;
	scroll_upgradeable_count?: any;
	soul_name?: any;
	soul_option?: any;
	item_etc_option?: any;
	starforce?: any;
	starforce_scroll_flag?: any;
	item_starforce_option?: any;
	special_ring_level?: any;
	date_expire?: any;
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export function Equipment(props: { characterName: string }) {
	const { characterName } = props;
	const { data: equipmentList, isFetched: isEquipmentFetched } = useQuery({
		queryFn: () => getEquipmentInfo(characterName),
		queryKey: ["getEquipmentInfo"],
		select: (res) => {
			if (res.success) {
				const itemList = res.data.itemEquipmentList;
				// TODO. type 추후 DTO 변경
				return itemList.map((item: any): iEquipmentInfo => {
					return {
						itemName: item.itemName,
						itemEquipmentPart: item.itemEquipmentPart,
						itemIcon: item.itemIcon,
						itemShapeIcon: item.itemShapeIcon,
						potentialOptionGrade: item.potentialOptionGrade,
						starforce: item.starforce,
						additionalPotentialOptionGrade: item.additionalPotentialOptionGrade,
						potentialOption1:
							item.potentialOption1 &&
							Utils.filterOptions(item.potentialOption1),
						potentialOption2:
							item.potentialOption2 &&
							Utils.filterOptions(item.potentialOption2),
						potentialOption3:
							item.potentialOption3 &&
							Utils.filterOptions(item.potentialOption3),
						additionalPotentialOption1:
							item.additionalPotentialOption1 &&
							Utils.filterOptions(item.additionalPotentialOption1),
						additionalPotentialOption2:
							item.additionalPotentialOption2 &&
							Utils.filterOptions(item.additionalPotentialOption2),
						additionalPotentialOption3:
							item.additionalPotentialOption3 &&
							Utils.filterOptions(item.additionalPotentialOption3),
					};
				});
			} else if (!res.success) {
				return [];
			}
		},
	});

	// ## OPEN API 다 썼을때 목 데이터 활용
	// const equipmentList = MOCK_EQUIPMENT.map((item: itemType): iEquipmentInfo => {
	// 	return {
	// 		itemName: item.item_name,
	// 		itemEquipmentPart: item.item_equipment_part,
	// 		itemIcon: item.item_icon,
	// 		itemShapeIcon: item.item_shape_icon,
	// 		potentialOptionGrade: item.potential_option_grade,
	// 		starforce: item.starforce,
	// 		additionalPotentialOptionGrade: item.additional_potential_option_grade,
	// 		potentialOption1:
	// 			item.potential_option_1 && Utils.filterOptions(item.potential_option_1),
	// 		potentialOption2:
	// 			item.potential_option_2 && Utils.filterOptions(item.potential_option_2),
	// 		potentialOption3:
	// 			item.potential_option_3 && Utils.filterOptions(item.potential_option_3),
	// 		additionalPotentialOption1:
	// 			item.additional_potential_option_1 &&
	// 			Utils.filterOptions(item.additional_potential_option_1),
	// 		additionalPotentialOption2:
	// 			item.additional_potential_option_2 &&
	// 			Utils.filterOptions(item.additional_potential_option_2),
	// 		additionalPotentialOption3:
	// 			item.additional_potential_option_3 &&
	// 			Utils.filterOptions(item.additional_potential_option_3),
	// 	};
	// });

	return (
		<>
			{isEquipmentFetched && (
				<Wrapper>
					<EquipmentBoard equipmentList={equipmentList}></EquipmentBoard>
				</Wrapper>
			)}
		</>
		// <Wrapper>
		// 	<EquipmentBoard equipmentList={equipmentList}></EquipmentBoard>
		// </Wrapper>
	);
}
