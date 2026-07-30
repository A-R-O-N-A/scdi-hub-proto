import Plot from 'react-plotly.js'

export default function LineGraph({
    dataset,
    xField,
    yField,
    categoryField,
    title,
    mode = 'lines+markers',
    height = 500,
}) {
    if (!dataset || !dataset.data) return <p>Loading . . . </p>

    const rows = dataset.data

    const xValues = [
        ...new Set(
            rows
                .map((row) => row?.[xField])
                .filter((v) => v !== null && v !== undefined)
        ),
    ]

    const categories = categoryField
        ? [
            ...new Set(
                rows
                    .map((row) => row?.[categoryField])
                    .filter((v) => v !== null && v !== undefined)
            ),
        ]
        : [null]

    const traces = categories.map((cat) => {
        const mapByX = new Map()

        rows.forEach((row) => {
            if (categoryField && row?.[categoryField] !== cat) return
            const x = row?.[xField]
            const n = Number(row?.[yField])
            mapByX.set(x, Number.isFinite(n) ? n : null)
        })

        return {
            type: 'scatter',
            mode,
            name: categoryField ? String(cat) : yField,
            x: xValues,
            y: xValues.map((x) => mapByX.get(x) ?? null),
            connectgaps: false,
        }
    })

    return (
        <Plot
            data={traces}

            // layout={{
            //     title: title || `${yField} by ${xField}`,
            //     xaxis: { title: xField, type: 'category' },
            //     yaxis: { title: yField },
            //     legend: { orientation: 'h' },
            // }}

            layout={{
                title: { text : title || `${yField} by ${xField}`},
                template: 'plotly_dark',
                xaxis: { title: xField },
                yaxis: { title: yField },
            }}

            config={{ displayModeBar: false, responsive: true }}
            style={{ width: '100%', height: `${height}px` }}
        />
    )
}