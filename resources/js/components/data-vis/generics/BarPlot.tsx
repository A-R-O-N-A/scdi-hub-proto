import Plot from 'react-plotly.js'

export default function BarPlot({ dataset, labelField,  valueField}) {

    if (!dataset || !dataset.data) {
        return <p>Loading . . . </p>
    }

    const labels = dataset.data.map((item) => item[labelField])
    const values = dataset.data.map((item) => Number(item[valueField] ?? 0)) 

    return (<div>

        <h3>{valueField} by {labelField}</h3>

        <Plot
            data={[
                {
                    type : 'bar',
                    x : labels,
                    y: values,
                    marker: { color: '#FFA15A' }
                },
            ]}

            layout={{
                title : `${valueField} by ${labelField}`,
                xaxis : {title: labelField},
                yaxis : {title: valueField},
            }}

          style={{ width: '100%', height: '500px' }}
        />
    
    </div>)
}