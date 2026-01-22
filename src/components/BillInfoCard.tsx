import {  useContext, useEffect, useMemo, useRef, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { CartContext } from "../contexts/CartContext"
import type { TCartProduct } from "../types/productType"
import { Link } from "react-router-dom"
function calculateBillInfo(products:TCartProduct[]) : {grossPrice:number, totalQuantaty: number}{
    let grossPrice = 0
    let totalQuantaty=0
    products.forEach((product)=>{
        totalQuantaty += product.addedQnty
        grossPrice += Math.round(product.addedQnty*product.price)
    })
    return {grossPrice, totalQuantaty}
}
function BillInfoCard() {
    const {cartDetail: {products,additonalBillInfo}, clearCart,applyCoupon} = useContext(CartContext)
    const [isShowCouponInp, setisShowCouponInp] = useState(additonalBillInfo.couponCode != null)
    const codeInputRef = useRef(null)
    const {theme:{card, btn}} = useContext(ThemeContext)
    const makeCodeInpVisible = () => {
        setisShowCouponInp(true)
    }
    useEffect(()=>{
        if(codeInputRef != null && additonalBillInfo.couponCode == null){
            codeInputRef.current.focus()
        }
    },[isShowCouponInp])
    // const calculatdeBillInfo = useMemo<{grossPrice:number, totalQuantaty: number}>(()=>calculateBillInfo(products),[products]) 
    return <>
        <div className={`${card.bg} p-2`}>
            <div className=" pe-1">
                <table className="table-auto w-full my-2" >
                    <thead>
                        <tr>
                            <th className="text-wrap border border-grey-300 text-white bg-gray-600">Title</th>
                            <th className="text-wrap border border-grey-300 text-white bg-gray-600">Price</th>
                            <th className="text-wrap border border-grey-300 text-white bg-gray-600">qty</th>
                            <th className="text-wrap border border-grey-300 text-white bg-gray-600">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                product=>
                                    <tr>
                                        <td className="text-wrap text-center border border-grey-300">{product.title}</td>
                                        <td className="text-wrap border text-end pe-0.5 border-grey-300">{product.price}</td>
                                        <td className="text-wrap border text-end pe-0.5 border-grey-300">{product.addedQnty}</td>
                                        <td className="text-wrap border text-end pe-0.5 border-grey-300">{Math.round(product.price * product.addedQnty)}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

                <div>
                    <p>Gross total:- {additonalBillInfo.grossTotal}</p>
                    <p>total items:- {additonalBillInfo.totalItems}</p>
                    <p>discount:- {additonalBillInfo.discount}</p>
                    <p>payable:- {additonalBillInfo.payable}</p>
                </div>
                <button className={`${btn}`} onClick={clearCart}>clear all</button>
                <Link className={btn} to="/checkout">Chckout</Link>
                {
                    !additonalBillInfo.couponCode ?
                    <>
                        <button className={`${btn} ${isShowCouponInp? "hidden" : "block"}`} onClick={makeCodeInpVisible}>Have a coupon?</button>
                        <input ref={codeInputRef} onChange={(e)=>{codeInputRef.current.value = e.target.value}} className={`border ${isShowCouponInp? "block" : "hidden"}`}/>
                        <button className={`${btn} ${isShowCouponInp? "block" : "hidden"}`}  onClick={()=>applyCoupon(codeInputRef.current.value)}>apply</button>
                    </>
                    :
                    <p>applied coupon code: {additonalBillInfo.couponCode}</p>
                }
            </div>
                  
        </div>
    </>

}
export default BillInfoCard