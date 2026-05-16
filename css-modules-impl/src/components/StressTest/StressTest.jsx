import { useMemo, useState } from 'react'
import Button from '../Button/Button'

const variants = ['primary', 'secondary', 'danger']
const sizes = ['sm', 'md', 'lg']

function generateButtons(count) {
  const list = []
  for (let i = 0; i < count; i++) {
    list.push({
      id: i,
      variant: variants[Math.floor(Math.random() * variants.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
    })
  }
  return list
}

export default function StressTest() {
  const [key, setKey] = useState(0)
  const buttons = useMemo(() => generateButtons(1000), [key])

  return (
    <div>
      <button onClick={() => setKey(prev => prev + 1)} style={{ marginBottom: '1rem' }}>
        Re-render Stress Test
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {buttons.map(btn => (
          <Button key={btn.id} variant={btn.variant} size={btn.size} dataTestId={`stress-${btn.id}`}>
            {btn.variant}
          </Button>
        ))}
      </div>
    </div>
  )
}