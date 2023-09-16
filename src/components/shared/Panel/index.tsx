import { PropsWithChildren } from 'react';
import { PanelContainer } from './styles';

export function Panel({ children }: PropsWithChildren) {
  return (
    <PanelContainer>
      {children}
    </PanelContainer>
  )
}