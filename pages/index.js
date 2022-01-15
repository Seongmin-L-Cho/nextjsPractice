import { useEffect, useState } from "react";
import Seo from "../component/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ) // page가 유저에게 보이기 전에 props를 받아오는 펑션
    .json();
  return {
    props: {
      results, //_app.js 의 pageProps에 들어가게 된다
    },
  };
}

// csr -> javascript로 html 이 보임. react.js는 다른 모든걸 렌더링 한다. 브라우저가 자바스크립트를 가녀와서, 클라이언트 사이드가 html을 구성. 그래서 자바스크립트 비활성화시 아무것도
//  안보이게 됨. 느릴경우 순차구성. react.js 코드가 와야만 나머지가 보임
// getServerSideProps가 없을경우, 로딩창, 혹은 데이터가 없어도 되는 부분은 보임. pre-rendering
// getServerSideProps를 사용할 경우 진짜 html로 보이게 만듬. 단 화면 페이지에 아무것도 안보이게 됨. 왜냐면 serverside에서 받아오기 전까지는 걍 아무것도 없음
// 이건 심지어 api 콜도 안보임 devtool에서!
