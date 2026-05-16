import { useState } from 'react'
import styles from './App.module.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Modal from './components/Modal/Modal'
import Input from './components/Input/Input'
import Badge from './components/Badge/Badge'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import StressTest from './components/StressTest/StressTest'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <div className={styles.container}>
      <ThemeToggle />
      <h1>CSS Modules Implementation</h1>

      <section className={styles.section}>
        <h2>Buttons</h2>
        <div className={styles.row}>
          <Button variant="primary" size="md">Primary</Button>
          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="danger" size="md">Danger</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Cards</h2>
        <div className={styles.row}>
          <Card header={<h3>Default Card</h3>} footer={<small>Footer</small>}>
            Body content
          </Card>
          <Card header={<h3>Hoverable</h3>} hoverable footer={<small>Footer</small>}>
            Hover me
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is a modal with a focus trap.</p>
        </Modal>
      </section>

      <section className={styles.section}>
        <h2>Input</h2>
        <Input label="Email" helperText="Enter your email" placeholder="you@example.com" />
        <Input
          label="Username"
          error={username.trim() === '' ? 'Username is required' : ''}
          helperText={username.trim() !== '' ? '' : 'Type something to clear the error'}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input label="Search" prefixIcon="🔍" />
      </section>

      <section className={styles.section}>
        <h2>Badges</h2>
        <div className={styles.row}>
          <Badge variant="success" size="md">Success</Badge>
          <Badge variant="warning" size="md">Warning</Badge>
          <Badge variant="error" size="md">Error</Badge>
          <Badge variant="info" size="md">Info</Badge>
          <Badge variant="success" size="sm">Small</Badge>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Stress Test</h2>
        <StressTest />
      </section>
    </div>
  )
}

export default App