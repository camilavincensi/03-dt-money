import { SummaryCard, SummaryContaineir } from './styles.ts'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter.ts'
import { useSummary } from '../../hooks/UseSummary.ts'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContaineir>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={'#00b37e'} />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={'#f75a68'} />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant={'green'}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={'#fff'} />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContaineir>
  )
}
