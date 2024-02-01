const { Providers } = require("@/app/redux/providers");
import { ModalManager } from '@/app/common/Modalmanager';
import '../styles/global.css';
import Header from '@/components/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Header />
      <Component {...pageProps} />
      <ModalManager />
    </Providers>
  );
}