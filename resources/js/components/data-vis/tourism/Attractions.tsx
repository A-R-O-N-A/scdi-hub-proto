import Plot from 'react-plotly.js'

export default function Attractions ({tourismAttractions}: {tourismAttractions: any}) {

    console.log('dataset passed onto Attractions component : ', tourismAttractions)

    if (!tourismAttractions || !tourismAttractions.data) { return <p> Loading . . .  </p> }

    const labels = tourismAttractions.data.map((item) => item['Attraction'])
    const values = tourismAttractions.data.map((item) => item['Entrance Fee']) || 0

    return (<>

        <div>
            <h3> Attractions and Entrance Fee</h3>

            <Plot
                data={[
                    {
                        type : 'bar',
                        x : labels,
                        y: values,
                    },
                ]}

                layout={{
                    title: 'Entrance Fee by Attraction',
                    xaxis: { title : 'Attraction' },
                    yaxis: { title : 'Entrance Fee' },
                }}
                config={{ displayModeBar: false }}
                style={{ width: '800px', height: '800px' }}
            />

        </div>

    </>)
}