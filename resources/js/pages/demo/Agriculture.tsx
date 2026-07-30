import { Card } from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import BarPlot from "@/components/data-vis/generics/BarPlot";

import agriCropRef from "@/pages/sector-datasets/agriculture/agriCropReference.xlsx.json";
import agriFertilizerUsage from "@/pages/sector-datasets/agriculture/agriFertilizerUsage.xlsx.json";
import agriHarvest from "@/pages/sector-datasets/agriculture/agriHarvest.xlsx.json";
import agriPestDisease from "@/pages/sector-datasets/agriculture/agriPestDisease.xlsx.json";

export default function Agriculture() {
    return (
        <>
            <Head title="Agriculture" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={agriHarvest}
                            labelField={"Barangay"}
                            valueField={"Yield kilos"}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={agriHarvest}
                            labelField={"Barangay"}
                            valueField={"Hectares"}
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={agriFertilizerUsage}
                            labelField={"Fertilizer Type"}
                            valueField={"Fertilizer amount (kg)"}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={agriFertilizerUsage}
                            labelField={"Fertilizer Type"}
                            valueField={"Harvest Yield (kg)"}
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-8">
                        <BarPlot
                            dataset={agriPestDisease}
                            labelField={"Pest/Disease"}
                            valueField={"Crop Loss (%)"}
                        />
                    </Card>

                    <Card className="p-6 xl:col-span-12">       
                    <h3 className="text-lg font-semibold">AI Text Interpretation of Data</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </Card>
                </div>

                {/* <Card className="min-h-44 p-6">
                    <h3 className="text-lg font-semibold">AI Deep Interpretation (Reserved Space)</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. This section is
                        intentionally left with extra vertical space for future generated insights.
                    </p>
                </Card> */}
            </div>
        </>
    );
}