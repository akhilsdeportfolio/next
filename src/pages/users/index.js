/** @format */

export async function getServerSideProps({req, res}) {
  res.setHeader(
    "Cache-Control",
    "public s-maxage=10, stale-while-revalidate=59"
  );

  return {props: {a: 1, b: 2, c: 3}};
}

export default function Users(props) {
  return <h2>welcome to users {JSON.stringify(props)}</h2>;
}
