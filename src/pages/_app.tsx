import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SSRInventory } from "~/containers/inventory";
import '~/data/firebase'

function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = SSRInventory.useWrappedStore({ pageProps, ...rest });

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default App