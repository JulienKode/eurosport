import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './components/App'
import './index.scss'

const queryClient = new QueryClient()

const renderApp = () => {
  return (
    <QueryClientProvider client={ queryClient }>
      <ReactQueryDevtools initialIsOpen />
      <App />
    </QueryClientProvider>
  )
}

ReactDOM.render(renderApp(), document.getElementById('root'))
