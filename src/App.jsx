import Sun from '../src/assets/react.svg';
import Group from './components/Beyond Basic/List';
import { List, AutoSizer } from 'react-virtualized';

function App() {
  const list = Array(5000)
    .fill()
    .map((item, id) => ({
      id,
      text: 'Hello my Name is Peter Parker',
      name: 'Peter Parker',
      image: Sun
    }));


  const rowHeight = 100;


  const renderRow = ({ index, key, style }) => {
    return (
      <Group
        key={key}
        name={list[index].name}
        image={list[index].image}
        text={list[index].text}
        style={style}
      />
    );
  };

  return (
    <div className='list'>
      <AutoSizer>
        {({width, height}) => <List
          width={width}
          height={height}
          rowHeight={rowHeight}
          rowCount={list.length}
          rowRenderer={renderRow}
          overscanColumnCount={5}
        />}
      </AutoSizer>
    </div>
  );
}

export default App;
