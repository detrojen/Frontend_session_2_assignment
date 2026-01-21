import type { TAdditionalBillInfo } from "./additionalBillInfo"
import type { TCartProduct } from "./productType"

export type TCartDetail = {
    products : TCartProduct[]
    additonalBillInfo: TAdditionalBillInfo
}