import { FC } from 'react'
import Demo, { FarmsContext } from './CurrentLaunchpad'

export const FarmsPageLayout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return <Demo>{children}</Demo>
}

export { FarmsContext }
