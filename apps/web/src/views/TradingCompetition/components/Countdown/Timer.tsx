import styled from 'styled-components'
import { Flex, Heading, Text, Link, useTooltip } from '@pancakeswap/uikit'
import { getBlockExploreLink } from 'utils'
import { useTranslation, ContextApi } from '@pancakeswap/localization'
import {ChainId} from "@pancakeswap/sdk";
import {useActiveChainId} from "../../../../hooks/useActiveChainId";

export interface TimerProps {
  prefix?: string
  suffix?: string
  minutes?: number
  hours?: number
  days?: number
  showTooltip?: boolean
  blockNumber?: number
  HeadingTextComponent?: React.ElementType
  BodyTextComponent?: React.ElementType
}

const StyledTimerFlex = styled(Flex)<{ showTooltip?: boolean }>`
  ${({ theme, showTooltip }) => (showTooltip ? ` border-bottom: 1px dashed ${theme.colors.textSubtle};` : ``)}
  div:last-of-type {
    margin-right: 0;
  }
`

const Timer = ({ minutes, hours, days, showTooltip, HeadingTextComponent, BodyTextComponent }) => {
  const { t } = useTranslation()

  return (
    <StyledTimerFlex alignItems="flex-end" showTooltip={showTooltip}>
      {Boolean(days) && (
        <>
          <HeadingTextComponent mr="2px">{days}</HeadingTextComponent>
          <BodyTextComponent mr="16px">{t('d')}</BodyTextComponent>
        </>
      )}
      {Boolean(hours) && (
        <>
          <HeadingTextComponent mr="2px">{hours}</HeadingTextComponent>
          <BodyTextComponent mr="16px">{t('h')}</BodyTextComponent>
        </>
      )}
      {Boolean(minutes) && (
        <>
          <HeadingTextComponent mr="2px">{minutes}</HeadingTextComponent>
          <BodyTextComponent>{t('m')}</BodyTextComponent>
        </>
      )}
    </StyledTimerFlex>
  )
}

const DefaultHeadingTextComponent = ({ children, ...props }) => (
  <Heading scale="lg" {...props}>
    {children}
  </Heading>
)
const DefaultBodyTextComponent = ({ children, ...props }) => (
  <Text fontSize="16px" fontWeight="600" {...props}>
    {children}
  </Text>
)

const TooltipContent = ({ chainId, blockNumber, t }: { chainId: ChainId, blockNumber: number; t: ContextApi['t'] }): JSX.Element => (
  <>
    <Text color="body" mb="10px" fontWeight="600">
      {t('Block %num%', { num: blockNumber })}
    </Text>
    <Link external href={getBlockExploreLink(blockNumber, 'block', chainId)}>
      {t('View on BscScan')}
    </Link>
  </>
)

const Wrapper: React.FC<React.PropsWithChildren<TimerProps>> = ({
  prefix,
  suffix,
  minutes,
  hours,
  days,
  blockNumber,
  showTooltip = false,
  HeadingTextComponent = DefaultHeadingTextComponent,
  BodyTextComponent = DefaultBodyTextComponent,
}) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const { targetRef, tooltip, tooltipVisible } = useTooltip(<TooltipContent chainId={chainId} blockNumber={blockNumber} t={t} />, {
    placement: 'bottom',
  })
  const shouldDisplayTooltip = showTooltip && tooltipVisible
  return (
    <Flex alignItems="flex-end" position="relative">
      {prefix && <BodyTextComponent mr="16px">{prefix}</BodyTextComponent>}
      <div ref={targetRef}>
        <Timer
          minutes={minutes}
          hours={hours}
          days={days}
          HeadingTextComponent={HeadingTextComponent}
          BodyTextComponent={BodyTextComponent}
          showTooltip={showTooltip}
        />
        {shouldDisplayTooltip && tooltip}
      </div>
      {suffix && <BodyTextComponent ml="16px">{suffix}</BodyTextComponent>}
    </Flex>
  )
}

export default Wrapper
