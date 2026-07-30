import Plot from 'react-plotly.js'

export default function Histogram({ dataset, categoryField }) {
  if (!dataset || !dataset.data) {
    return <p>Loading . . . </p>
  }

  const categories = dataset.data
    .map((item) => item?.[categoryField])
    .filter((v) => v !== null && v !== undefined && v !== '')

  return (
    <div>
      <h3>Distribution of {categoryField}</h3>

      <Plot
        data={[
          {
            type: 'histogram',
            x: categories,
            histfunc: 'count',
            marker: { color: '#2a9d8f' },
          },
        ]}
        layout={{
          title: `Distribution of ${categoryField}`,
          xaxis: { title: categoryField, type: 'category' },
          yaxis: { title: 'Count' },
          bargap: 0.12,
        }}
        style={{ width: '100%', height: '800px' }}
      />
    </div>
  )
}