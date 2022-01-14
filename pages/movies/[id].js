import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return "detail";
}

// 동적 라우팅 /movies:id 랑 같은것
