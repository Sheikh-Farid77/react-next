import Profile from "./components/Getting Started/Profile";

function App() {
  return (
    <>
      <Profile
        person={{
          src: "https://i.imgur.com/szV5sdG.jpg",
          w: 70,
          h: 70,
        }}
      />

      <Profile
        person={{
          src: "https://i.imgur.com/YfeOqp2.jpg",
          w: 70,
          h: 70,
        }}
      />
    </>
  );
}

export default App;
