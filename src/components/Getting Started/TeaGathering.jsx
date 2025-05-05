function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  const arr = [];
  for (let i = 0; i <= 5; i++) {
    arr.push(<Cup key={i} guest={i}></Cup>);
  }
  return arr;
}
