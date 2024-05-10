import Container from './components/container'
import TemplateDefault from './template/default'

function App() {

  return (
    <TemplateDefault>
      <section className='h-[100vh] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <Container  
          src='/Vitejs-logo.svg' 
          alt='react logo' 
          text='ViteJS' 
          backgroundGradient='bg-gradient-vite' 
        />

        <Container  
          src='/react-original.svg' 
          alt='react logo' 
          text='ReactJS' 
          backgroundGradient='bg-gradient-react' 
        />

        <Container  
          src='/nextjs-original.svg' 
          alt='react logo' 
          text='NextJS' 
          backgroundGradient='bg-gradient-next' 
        />

        <Container  
          src='/typescript-original.svg' 
          alt='react logo' 
          text='Typescript' 
          backgroundGradient='bg-gradient-typescript' 
        />

        <Container  
          src='/tailwindcss-original-wordmark.svg' 
          alt='react logo' 
          text='Tailwind CSS' 
          backgroundGradient='bg-gradient-tailwind' 
        />

        <Container  
          src='/message-circle-code.svg' 
          alt='Balão com um símbolo de código' 
          text='Projeto desenvolvido como pré-requisito da fase Code Explorer.' 
          textColor='text-black'
        />
      </section>
    </TemplateDefault>
  )
}

export default App
