import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Modal from './components/Modal'
import Input from './components/Input'
import Badge from './components/Badge'
import ThemeToggle from './components/ThemeToggle'
import StressTest from './components/StressTest'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <div className="max-w-3xl mx-auto p-8">
      <ThemeToggle />
      <h1 className="text-2xl font-bold mb-6">Tailwind CSS Implementation</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="md">Primary</Button>
          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="danger" size="md">Danger</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Cards</h2>
        <div className="flex flex-wrap gap-4">
          <Card header={<h3 className="font-semibold">Default Card</h3>} footer={<small>Footer</small>}>
            Body content
          </Card>
          <Card hoverable header={<h3 className="font-semibold">Hoverable</h3>} footer={<small>Footer</small>}>
            Hover me
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Modal Title</h2>
          <p className="mt-2">This is a modal with a focus trap.</p>
        </Modal>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Input</h2>
        <div className="flex flex-col gap-4 max-w-sm">
          <Input label="Email" helperText="Enter your email" placeholder="you@example.com" />
          <Input
            label="Username"
            error={username.trim() === '' ? 'Username is required' : ''}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input label="Search" prefixIcon="🔍" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success" size="sm">Small</Badge>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Stress Test</h2>
        <StressTest />
      </section>
    </div>
  )
}