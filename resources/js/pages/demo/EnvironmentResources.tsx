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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
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