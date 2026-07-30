import { Card } from "@/components/ui/card";
import { Head } from "@inertiajs/react";
import BarPlot from "@/components/data-vis/generics/BarPlot";

import businessInvestmentProjects from "@/pages/sector-datasets/business/businessInvestmentProjects.xlsx.json";
import businessRegistry from "@/pages/sector-datasets/business/businessRegistry.xlsx.json";
import businessCommercialArea from "@/pages/sector-datasets/business/commercialAreaProfile.xlsx.json";

export default function Business() {
  return (
    <>
      <Head title="Business" />

      <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          <Card className="p-4 xl:col-span-6">
            <BarPlot
              dataset={businessInvestmentProjects}
              labelField={"Barangay"}
              valueField={"Investment Amount"}
            />
          </Card>

          <Card className="p-4 xl:col-span-6">
            <BarPlot
              dataset={businessInvestmentProjects}
              labelField={"Industry"}
              valueField={"Investment Amount"}
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          <Card className="p-4 xl:col-span-6">
            <BarPlot
              dataset={businessRegistry}
              labelField={"Barangay"}
              valueField={"Employees"}
            />
          </Card>

          <Card className="p-4 xl:col-span-6">
            <BarPlot
              dataset={businessRegistry}
              labelField={"Industry"}
              valueField={"Employees"}
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          <Card className="p-4 xl:col-span-8">
            <BarPlot
              dataset={businessCommercialArea}
              labelField={"Barangay"}
              valueField={"Investment Amount"}
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

        {/* <Card className="min-h- */}
      </div>
    </>
  );
}