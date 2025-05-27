import { useEffect, useState } from "react";
import { fetchComments } from "../../utility/fetchComments";

export default function Cards({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const json = await fetchComments(postId);
      if (!ignore) {
        setComments(json);
        console.log('setting.....')
      }
    };
    startFetching();

    return () => {
      ignore = true;
    };
  }, [postId]);
  return (
    <ul className="list-disc">
      {comments.map((comment) => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  );
}
