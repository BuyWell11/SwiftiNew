import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from '@app/providers/store';

function StoreProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
