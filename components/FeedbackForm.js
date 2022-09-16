import React from 'react'

const FeedbackForm = () => {
    return (
        <>
            {/* feedback form */}
            <div className="mt-10">
                <div>
                    <h1 className="text-3xl font-[400] text-primaryDark">
                        Feedback Form
                    </h1>
                    <p className="text-primaryDark opacity-80">
                        We would love to hear your thought, suggestions, concerns or
                        problems with anything so we can improve!
                    </p>
                </div>
                <form className="mt-10 space-y-10">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col space-y-1">
                            <label className="text-primaryDark opacity-95">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter First Name"
                                className="border px-4 py-2 rounded-md w-full text-primaryDark"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="text-primaryDark opacity-95">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Last Name"
                                className="border px-4 py-2 rounded-md w-full text-primaryDark"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="text-primaryDark opacity-95">Email</label>
                            <input
                                type="text"
                                placeholder="Enter Email Address"
                                className="border px-4 py-2 rounded-md w-full text-primaryDark"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="text-primaryDark opacity-95">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Phone Number"
                                className="border px-4 py-2 rounded-md w-full text-primaryDark"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label className="text-primaryDark opacity-95">
                            Describe Your Feedback
                        </label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            placeholder=""
                            className="border px-4 py-2 rounded-md w-full text-primaryDark"
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Submit Feedback"
                            className="px-10 py-2 rounded-md bg-primary text-primaryDark cursor-pointer"
                        />
                    </div>
                </form>
            </div>
            {/* feedback form end */}
        </>
    )
}

export default FeedbackForm