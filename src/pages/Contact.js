import React from 'react'
const Contact = () => {
  const handleFormSubmit = (e) => {
    console.log("Form submitted Successfully");
    }
  return (
    <>
      <div className="my-12 w-full flex gap-4 flex-col items-center justify-center">
        <h1 className="text-black font-semibold text-4xl">
        THE FIX FOR YOUR PARKING  PROBLEMS.
        </h1>
        <p className="text-black">
        Your Parking Woes End Here with our app. Any queries contact us :
        </p>
      </div>
      <div className="flex items-center justify-center mb-12">
        <div className="bg-[#ffff] rounded-xl px-6 py-8">
          <form onSubmit={handleFormSubmit}>
            <div className="flex gap-6 mb-6">
              <input
                className="w-full bg-[#3F454D] focus:outline-none rounded-lg text-[#fff] placeholder-[#9FA8B8] px-4 py-3"
                type={"text"}
                value={
                  localStorage.user_id
                    ? JSON.parse(localStorage.user_id)["name"]
                    : ""
                }
                name="name"
                placeholder="Name"
              />
              <input
                className="w-full bg-[#3F454D] focus:outline-none rounded-lg text-[#fff] placeholder-[#9FA8B8] px-4 py-3"
                type={"email"}
                value={
                  localStorage.user_id
                    ? JSON.parse(localStorage.user_id)["email"]
                    : ""
                }
                name="email"
                placeholder="Email address"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full bg-[#3F454D] focus:outline-none rounded-lg text-[#fff] placeholder-[#9FA8B8] px-4 py-3"
                type={"text"}
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="w-full bg-[#3F454D] focus:outline-none rounded-lg text-[#fff] placeholder-[#9FA8B8] px-4 py-3 resize-none"
                rows={4}
                name="message"
                placeholder="Message"
              />
            </div>
            <div className="flex gap-6 mb-6 items-center w-full justify-between">
              <button
                type="submit"
                className="text-white px-10 py-3 rounded-full bg-[#4B829D]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
       </div>
    </>
  );
};
export default Contact;
