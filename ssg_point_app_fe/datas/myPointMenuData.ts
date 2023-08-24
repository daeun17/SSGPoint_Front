import { MenuType } from "@/types/MenuType";

export const myPointMenuData : MenuType[] = [
    {
        id : 1,
        name : "포인트내역",
        url : "/pntHistory"
    },
    {
        id : 2,
        name : "포인트 카드 관리",
        url : "/cardManage"
    },
    {
        id : 3,
        name : "제휴포인트 카드 관리",
        url : "/regAffiliatePntCard"
    },
    {
        id : 4,
        name : "포인트 선물",
        url : "/pntGiftMain"
    },
    {
        id : 5,
        name : "포인트 전환",
        url : "/convertPntList"
    },
    {
        id : 6,
        name : "영수증으로 적립",
        url : "/savePoint"
    },
]