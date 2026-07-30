import BarPlot from "@/components/data-vis/generics/BarPlot";
import PieChartV2 from "@/components/data-vis/generics/PieChartV2";
import { Card } from "@/components/ui/card";
import { Head } from "@inertiajs/react";

import healthBarangay from "@/pages/sector-datasets/health/barangay_info.xlsx.json";
import healthDisease from "@/pages/sector-datasets/health/barangay_disease.xlsx.json";
import healthVacc from "@/pages/sector-datasets/health/barangay_vacc.xlsx.json";
import healthClinicWorkers from "@/pages/sector-datasets/health/clinic_workforce.xlsx.json";

export default function Health() {
    return (
        <>
            <Head title="Health" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <PieChartV2
                            dataset={healthClinicWorkers}
                            rowMatchField="Clinic  ID"
                            rowMatchValue="CW001"
                            valueFields={["Doctors", "Nurses", "Midwives", "Bed capacity"]}
                            title="Fernandez Health Workforce Mix"
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <PieChartV2
                            dataset={healthClinicWorkers}
                            rowMatchField="Clinic  ID"
                            rowMatchValue="CW002"
                            valueFields={["Doctors", "Nurses", "Midwives", "Bed capacity"]}
                            title="Health General Workforce Mix"
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot dataset={healthDisease} labelField={"Barangay"} valueField={"Cases"} />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <BarPlot dataset={healthVacc} labelField={"Barangay"} valueField={"Administered Doses"} />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot dataset={healthVacc} labelField={"Vaccine Type"} valueField={"Administered Doses"} />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <BarPlot dataset={healthBarangay} labelField={"Name"} valueField={"Clinic count"} />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-8">
                        <BarPlot dataset={healthClinicWorkers} labelField={"Clinic"} valueField={"Bed capacity"} />
                    </Card>

                    <Card className="p-6 xl:col-span-12">
                        <h3 className="text-lg font-semibold">AI Text Interpretation of Data</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            1. Barangay to Cases
                            Data source: barangay_disease.xlsx
                            Bantug: 6 cases (Disease: Dengue)
                            Bagong Sikat: 12 cases (Disease: Influenza)
                            Summary: Bagong Sikat has double the recorded cases compared to Bantug.
                            2. Barangay to Administered Doses
                            Data source: barangay_vacc.xlsx
                            Bantug: 5,000 doses administered (Population: 6,500; ~77% coverage).
                            Bagong Sikat: 4,000 doses administered (Population: 4,500; ~89% coverage).
                            Summary: While Bantug has more total doses administered, Bagong Sikat has a higher vaccination-to-population coverage rate.
                            3. Vaccine Type to Administered Doses
                            Data source: barangay_vacc.xlsx
                            Dengue Vaccine: 5,000 doses (Administered in Bantug).
                            Measles Vaccine: 4,000 doses (Administered in Bagong Sikat).
                            Summary: The Dengue vaccine accounts for 55.6% of the total 9,000 doses administered across these two barangays.
                            4. Barangay Name to Clinic Count
                            Data source: barangay_info.xlsx
                            Bantug: 5 Clinics.
                            Bagong Sikat: 3 Clinics.
                            Summary: Bantug has a higher density of clinics despite having a lower patient count (150) compared to Bagong Sikat (200).
                            5. Clinic to Bed Capacity
                            Data source: clinic_workforce.xlsx
                            Fernandez Health (Bagong Sikat): 12 beds.
                            Health General (Bantug): 8 beds.
                            Summary: Fernandez Health has a 50% higher bed capacity than Health General. Notably, the clinic with higher bed capacity (Fernandez Health) is located in the barangay with the higher patient count (Bagong Sikat).
                        </p>
                        {/* <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p> */}
                    </Card>
                </div>

                {/* <Card className="min-h-44 p-6">
                    <h3 className="text-lg font-semibold">AI Deep Interpretation (Reserved Space)</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. This section is intentionally left with extra vertical space for future generated
                        insights.
                    </p>
                </Card> */}
            </div>
        </>
    );
}