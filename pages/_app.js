import Layout from "../components/Layout";

import "../styles/globals.css";
// _app.js -> Component/prara의 component 는 potato 등 다른 걸로 바꿀수 있다. 불리기전 불리는 청사진
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
