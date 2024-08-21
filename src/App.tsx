import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
