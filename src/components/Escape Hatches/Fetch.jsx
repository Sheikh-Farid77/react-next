import { useData } from "../../utility/fetch";

export default function Fetch() {
  const data = useData("https://jsonplaceholder.typicode.com/posts");

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {data.map((d) => (
        <p key={d.id}>{d.body}</p>
      ))}
    </div>
  );
}
