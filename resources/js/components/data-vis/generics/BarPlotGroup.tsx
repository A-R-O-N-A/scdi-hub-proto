import Plot from 'react-plotly.js'

export default function GroupedBarPlot({
  dataset,
  labelField,
  valueFields,
  title,
  height = 500,
}) {
  if (!dataset || !dataset.data) return <p>Loading . . . </p>

  const rows = dataset.data

  const labels = rows
    .map((row) => row?.[labelField])
    .filter((v) => v !== null && v !== undefined)

  const detectedNumericFields = Object.entries(dataset.column_types || {})
    .filter(([field, type]) => field !== labelField && type === 'numerical')
    .map(([field]) => field)

  const numericFields =
    Array.isArray(valueFields) && valueFields.length > 0
      ? valueFields
      : detectedNumericFields

  if (numericFields.length === 0) {
    return <p>No numerical columns found.</p>
  }

  const traces = numericFields.map((field) => ({
    type: 'bar',
    name: field,
    x: labels,
    y: rows.map((row) => {
      const n = Number(row?.[field])
      return Number.isFinite(n) ? n : 0
    }),
  }))

  return (
    <div>
      <h3>{title || `Grouped values by ${labelField}`}</h3>

      <Plot
        data={traces}
        layout={{
          title: title || `Grouped values by ${labelField}`,
          barmode: 'group',
          xaxis: { title: labelField, type: 'category' },
          yaxis: { title: 'Value' },
        }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler={true}
        style={{ width: '100%', height: `${height}px` }}
      />
    </div>
  )
}