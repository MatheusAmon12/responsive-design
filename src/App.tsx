import './App.css'
import Container from './components/container'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <section className='grid grid-cols-1'>
        <Container  src='/Vitejs-logo.svg' alt='react logo' text='ViteJS' />

        <Container  src='/react-original.svg' alt='react logo' text='ReactJS' />

        <Container  src='/nextjs-original.svg' alt='react logo' text='NextJS' />

        <Container  src='/typescript-original.svg' alt='react logo' text='Typescript' />

        <Container  src='/tailwindcss-original-wordmark.svg' alt='react logo' text='Tailwind CSS' />
      </section>
    </TemplateDefault>
  )
}

export default App
