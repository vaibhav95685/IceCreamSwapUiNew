import { Box, Card, CardBody, CardHeader, Flex, Heading, LinkExternal, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { format } from 'date-fns'
import { Proposal } from 'state/types'
import { getBlockExploreLink } from 'utils'
import { useTranslation } from '@pancakeswap/localization'
import truncateHash from '@pancakeswap/utils/truncateHash'
import { IPFS_GATEWAY } from '../config'
import { ProposalStateTag } from '../components/Proposals/tags'
import {useActiveChainId} from "../../../hooks/useActiveChainId";

interface DetailsProps {
  proposal: Proposal
}

const DetailBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
`

const Details: React.FC<React.PropsWithChildren<DetailsProps>> = ({ proposal }) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const startDate = new Date(proposal.start * 1000)
  const endDate = new Date(proposal.end * 1000)

  return (
    <Card mb="16px">
      <CardHeader>
        <Heading as="h3" scale="md">
          {t('Details')}
        </Heading>
      </CardHeader>
      <CardBody>
        <Flex alignItems="center" mb="8px">
          <Text color="textSubtle">{t('Identifier')}</Text>
          <LinkExternal href={`${IPFS_GATEWAY}/${proposal.id}`} ml="8px">
            {proposal.id.slice(0, 8)}
          </LinkExternal>
        </Flex>
        <Flex alignItems="center" mb="8px">
          <Text color="textSubtle">{t('Creator')}</Text>
          <LinkExternal href={getBlockExploreLink(proposal.author, 'address', chainId)} ml="8px">
            {truncateHash(proposal.author)}
          </LinkExternal>
        </Flex>
        <Flex alignItems="center" mb="16px">
          <Text color="textSubtle">{t('Snapshot')}</Text>
          <LinkExternal href={getBlockExploreLink(proposal.snapshot, 'block', chainId)} ml="8px">
            {proposal.snapshot}
          </LinkExternal>
        </Flex>
        <DetailBox p="16px">
          <ProposalStateTag proposalState={proposal.state} mb="8px" />
          <Flex alignItems="center">
            <Text color="textSubtle" fontSize="14px">
              {t('Start Date')}
            </Text>
            <Text ml="8px">{format(startDate, 'yyyy-MM-dd HH:mm')}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text color="textSubtle" fontSize="14px">
              {t('End Date')}
            </Text>
            <Text ml="8px">{format(endDate, 'yyyy-MM-dd HH:mm')}</Text>
          </Flex>
        </DetailBox>
      </CardBody>
    </Card>
  )
}

export default Details
