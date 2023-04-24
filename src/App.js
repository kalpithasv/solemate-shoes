import nike  from "../src/assets/img/nike.png";
function Landing() {
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="p-24">
          <button className="text-white bg-[#54c0eb] border-black rounded-full px-5 py-1 ">
            <b>EXPLORE VARIETIES OF SHOES HERE 👟</b>
          </button>
          <div className="text-5xl text-black font-bold py-8">
            SOULMATE OF<br />
            SHOES
            <br />
          </div>
          <div className="text-black text-md">
            <span className="leading-8">
            Step up your style with our shoe website app. 
            </span>
            <br />
            <span className="leading-8">
            Discover the latest trends and find your perfect pair with ease.
              <br />
            </span>
            <span className="leading-8"></span>
          </div>
          <div className="py-6">
            <div className="text-[white]-400 py-4 w-full rounded-full bg-[#54c0eb] flex items-center justify-between px-7">
              <input
                className="text-lg bg-transparent focus:outline-none "
                placeholder="Enter your email address"
              />
              <button className="bg-[black] px-2 py-3 rounded-full text-white">
                Get Access
              </button>
              <div className="absolute right-5 -z-10 px-10 py-5">
                 <img src={nike} alt="nike style={{position:'relative', left:'100px', top:'100px' }}" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
