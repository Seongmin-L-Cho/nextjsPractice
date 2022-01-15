import Seo from "../../component/Seo";
import { useRouter } from "next/router";
// 동적 라우팅 /movies:id 랑 같은것

export default function Detail({ urlParams }) {
  const [title, id] = urlParams || []; // || []의 존재는 next.js의 pre-render 때문에 존재. server에서는 아직 배열이 아니니까 pre-render 될때 [] 가 없으면 오류 발생. 하단처럼 getServerSideProps를 해주면 || 없어도 성림
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { urlParams } }) {
  return {
    props: {
      urlParams,
    },
  };

  // api를  fetch 할떄 뿐만 아니라 urlParams을 가져오기 위해 getServerSideProps 사용가능. 조금 더 빠른 데이터 가져오기. SEO 최적화용
  // context 제공됨
}

// [...urlParams] 와 같이 앞에 ...가 있으면 www.fasdf.kr/fasdf/asdfasf 의 asdfasf와 같은게 전부 route.query.id, 혹은 par 인식된다. catch-all url이라고 함
