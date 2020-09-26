import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { THEME } from '@src/config/theme'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './components/App'
import './index.scss'

const queryClient = new QueryClient()
const theme = createMuiTheme(THEME.mui)

const renderApp = () => {
  return (
    <MuiThemeProvider theme={ theme }>
      <QueryClientProvider client={ queryClient }>
        <ReactQueryDevtools initialIsOpen />
        <App />
      </QueryClientProvider>
    </MuiThemeProvider>
  )
}

ReactDOM.render(renderApp(), document.getElementById('root'))
