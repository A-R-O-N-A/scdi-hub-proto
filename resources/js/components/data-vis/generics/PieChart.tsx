import Plot from 'react-plotly.js'

type PieChartProps = {
  dataset: { data?: Record<string, unknown>[] } | null | undefined
  firstValueField: string
  secondValueField: string
  firstLabel?: string
  secondLabel?: string
  title?: string
}

export default function PieChart({
  dataset,
  firstValueField,
  secondValueField,
  firstLabel,
  secondLabel,
  title,
}: PieChartProps) {
  if (!dataset || !dataset.data) {
    return <p>Loading . . . </p>
  }

  const toNumber = (value: unknown) => {
    const n = Number(value)
    return Number.isFinite(n) ? n : 0
  }

  const totalFirst = dataset.data.reduce(
    (sum, row) => sum + toNumber(row?.[firstValueField]),
    0
  )

  const totalSecond = dataset.data.reduce(
    (sum, row) => sum + toNumber(row?.[secondValueField]),
    0
  )

  const labels = [
    firstLabel || firstValueField,
    secondLabel || secondValueField,
  ]

  const values = [totalFirst, totalSecond]

  return (
    <div>
      <h3>{title || `${labels[0]} vs ${labels[1]}`}</h3>

      <Plot
        data={[
          {
            type: 'pie',
            labels,
            values,
            textinfo: 'label+percent+value',
            hovertemplate: '%{label}<br>Value: %{value}<br>Share: %{percent}<extra></extra>',
            marker: {
              colors: ['#FFA15A', '#1F77B4'],
            },
          },
        ]}
        layout={{
          title: title || `${labels[0]} vs ${labels[1]}`,
          showlegend: true,
        }}
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  )
}