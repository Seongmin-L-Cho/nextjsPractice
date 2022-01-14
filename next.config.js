const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       // redirect : url로 갈떄 url 바꾸기 / rewrite : redirect 하기는 하지만 url을 보이게 바꾸지는 않는다
  //       source: "/api/movies",
  //       destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  //     },
  //   ];
  // },
};
