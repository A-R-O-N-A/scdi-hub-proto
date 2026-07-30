import { Head } from "@inertiajs/react";
import { Card } from "@/components/ui/card";
import BarPlot from "@/components/data-vis/generics/BarPlot";
import PieChart from "@/components/data-vis/generics/PieChart";

import tourismAccomodation from "@/pages/sector-datasets/tourism/Accomodation.xlsx.json";
import tourismAttractions from "@/pages/sector-datasets/tourism/Attraction_visits.xlsx.json";
import tourismLocalBusinesses from "@/pages/sector-datasets/tourism/local_business_spending.xlsx.json";
import touristInformation from "@/pages/sector-datasets/tourism/tourist_info.xlsx.json";
import tourismTransport from "@/pages/sector-datasets/tourism/transportation.xlsx.json";

export default function Tourism() {
    return (
        <>
            <Head title="Tourism" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-7">
                        <BarPlot
                            dataset={tourismAccomodation}
                            labelField={"Hotel"}
                            valueField={"Rate per Night"}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-5">
                        <PieChart
                            dataset={tourismAccomodation}
                            firstValueField={"Rooms Available"}
                            secondValueField={"Rooms Occupied"}
                            title="Rooms Available vs Occupied"
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={tourismAttractions}
                            labelField={"Attraction"}
                            valueField={"Entrance Fee"}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={tourismLocalBusinesses}
                            labelField={"Payment Method"}
                            valueField={"Amount"}
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={touristInformation}
                            labelField={"Purpose of Visit"}
                            valueField={"Estimated Spending"}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={tourismTransport}
                            labelField={"Transport Used"}
                            valueField={"Fare"}
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-6 xl:col-span-12">
                        <h3 className="text-lg font-semibold">AI Text Interpretation of Data</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Card>

                    {/* <Card className="p-6 xl:col-span-7 min-h-44">
            <h3 className="text-lg font-semibold">AI Deep Interpretation (Reserved Space)</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This section is intentionally left with extra vertical space for future generated insights.
            </p>
          </Card> */}
                </div>
            </div>
        </>
    );
}