import './App.css'
import Container from './components/container'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <section className='grid grid-cols-1'>
        <Container  src='/Vitejs-logo.svg' alt='react logo' text='ViteJS' backgroundGradient='bg-gradient-vite' />

        <Container  src='/react-original.svg' alt='react logo' text='ReactJS' backgroundGradient='bg-gradient-react' />

        <Container  src='/nextjs-original.svg' alt='react logo' text='NextJS' backgroundGradient='bg-gradient-next' />

        <Container  src='/typescript-original.svg' alt='react logo' text='Typescript' backgroundGradient='bg-gradient-typescript' />

        <Container  src='/tailwindcss-original-wordmark.svg' alt='react logo' text='Tailwind CSS' backgroundGradient='bg-gradient-tailwind' />
      </section>
    </TemplateDefault>
  )
}

export default App
