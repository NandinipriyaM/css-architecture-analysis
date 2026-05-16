import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyle } from './globalStyle'
import Button from './components/Button'
import Card from './components/Card'
import Modal from './components/Modal'
import Input from './components/Input'
import Badge from './components/Badge'
import ThemeToggle from './components/ThemeToggle'
import StressTest from './components/StressTest'

export default function App() {
  const [theme, setTheme] = useState(lightTheme)
  const [modalOpen, setModalOpen] = useState(false)
  const [username, setUsername] = useState('')

  const toggleTheme = () => setTheme(prev => prev === lightTheme ? darkTheme : lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
        <ThemeToggle toggle={toggleTheme} current={theme} />
        <h1>styled-components Implementation</h1>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2>Buttons</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" size="md">Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="danger" size="md">Danger</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2>Cards</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Card header={<h3>Default Card</h3>} footer={<small>Footer</small>}>
              Body content
            </Card>
            <Card hoverable header={<h3>Hoverable</h3>} footer={<small>Footer</small>}>
              Hover me
            </Card>
          </div>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2>Modal</h2>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <h2>Modal Title</h2>
            <p>This is a modal with a focus trap.</p>
          </Modal>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2>Input</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
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

        <section style={{ marginBottom: '2.5rem' }}>
          <h2>Badges</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success" size="sm">Small</Badge>
          </div>
        </section>

        <section>
          <h2>Stress Test</h2>
          <StressTest />
        </section>
      </div>
    </ThemeProvider>
  )
}