// import plus_math from "../assets/icons/plus_math.svg";
import spoon from "../assets/icons/spoon.svg";
import plus from "../assets/icons/plus.svg";
import caret_down from "../assets/icons/caret_down.svg";

type PageHeaderProps = {};

export default function PageHeader({}: PageHeaderProps) {
    return (
        <div className="flex w-full items-center justify-between h-20">
            <div className="w-1/2 p-2">
                <h1 className="text-2xl font-bold">Good Morning, 000000</h1>
            </div>
            <div className="flex items-center">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 bg-info text-white text-base"
                    >
                        <img src={plus} />{" "}
                        <p className="ml-2 hidden md:block">Log</p>{" "}
                        <img src={caret_down} className="hidden md:block" />
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-black z-[1] w-full min-w-min shadow"
                    >
                        <li>
                            {/* Log Activity Button */}

                            <button
                                className="btn bg-black text-white hover:text-black border-transparent"
                                onClick={() =>
                                    (
                                        document.getElementById(
                                            "logActivity_modal"
                                        ) as HTMLDialogElement
                                    )?.showModal()
                                }
                            >
                                Activity
                            </button>
                        </li>
                        <li>
                            {/* Log Flare Up Button */}

                            <button
                                className="btn bg-black text-white hover:text-black border-transparent"
                                onClick={() =>
                                    (
                                        document.getElementById(
                                            "logFlareUp_modal"
                                        ) as HTMLDialogElement
                                    )?.showModal()
                                }
                            >
                                Flare Up
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Change Spoons Button */}

                <button
                    className="btn btn-ghost text-base"
                    onClick={() =>
                        (
                            document.getElementById(
                                "changeSpoons_modal"
                            ) as HTMLDialogElement
                        )?.showModal()
                    }
                >
                    <img src={spoon} className="ml-6"></img>
                    <p className="mr-6">x2</p>
                </button>

                {/* Log Activity Modal */}

                <dialog id="logActivity_modal" className="modal">
                    <div className="modal-box max-w-[750px] w-full md:w-3/4">
                        <h3 className="font-bold text-lg">Log Activity</h3>
                        <input
                            type="text"
                            placeholder="Spend Spoons"
                            className="input input-bordered w-full my-4 bg-sky-50"
                        />
                        <p className="text-medium my-4">
                            How many spoons did you consume?
                        </p>
                        <ul className="flex w-full justify-around gap-1">
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_1"
                                    name="spoons_used"
                                    value="spoons_1"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_1"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            1
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_2"
                                    name="spoons_used"
                                    value="spoons_2"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_2"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            2
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_3"
                                    name="spoons_used"
                                    value="spoons_3"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_3"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            3
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_4"
                                    name="spoons_used"
                                    value="spoons_4"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_4"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            4
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_5"
                                    name="spoons_used"
                                    value="spoons_5"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_5"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            5
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_6"
                                    name="spoons_used"
                                    value="spoons_6"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_6"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            6
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_7"
                                    name="spoons_used"
                                    value="spoons_7"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_7"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            7
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_8"
                                    name="spoons_used"
                                    value="spoons_8"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_8"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            8
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_9"
                                    name="spoons_used"
                                    value="spoons_9"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_9"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            9
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_10"
                                    name="spoons_used"
                                    value="spoons_10"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_10"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            10
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_11"
                                    name="spoons_used"
                                    value="spoons_11"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_11"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center ">
                                        <p className="w-full text-base font-semibold p-auto text-center">
                                            11
                                        </p>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="spoons_12"
                                    name="spoons_used"
                                    value="spoons_12"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="spoons_12"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold">
                                            12
                                        </div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                        <p className="text-medium my-4">
                            How long did it take? (aprox.)
                        </p>
                        <ul className="flex flex-wrap  w-full justify-around gap-4">
                            <li>
                                <input
                                    type="radio"
                                    id="15min"
                                    name="activity_length"
                                    value="15min"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="15min"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            15 mins
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="30min"
                                    name="activity_length"
                                    value="30min"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="30min"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            30 mins
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="45min"
                                    name="activity_length"
                                    value="45min"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="45min"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            45 mins
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="1hr"
                                    name="activity_length"
                                    value="1hr"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="1hr"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            1 hr
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="1hr+"
                                    name="activity_length"
                                    value="1hr+"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="1hr+"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            1 hr+
                                        </div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                        <p className="text-medium my-4">What time of day?</p>
                        <ul className="flex flex-wrap w-full justify-around gap-4">
                            <li>
                                <input
                                    type="radio"
                                    id="EM"
                                    name="activity_time"
                                    value="EM"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="EM"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            Early Morning
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="M"
                                    name="activity_time"
                                    value="M"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="M"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            Morning
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="A"
                                    name="activity_time"
                                    value="A"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="A"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            Afternoon
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="E"
                                    name="activity_time"
                                    value="E"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="E"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            Evening
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="LE"
                                    name="activity_time"
                                    value="LE"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="LE"
                                    className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-full text-base font-semibold mx-4 my-2">
                                            Late Evening
                                        </div>
                                    </div>
                                </label>
                            </li>
                        </ul>

                        <p className="text-medium my-4">How did it go?</p>
                        <textarea
                            className="textarea textarea-bordered w-full min-h-18"
                            placeholder="Add any extra details you would like to remember about this activity."
                        ></textarea>

                        <div className="w-full">
                            <div className="modal-action mt-4">
                                <form
                                    method="dialog"
                                    className="flex w-full justify-between  pt-18"
                                >
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn mx-2 ">
                                        Cancel
                                    </button>
                                    <button className="btn mx-2 bg-info text-white">
                                        Save Activity
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>

                {/* Log Flare Up */}

                <dialog id="logFlareUp_modal" className="modal">
                    <div className="modal-box max-w-[750px] w-full md:w-3/4">
                        <h3 className="font-bold text-lg">Log Flare Up</h3>

                        <p className="text-medium my-4">
                            Please describe what you are experiencing (optional)
                        </p>
                        <textarea
                            className="textarea textarea-bordered w-full min-h-36"
                            placeholder="Add any extra details you would like to remember about this."
                        ></textarea>

                        {/* <div className="flex gap-2 m-2">
                            <div className="flex w-1/2 border-2 rounded-lg p-2 bg-sky-50">
                                <div>Spoons</div>
                                <div
                                    className="radial-progress"
                                    style={{
                                        "--value": "70",
                                        "--size": "8rem",
                                        "--thickness": "1rem",
                                    }}
                                    role="progressbar"
                                >
                                    70%
                                </div>
                            </div>
                            <div className="w-1/2 border-2 rounded-lg p-2 bg-sky-50">
                                Activity
                            </div>
                        </div> */}

                        <div className="w-full">
                            <div className="modal-action mt-4">
                                <form
                                    method="dialog"
                                    className="flex w-full justify-between  pt-18"
                                >
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn mx-2">Cancel</button>
                                    <button className="btn mx-2 bg-info text-white">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>

                {/* Change Spoons Modal */}

                <dialog id="changeSpoons_modal" className="modal">
                    <div className="modal-box max-w-[750px] w-full md:w-3/4">
                        <h3 className="font-bold text-lg">Daily Spoons</h3>

                        <div className="flex gap-2 m-2">
                            <div className="flex w-1/2 border-2 rounded-lg p-2 bg-sky-50">
                                <span className="w-full">Spoons</span>
                                {/* <div
                                    className="radial-progress"
                                    style={{
                                        "--value": "70",
                                        "--size": "8rem",
                                        "--thickness": "1rem",
                                    }}
                                    role="progressbar"
                                >
                                    70%
                                </div> */}
                                <div className="relative w-40 h-40">
                                    <svg
                                        className="w-full h-full"
                                        viewBox="0 0 100 100"
                                    >
                                        {/* <!-- Background circle --> */}
                                        <circle
                                            className="text-gray-200 stroke-current"
                                            stroke-width="10"
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="transparent"
                                        ></circle>
                                        {/* <!-- Progress circle --> */}
                                        <circle
                                            className="text-info  progress-ring__circle stroke-current"
                                            stroke-width="10"
                                            stroke-linecap="round"
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="transparent"
                                            stroke-dasharray="251.2"
                                            stroke-dashoffset="calc(251.2px - (251.2px * 70) / 100)"
                                        ></circle>

                                        {/* <!-- Center text --> */}
                                        <text
                                            x="50"
                                            y="50"
                                            font-family="Verdana"
                                            font-size="12"
                                            text-anchor="middle"
                                            alignment-baseline="middle"
                                        >
                                            70%
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-1/2 border-2 rounded-lg p-2 bg-sky-50">
                                Activity
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="modal-action mt-4">
                                <form
                                    method="dialog"
                                    className="flex w-full justify-between  pt-18"
                                >
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn mx-2">Cancel</button>
                                    <button className="btn mx-2 bg-info text-white">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
}
