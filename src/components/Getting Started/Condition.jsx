function Item({ name, isPacked }) {
   
    return (
        <li className="item">
          {isPacked ? (
            <del>
              {name + ' ✅'}
            </del>
          ) : (
            name
          )}
        </li>
      );
    
  }
  


export default function Condition(){
    return (
        <section>
        <h1 className="text-3xl">Sally Ride's Packing List</h1>
        <ul className="list-disc">
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
}
