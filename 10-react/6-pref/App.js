import React, { useState } from 'react';

export default function App() {
  return <SelectFruit />;
}

function SelectFruit() {
  const [fruits, setFruits] = useState(['apple', 'banana', 'oragne']);
  const [newFruit, setNewFruit] = useState('');

  function addNewFruit() {
    setFruits([...fruits, newFruit]);
    setNewFruit('');
  }
  // ...
  return (
    <div>
      <Select options={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
      {/* ... */}
    </div>
  );
}

const Select = React.memo(({ options }) => {
  <div>
    {options.map((item) => (
      <p>{item}</p>
    ))}
  </div>;
});
