import { Card } from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import BarPlot from "@/components/data-vis/generics/BarPlot";

import ENRAirQuality from "@/pages/sector-datasets/env-natural-resources/ENRAirQuality.xlsx.json";
import ENRMonitoring from "@/pages/sector-datasets/env-natural-resources/ENRMonitoring.xlsx.json";
import ENRWaterQuality from "@/pages/sector-datasets/env-natural-resources/ENRWaterQuality.xlsx.json";

export default function EnvironmentResources() {
    return (
        <>
            <Head title="Environment and Natural Resources" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Card className="p-5">
                        <p className="text-sm text-muted-foreground">Highest CO Level</p>
                        <p className="mt-2 text-3xl font-bold"> 0.7 </p>
                    </Card>

                    <Card className="p-5">
                        <p className="text-sm text-muted-foreground"> Lowest Air Quality </p>
                        <p className="mt-2 text-3xl font-bold"> 45 </p>
                    </Card>

                    <Card className="p-5">
                        <p className="text-sm text-muted-foreground"> Lowest Water Quality </p>
                        <p className="mt-2 text-3xl font-bold"> 75 </p>
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={ENRAirQuality}
                            labelField={"Barangay"}
                            valueField={"CO Level"}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={ENRWaterQuality}
                            labelField={"Barangay"}
                            valueField={"Water Temperature"}
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={ENRMonitoring}
                            labelField={"Barangay"}
                            valueField={"Air Quality (AQI)"}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={ENRMonitoring}
                            labelField={"Barangay"}
                            valueField={"Water Quality Index"}
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-6 xl:col-span-12">
                        <h3 className="text-lg font-semibold">AI Text Interpretation of Data</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            1. Barangay to CO Level
                            Data source: ENRAirQuality.xlsx
                            Barangay X: 0.5 ppm
                            Barangay Y: 0.7 ppm
                            Summary: Barangay Y shows a 40% higher Carbon Monoxide (CO) level compared to Barangay X.
                            2. Barangay to Water Temperature
                            Data source: ENRWaterQuality.xlsx
                            Barangay X (Baliwag River): 27°C
                            Barangay Z (Local Creeks & Watersheds): 26°C
                            Summary: The water temperature in Barangay X is 1°C higher than in Barangay Z.
                            3. Barangay to Air Quality
                            Data source: ENRMonitoring.xlsx
                            (Measured by Air Quality Index - AQI)
                            Bantug (Record ID EM001): 45 AQI
                            Bagong Sikat (Record ID EM002): 60 AQI
                            Summary: Bagong Sikat has a higher AQI (60) compared to Bantug (45). In standard air quality ratings, lower values are generally better, indicating that Bantug currently has cleaner air than Bagong Sikat.
                            Note on Data Consistency:
                            Please be aware that the ENRAirQuality file refers to "Barangay X" and "Barangay Y," while the ENRMonitoring file refers to "Bantug" and "Bagong Sikat." The comparisons above are grouped by the specific naming conventions used in their respective files.
                        </p>
                        {/* <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p> */}
                    </Card>

                    {/* <Card className="p-6 xl:col-span-7 min-h-44">
                        <h3 className="text-lg font-semibold">AI Deep Interpretation (Reserved Space)</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. This section is
                            intentionally left with extra vertical space for future generated insights.
                        </p>
                    </Card> */}
                </div>
            </div>
        </>
    );
}