/** @format */

export async function getServerSideProps() {
  return {props: {users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}};
}

export default function UsersList({users}) {
  console.log(users);
  if (users) {
    return (
      <>
        {" "}
        {users.map((user) => {
          return <h1 key={user}>{user}</h1>;
        })}
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}
