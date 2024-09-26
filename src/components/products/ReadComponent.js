import React, {useEffect, useState} from 'react';
import {
    API_SERVER_HOST,
} from "../../api/todoApi";
import FetchingModal from "../common/FetchingModal";
import useCustomMove from "../../hooks/useCustomMove";
import {getOne} from "../../api/productsApi";
import useCustomCart from "../../hooks/useCustomCart";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
    pno:0,
    pname:'',
    pdesc:'',
    price:0 ,
    uploadedFileNames:[] // DB에 저장되어 있는 파일 이름
}

const host = API_SERVER_HOST

function ReadComponent({pno}) {

    const [product,setProduct] = useState(initState)
    //fetching
    const [fetching,setFetching] = useState(false)
    // 화면 이동 용 함수
    const {moveToList, moveToModify, page, size} = useCustomMove()

    const {loginState} = useCustomLogin()

    //현재 사용자의 장바구니 아이템들
    const {cartItems, changeCart} = useCustomCart()

    useEffect(() => {

        setFetching(true)

        getOne(pno).then(data => {
            console.log("123123123123123213123123123213")
            console.log(data)
            setProduct(data)
            setFetching(false)
        })
    }, [pno])

    const handleClickAddCart = () => {
        let qty = 1

       const addedItem = cartItems.filter(item => item.pno === parseInt(pno))[0]

        if(addedItem){
            if(window.confirm('이미 추가된 상품입니다. 추가하시겠습니까?') === false){
                return
            }
            qty = addedItem.qty + 1
        }

        changeCart({email:loginState.email, qty:qty, pno:parseInt(pno)})

    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {fetching ? <FetchingModal/> : <></>}
            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">PNO</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{product.pno}</div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">PNAME</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{product.pname}</div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">PRICE</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{product.price}</div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">PDESC</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{product.pdesc}</div>
                </div>
            </div>
            <div className="w-full justify-center flex flex-col m-auto items-center">
                {product.uploadedFileNames && product.uploadedFileNames.length > 0 ? (
                    product.uploadedFileNames.map((imgFile, i) => (
                        <img alt={product.pname || 'Product Image'}
                             key={i}
                             className="p-4 w-1/2"
                             src={`${host}/api/products/view/${imgFile}`}/>
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
            <div className="flex justify-end p-4">
                <button type="button"
                        className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-green-500"
                        onClick={handleClickAddCart}
                >
                    Add Cart
                </button>
                <button type="button"
                        className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                        onClick={() => moveToModify(pno)}
                >
                    Modify
                </button>
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                        onClick={() => moveToList({page, size})}>
                    List
                </button>
                {/*

                    배열로 보내는 것과 객체로 보내는 것의 차이
                    {page, size}를 배열로 바꿀 수도 있지만,
                    이를 수행할 경우 함수(moveToList) 내부에서 해당 값을 다루는 방식이 달라져야 합니다.
                    예를 들어, 배열로 바꾸면 인덱스에 기반해 값을 가져와야 합니다.

                     JSX는 HTML과 유사한 문법을 자바스크립트 코드 안에서
                     사용할 수 있게 해주는 자바스크립트의 확장 문법입니다.

                */}
            </div>
        </div>
    );

}

export default ReadComponent;