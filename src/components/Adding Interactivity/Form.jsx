import { useState } from "react";

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer, try it again"));
      }
    }, 3000);
  });
}
export default function Form() {
  // visual state: empty, typing, submitting, success, error

  //mandatory data state
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  // visual state theke paua final state
  const [status, setStatus] = useState("typing");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error.message);
    }
  };

  if (status === "success")
    return <h1 className="text-3xl font-bold">That's right!</h1>;
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form onSubmit={handleSubmitForm}>
        <textarea
          value={answer}
          onChange={(e) => {
            setError(null)
             setAnswer(e.target.value)}}
          className="border"
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button
          type="submit"
          className="border p-1"
          disabled={answer === "" || status === "submitting"}
        >
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </>
  );
}
