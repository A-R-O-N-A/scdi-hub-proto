import Plot from 'react-plotly.js'

type DatasetRow = Record<string, unknown>

type DatasetShape = {
  data?: DatasetRow[]
  column_types?: Record<string, string>
}

type PieChartProps = {
  dataset: DatasetShape | null | undefined
  rowMatchField: string
  rowMatchValue: string
  valueFields?: string[]
  title?: string
}

export default function PieChart({
  dataset,
  rowMatchField,
  rowMatchValue,
  valueFields,
  title,
}: PieChartProps) {
  if (!dataset || !dataset.data || dataset.data.length === 0) {
    return <p>Loading . . . </p>
  }

  const row = dataset.data.find(
    (item) => String(item?.[rowMatchField] ?? '') === String(rowMatchValue)
  )

  if (!row) {
    return <p>No matching row found for {rowMatchValue}.</p>
  }

  const numericFields =
    valueFields && valueFields.length > 0
      ? valueFields
      : Object.entries(dataset.column_types ?? {})
          .filter(([key, type]) => key !== rowMatchField && type === 'numerical')
          .map(([key]) => key)

  const toNumber = (v: unknown) => {
    const n = Number(v)
    return Number.isFinite(n) ? n : 0
  }

  const labels = numericFields
  const values = numericFields.map((field) => toNumber(row[field]))

  return (
    <div>
      <h3>{title || `${rowMatchValue} Composition`}</h3>

      <Plot
        data={[
          {
            type: 'pie',
            labels,
            values,
            textinfo: 'label+percent+value',
            hovertemplate: '%{label}<br>%{value}<br>%{percent}<extra></extra>',
            marker: {
              colors: [
                '#FFA15A',
                '#1F77B4',
                '#2CA02C',
                '#EF553B',
                '#AB63FA',
                '#19D3F3',
                '#FF6692',
              ],
            },
          },
        ]}
        layout={{
          title: title || `${rowMatchValue} Composition`,
          showlegend: true,
        }}
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  )
}