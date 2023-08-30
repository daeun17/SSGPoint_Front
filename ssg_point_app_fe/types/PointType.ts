export interface PointType {
    "pointId" : number
    "point": number
    "used" : boolean
    "pointType" :  string 
    "createdDate": Date
    "updatedDate": Date
    "franchiseeName": string // 선물의 경우 null
    "addDetailDesc": string  // 선물의 경우 null
    "receiptNumber" : string //영수증 조회가 아닌 경우 null
    "messageOnOff" : string // 선물인 경우 메시지가 있으면 ON 없으면 OFF
    "giftType": string // 대기 취소, 사용
    "giftName": string // todo 가명처리하기            
    "giftSenderId": string // todo 가명처리하기 
    "giftId" : number // 선물이 아닌경우 null
}