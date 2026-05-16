import { useMemo, useState } from 'react'
import Button from './Button'

const variants = ['primary', 'secondary', 'danger']
const sizes = ['sm', 'md', 'lg']

function generate(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    variant: variants[Math.floor(Math.random() * variants.length)],
    size: sizes[Math.floor(Math.random() * sizes.length)],
  }))
}

export default function StressTest() {
  const [key, setKey] = useState(0)
  const buttons = useMemo(() => generate(1000), [key])

  return (
    <div>
      <button onClick={() => setKey(prev => prev + 1)} className="mb-4 px-3 py-1 border rounded">
        Re-render Stress Test
      </button>
      <div className="flex flex-wrap gap-1">
        {buttons.map(b => (
          <Button key={b.id} variant={b.variant} size={b.size} dataTestId={`stress-${b.id}`}>
            {b.variant}
          </Button>
        ))}
      </div>
    </div>
  )
}