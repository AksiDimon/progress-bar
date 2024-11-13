import { useState } from 'react';
import { ProgressBar } from './ProgressBar';

export function ListBar() {
  const [value, setValue] = useState(0);

  function handleInputValue(event) {
    const enterVal = event.target.value
    setValue(enterVal)
  }

  return (
    <div style={{ background: "yellow", width: 600, minHeight: 100 }}>

      <pre>
        {`<ProgressBar
            thresholds={[25, 50, 100, 200, 500, 1000]}
            value={${20}}
        />`}
      </pre>
      <input
        value={value}
        onChange={handleInputValue}
      ></input>
      <button onClick={() => setValue(0)}>0</button>
      <ProgressBar
        thresholds={[25, 50, 100, 200, 500, 1000]}
        value={value}
      />
    </div>
  );
}

// computeProgressPercentage
