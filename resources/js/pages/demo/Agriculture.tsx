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
                            1. Barangay to Yield (in Kilos)
                            Data source: agriHarvest.xlsx
                            Bantug: 200 kg
                            Bagong Sikat: 300 kg
                            Bukang Liwayway: 100 kg
                            Summary: Bagong Sikat recorded the highest yield, followed by Bantug and Bukang Liwayway.
                            2. Barangay to Hectares
                            Data source: agriHarvest.xlsx
                            Bantug: 2 Hectares
                            Bagong Sikat: 5 Hectares
                            Bukang Liwayway: 1 Hectares
                            Summary: Bagong Sikat has the largest agricultural land area (5 ha), accounting for 62.5% of the total land area (8 ha) across these three barangays.
                            3. Fertilizer Type to Amount (kg)
                            Data source: agriFertilizerUsage.xlsx
                            Organic Compost: 80 kg
                            Urea: 50 kg
                            14-14-14: 30 kg
                            Summary: Organic Compost was the most heavily used fertilizer by weight, representing 50% of the total 160 kg used across the recorded applications.
                            4. Fertilizer Type to Harvest Yield (kg)
                            Data source: agriFertilizerUsage.xlsx
                            Organic Compost (used on Onions): 7,100 kg yield
                            Urea (used on Rice): 3,200 kg yield
                            14-14-14 (used on Corn): 1,800 kg yield
                            Summary: The application of Organic Compost resulted in the highest total yield, significantly outperforming the chemical fertilizers (Urea and 14-14-14) in this specific dataset.
                            5. Pest/Disease to Crop Loss (%)
                            Data source: agriPestDisease.xlsx
                            Downy Mildew (Onion): 20% loss
                            Rice Bug (Rice): 8% loss
                            Armyworm (Corn): 5% loss
                            Summary: Downy Mildew caused the most significant impact on harvest with a 20% crop loss, which correlates with it being categorized as "Severe" in the data.
                        </p>
                        {/* <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p> */}
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