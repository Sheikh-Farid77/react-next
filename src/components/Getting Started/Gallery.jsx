 function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
    )
  }





export default function Gallery(){
    return (
        <section>
            <h1 className="text-4xl">This is Gallery component</h1>
            <div className="flex gap-3">
            <Profile />
            <Profile />
            <Profile />
            </div>
        </section>
    );
}