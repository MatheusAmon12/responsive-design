import './App.css'
import Container from './components/container'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <section className='grid grid-cols-1'>
        <Container />
      </section>
    </TemplateDefault>
  )
}

export default App
