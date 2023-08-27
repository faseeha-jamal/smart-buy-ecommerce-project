import React, { useContext } from "react";
import { create } from "../Appprovider";

export default function Cart() {
  const val = useContext(create);
  console.log(val);
  const { cart,removeCart } = val;
  // console.log(cart);

  return (
    <div>
      {cart.map((obj) => (
        <div className="w-[70%] mx-auto">
          <div className="flex mt-10 border border-black[100] justify-around ">
            <img
              src={obj.thumbnail}
              className="w-[250px] h-[200px] m-8 border border-black-[100]"
              alt=""
            />
            <div className="w-[600px]">
              <p className="text-gray-400 capitalize">category-{obj.category}</p>
              <h1 className="text-3xl font-serif m-3 "> {obj.title} </h1>
              <p className="text-2xl mt-8">
                ${obj.price}{" "}
                <span className="text-slate-600 text-lg m-2">
                  <strike>
                    ${(obj.price * obj.discountPercentage) / 100 + obj.price}
                  </strike>
                </span>{" "}
                <span className=" text-cyan-500 text-base">
                  {obj.discountPercentage}% off
                </span>
              </p>
              <h1 className="capitalize text-xl mt-5">product details:</h1>
              <p className="text-gray-400">{obj.description} </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-8 h-8 text-cyan-500 mt-8"
              onClick={()=>removeCart(obj.id)}
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
