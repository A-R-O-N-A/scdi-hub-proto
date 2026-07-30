import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// directtly accessing tourism json files
import tourismAccomodation from '@/pages/sector-datasets/tourism/Accomodation.xlsx.json';
import tourismAttractions from '@/pages/sector-datasets/tourism/Attraction_visits.xlsx.json'
import tourismLocalBusinesses from '@/pages/sector-datasets/tourism/local_business_spending.xlsx.json'
import touristInformation from '@/pages/sector-datasets/tourism/tourist_info.xlsx.json'
import tourismTransport from '@/pages/sector-datasets/tourism/transportation.xlsx.json'

import BarPlot from '@/components/data-vis/generics/BarPlot'
import PieChart from '@/components/data-vis/generics/PieChart'

const INGEST_URL = 'http://127.0.0.1:8080/ingest/tabular';

type TourismDataset = {
    filename: string;
    row_count: number;
    columns: string[];
    column_types: Record<string, string>;
    data: Array<Record<string, string | number>>;
};

export default function Tourism() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [responseJson, setResponseJson] = useState<TourismDataset | null>(
        tourismAccomodation as TourismDataset
    );

    function handleDownloadJson(filename = 'ingested-data') {
        if (!responseJson) return;

        const jsonString = JSON.stringify(responseJson, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    }

    async function handleUpload() {
        setError(null);
        setResponseJson(null);

        if (!file) {
            setError('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoading(true);

            const res = await fetch(INGEST_URL, {
                method: 'POST',
                body: formData,
            });

            const data = (await res.json()) as TourismDataset;

            if (!res.ok) {
                throw new Error(data?.detail || 'Upload failed.');
            }

            setResponseJson(data);

            console.log('json response:', data.filename);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Head title='Tourism' />

            <div className='flex h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <Card>
                    {/* <CardHeader>
                        <CardTitle>Tourism Dataset Upload</CardTitle>
                        <CardDescription>Upload CSV or XLSX to FastAPI.</CardDescription>
                    </CardHeader>

                    <CardContent className='space-y-4'>
                        <div className='space-y-2'>
                            <Label htmlFor='tourism-file'>Choose file</Label>
                            <Input
                                id='tourism-file'
                                type='file'
                                accept='.csv,.xlsx'
                                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                            />
                            <p className='text-sm text-muted-foreground'>
                                Accepted formats: CSV and XLSX
                            </p>
                        </div>

                        <Button type='button' onClick={handleUpload} disabled={loading || !file}>
                            {loading ? 'Uploading...' : 'Upload'}
                        </Button>

                        {error ? <p className='text-sm text-destructive'>{error}</p> : null}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>JSON Response</CardTitle>
                        <CardDescription>Response from FastAPI.</CardDescription>
                    </CardHeader>

                    <CardContent className='space-y-3'>
                        <p className='text-sm text-muted-foreground'>
                            Loaded rows: {responseJson?.data?.length ?? 0}
                        </p>

                        <pre className='max-h-96 overflow-auto rounded-md border bg-muted p-4 text-xs'>
                            {responseJson ? JSON.stringify(responseJson, null, 2) : 'No response yet'}
                        </pre>
                    </CardContent>

                    <div className='flex gap-2 p-4 pt-0'>
                        <Button
                            type='button'
                            variant='outline'
                            onClick={() => handleDownloadJson(responseJson?.filename ?? 'ingested-data')}
                            disabled={!responseJson}
                        >
                            Download JSON
                        </Button>
                    </div> */}

                    {/* test the visualizatiosn below  below are for tourism */}

                    <BarPlot
                        dataset={tourismAccomodation}
                        labelField={'Hotel'}
                        valueField={'Rate per Night'}
                    />

                    <PieChart
                        dataset={tourismAccomodation}
                        firstValueField={'Rooms Available'}
                        secondValueField={'Rooms Occupied'}
                    />

                    <BarPlot
                        dataset={tourismAttractions}
                        labelField={'Attraction'}
                        valueField={'Entrance Fee'}
                    />

                    <BarPlot
                        dataset={tourismLocalBusinesses}
                        labelField={'Payment Method'}
                        valueField={'Amount'}
                    />

                    <BarPlot
                        dataset={touristInformation}
                        labelField={'Purpose of Visit'}
                        valueField={'Estimated Spending'}
                    />

                    <BarPlot
                        dataset={tourismTransport}
                        labelField={'Transport Used'}
                        valueField={'Fare'}
                    />

                </Card>
            </div>
        </>
    );
}