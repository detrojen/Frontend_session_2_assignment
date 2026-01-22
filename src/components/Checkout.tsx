import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"

function Checkout() {
    const [time, setTime] = useState(300)
    const { theme: { card, btn } } = useContext(ThemeContext)
    const {cartDetail:{additonalBillInfo}} = useContext(CartContext);
    useEffect(() => {
        if (time > 0) {
            const idx = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
            return () => {
                clearTimeout(idx)
                console.log("rerender occurs")
            }
        }
    }, [time])
    return <>
        <div className={` grid grid-cols-1 h-100 w-full align-middle`}>
            <div className="bg-white pt-10 pb-5 flex flex-col h-full w-1/2 align-middle text-center justify-between">
                <div>
                    <p>Stock reserved for</p>
                    <p className="text-3xl">{Math.floor(time / 60)} : {time % 60}</p>
                    {
                        time <= 60 ? <p className="text-red-500">Hurry up</p> : <></>
                    }
                </div>
                
                <div >
                    <p>total items- {additonalBillInfo.totalItems}</p>
                    <p>grosstotal :- {additonalBillInfo.grossTotal}</p>
                    <p>discount:- {additonalBillInfo.discount}</p>
                    <p>payable amount:- {additonalBillInfo.payable}</p>
                    <button disabled={time == 0} className={`${btn} my-4`}>Pay</button>
                </div>
            </div>
            
        </div>
    </>
}

export default Checkout 