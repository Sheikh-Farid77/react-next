export default function List(){
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];

      const list = people.map((l)=> <li key={crypto.randomUUID()}>{l}</li>)
    return (
        <ul>
            {list}
        </ul>
        
    );
}