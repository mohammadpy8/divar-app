import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import defaultOptions from './configs/reactQuery'
import Router from './routers/Router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'

const App = () => {
  const queryClient = new QueryClient({ defaultOptions })
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
