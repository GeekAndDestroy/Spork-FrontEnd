import { UserType } from "../types";
import PageHeader from "../Components/PageHeader";
import ActivityCard from "../Components/ActivityCard";
import Chart from "../Components/Chart";



type HomeProps = { currentUser: UserType };

export default function Home({ currentUser }: HomeProps) {




    return (
        <div className="col-span-4 lg:col-span-8 p-4">
            <PageHeader  currentUser={currentUser}/>
            <div className="divider"></div>
            <div className="w-full items-center justify-between">
                <div className="w-full p-2">
                    <h3 className="text-lg font-semibold">
                        Today's Activity Log
                    </h3>
                </div>
                <div className="flex flex-wrap md:flex-nowrap w-full gap-2 p-2 md:overflow-y-auto">
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <div className="flex h-28 md:h-48 w-28 md:min-w-48  p-4 items-center justify-items-center">
                        <a
                            className="btn  text-base m-auto"
                            href="./activitylog"
                        >
                            See More
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full items-center justify-between mt-8">
                <div className="w-full p-2">
                    <h3 className="text-lg font-semibold">
                        Energy Consumption
                    </h3>
                </div>
                <div className="grid grid-cols-5 w-full gap-4 p-2">
                    <div className="col-span-5 md:col-span-3 gap-4">
                        <div className="col-span-5 md:col-span-3 border-2 border-gray-300 rounded-lg bg-sky-50 h-96">
                            <Chart />
                        </div>
                        <div className="flex justify-between w-full gap-4 col-span-5 md:col-span-3 mt-4">
                            <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                                <p className="font-medium text-nowrap">Activities</p>
                                <p className="text-3xl font-medium w-full text-right">5</p>
                            </div>
                            <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                                <p className="font-medium text-nowrap">Spoons Used</p>
                                <p className="text-3xl font-medium w-full text-right">10</p>
                            </div>
                            <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                                <p className="font-medium text-nowrap">Flare Ups</p>
                                <p className="text-3xl font-medium w-full text-right">1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-2">
                        <div className="border-2 border-gray-300 rounded-lg p-2 bg-sky-50 h-full">
                            Goals
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
