import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const TestProvider = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={ queryClient }>
      {children}
    </QueryClientProvider>
  )
}

export default TestProvider
