
import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<string>('');

    //generate function to handleChange
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    return (
      <div>
        <p>Count: {count}</p>
        <button
          onClick={() => { setCount(count + 1);
  }} >
          Increment
        </button>
        <br />
        <input type="text" value={value} onChange={handleChange} />
        </div> );
}

export default Count