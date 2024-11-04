import React from "react";

function  Cards({item}) {
    console.log(item)
  return (
    <div>
      
      <>
        <div className="my-3 mt-4">
        <div className="duration-200 shadow-xl card w-92 bg-base-100 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">

            <figure>
              <img
                src={item.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
              </h2>
              <p>{item.title}</p>
              <div className="justify-between card-actions">
                <div className="badge badge-outline">${item.price}</div>
                <div className="px-2 py-1 duration-200 border-[2px] cursor-pointer rounded-lg border- hover:bg-pink-500 hover:text-white">Buy Now</div>
              </div>
            </div>
          </div>
        </div>
      </>
      
    </div>
  );
}

export default Cards;
