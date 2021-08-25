import axios from 'axios';
import { useEffect, useState } from 'react';

function Demo() {
  const [result, setResult] = useState([]);
  const [items, setItems] = useState([]);
  const [select, setSelect] = useState('____');
  const [show, setShow] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get('/items');
      setItems([...data]);
    };

    fetchItems();
  }, []);

  const selectHandler = async (e) => {
    let item = e.target.value;

    setShow('');
    setSelect(item);
    const { data } = await axios.get(`/users/age/${item}`);
    setResult(data);
  };

  const clickHandler = () => {
    if (!show) setShow('show');
    else setShow('');
  };

  return (
    <div className='part demo'>
      <div className='title'>
        Age Demographic of Users With{' '}
        <strong className='select-item'>{select}</strong>
      </div>
      <div className='dropdown'>
        <button className='dropdown-btn' onClick={clickHandler}>
          item
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.materialui.co%2FmaterialIcons%2Fnavigation%2Farrow_drop_down_white_192x192.png&f=1&nofb=1'
            alt='arrow-down'
          />
        </button>
        <div className={`dropdown-items ${show}`}>
          {items.map((item, index) => {
            return (
              <option
                className='dropdown-item'
                value={item}
                key={index}
                onClick={(e) => selectHandler(e)}
              >
                {item}
              </option>
            );
          })}
        </div>
      </div>
      <div className='list'>
        <div className='listitem'>
          <div className='listitem-1'>
            <strong>Age</strong>
          </div>
          <div className='listitem-2'>
            <strong>Count</strong>
          </div>
        </div>
        {result.map((data, index) => {
          return (
            <div className='listitem data' key={index}>
              <div className='listitem-1'>{data[0]}</div>
              <div className='listitem-2'>{data[1]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Demo;
