import React from "react";

export default function CardComponent() {
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    Nike Jordan Shoes
                </h4>
                <p className="mb-2 leading-normal">
                Featuring a panther-paw-like sole and "cat eye" holograph, Michael rode the mid-top shoe all the way to his 6th ring in '98,
                the last triumph of his legendary career. The Air Jordan 13 Retro brings back the stealthy,
                shrouded design with a fresh mix of colours and textures.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}