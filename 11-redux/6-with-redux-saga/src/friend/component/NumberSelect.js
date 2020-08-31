import React from 'react';

export default function NumberSelect({ value, options, postfix, onChange }) {
  // onChange: 옵션이 변경되었을 때 알려주는 이벤트 핸들러
  return (
    <div>
      <select
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          onChange(value);
        }}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {postfix}
    </div>
  );
}
