import { Card } from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import BarPlot from "@/components/data-vis/generics/BarPlot";
import PieChartV2 from "@/components/data-vis/generics/PieChartV2";
import LineGraph from '@/components/data-vis/generics/LineGraph'

import employeeInfo from "@/pages/sector-datasets/employment/employeeInfo.xlsx.json";
import employmentIndustry from "@/pages/sector-datasets/employment/employmentIndustry.xlsx.json";
import employmentJobSeeker from "@/pages/sector-datasets/employment/employmentJobSeeker.xlsx.json";
import employmentJobVacancy from "@/pages/sector-datasets/employment/employmentVacany.xlsx.json";
import employmentPrograms from "@/pages/sector-datasets/employment/employmentPrograms.xlsx.json";
import employmentIndustryByYear from '@/pages/sector-datasets/employment/employmentIndustryByYear.json'

export default function Employment() {
    return (
        <>
            <Head title="Employment" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">

                    <Card className="p-4 xl:col-span-6">
                        <LineGraph
                            dataset={employmentIndustryByYear}    
                            xField={'Year'}
                            yField={'Female'}
                            categoryField={'Industry Sector'}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-6">
                        <LineGraph
                            dataset={employmentIndustryByYear}    
                            xField={'Year'}
                            yField={'Male'}
                            categoryField={'Industry Sector'}
                        />
                    </Card>

                    {/* <Card className="p-4 xl:col-span-4">
                        <PieChartV2
                            dataset={employmentIndustry}
                            rowMatchField="Industry Sector"
                            rowMatchValue="Agriculture"
                            valueFields={["Male", "Female"]}
                            title="Agriculture Workforce Gender Split"
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-4">
                        <PieChartV2
                            dataset={employmentIndustry}
                            rowMatchField="Industry Sector"
                            rowMatchValue="Agriculture"
                            valueFields={["No. of Employees", "Male", "Female"]}
                            title="Agriculture Employment Composition"
                        />
                    </Card> */}

                    {/* <Card className="p-4 xl:col-span-4">
                        <BarPlot
                            dataset={employmentIndustry}
                            labelField={"Industry Sector"}
                            valueField={"No. of Employees"}
                        />
                    </Card> */}
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    <Card className="p-4 xl:col-span-6">
                        <BarPlot
                            dataset={employmentPrograms}
                            labelField={"Program Name"}
                            valueField={"No. of Participants"}
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-3">
                        <PieChartV2
                            dataset={employmentPrograms}
                            rowMatchField="Program Name"
                            rowMatchValue="Job Readiness Training"
                            valueFields={["No. of Participants", "No. of Employment"]}
                            title="Job Readiness Training"
                        />
                    </Card>

                    <Card className="p-4 xl:col-span-3">
                        <PieChartV2
                            dataset={employmentPrograms}
                            rowMatchField="Program Name"
                            rowMatchValue="Livelihood Skills Training"
                            valueFields={["No. of Participants", "No. of Employment"]}
                            title="Livelihood Skills Training"
                        />
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                    {/* <Card className="p-4 xl:col-span-8">
                        <BarPlot
                            dataset={employmentJobVacancy}
                            labelField={"Company"}
                            valueField={"No. of Vacancies"}
                        />
                    </Card> */}

                    <Card className="p-6 xl:col-span-12">
                        <h3 className="text-lg font-semibold">AI Text Interpretation of Data</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Card>
                </div>

                {/* <Card className="min-h-44 p-6">
                    <h3 className="text-lg font-semibold">AI Deep Interpretation (Reserved Space)</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This section is intentionally left with extra vertical space for future generated insights.
                    </p>
                </Card> */}
            </div>
        </>
    );
}