import {
  MenuItemsType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  DropdownMenuItems,
  InfoIcon,
  BridgeIcon, DropdownMenuItemType,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import {
  SUPPORT_FARMS,
  SUPPORT_STAKING,
  SUPPORT_INFO,
  SUPPORT_SWAP,
  SUPPORT_BRIDGE,
} from '../../../config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      supportChainIds: SUPPORT_SWAP,
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        /*
        {
          label: t('Limit'),
          href: '/limit-orders',
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/decorations/3d-coin.png',
        },
           */
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        /*
        {
          label: t('Perpetual'),
          href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
            isDark,
          )}`,
          supportChainIds: SUPPORT_ONLY_BSC,
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Bridge'),
          href: 'https://bridge.pancakeswap.finance/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
           */
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      showItemsOnMobile: false,
      supportChainIds: [...SUPPORT_FARMS, ...SUPPORT_STAKING],
      items: [
        {
          label: t('Liquidity Farms'),
          href: '/farms',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('Staking'),
          href: '/pools',
          supportChainIds: SUPPORT_STAKING,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Bridge'),
      href: '/bridge',
      hideSubNav: true,
      icon: BridgeIcon,
      supportChainIds: SUPPORT_BRIDGE,
      showItemsOnMobile: false,
      items: [],
    },
    {
      label: t('Launchpad'),
      href: '/launchpad',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      showItemsOnMobile: false,
      supportChainIds: [...SUPPORT_FARMS, ...SUPPORT_STAKING],
      items: [
        {
          label: t('Create Token'),
          href: '/createtoken',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('Create Launchpad'),
          href: '/createlaunchpad',
          supportChainIds: SUPPORT_STAKING,
        },
        {
          label: t('Current Launchpad'),
          href: '/CurrentLaunchpad',
          supportChainIds: SUPPORT_STAKING,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    /*
    {
      label: t('Win'),
      href: '/prediction',
      icon: TrophyIcon,
      fillIcon: TrophyFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      items: [
        {
          label: t('Trading Competition'),
          href: '/competition',
          image: '/images/decorations/tc.png',
          hideSubNav: true,
        },
        {
          label: t('Prediction (BETA)'),
          href: '/prediction',
          image: '/images/decorations/prediction.png',
        },
        {
          label: t('Lottery'),
          href: '/lottery',
          image: '/images/decorations/lottery.png',
        },
        {
          label: t('Pottery (BETA)'),
          href: '/pottery',
          image: '/images/decorations/lottery.png',
        },
      ],
    },
       */
    /*
    {
      label: t('NFT'),
      href: `${nftsBaseUrl}`,
      icon: NftIcon,
      fillIcon: NftFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      image: '/images/decorations/nft.png',
      items: [
        {
          label: t('Overview'),
          href: `${nftsBaseUrl}`,
        },
        {
          label: t('Collections'),
          href: `${nftsBaseUrl}/collections`,
        },
        {
          label: t('Activity'),
          href: `${nftsBaseUrl}/activity`,
        },
      ],
    },
       */
    /*
    {
      label: t('Info'),
      href: 'https://info.icecreamswap.com',
      type: DropdownMenuItemType.EXTERNAL_LINK,
      icon: InfoIcon,
      hideSubNav: true,
      items: [],
    },
    */
    {
      label: t('Info'),
      href: '/info',
      icon: InfoIcon,
      supportChainIds: SUPPORT_INFO,
      hideSubNav: true,
      showItemsOnMobile: false,
      items: [],
    },
    {
      label: t('Wiki'),
      href: 'https://wiki.icecreamswap.com',
      type: DropdownMenuItemType.EXTERNAL_LINK,
      icon: InfoIcon,
      hideSubNav: true,
      showItemsOnMobile: false,
      items: [],
    },
    /*
    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Info'),
          href: '/info',
        },
        {
          label: t('IFO'),
          href: '/ifo',
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/ifos/ifo-bunny.png',
        },
        {
          label: t('Voting'),
          href: '/voting',
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/voting/voting-bunny.png',
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Leaderboard'),
          href: '/teams',
          supportChainIds: SUPPORT_ONLY_BSC,
          image: '/images/decorations/leaderboard.png',
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Blog'),
          href: 'https://medium.com/pancakeswap',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Docs'),
          href: 'https://docs.pancakeswap.finance',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
       */
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
