import * as React from 'react';
import { useState } from 'react';
// import { useMock } from '../hooks/useMock.js';

function TestSWR() {
  // const [pageNo, setPageNo] = useState('1');
  // const { data, isLoading, isError, isValidating } = useMock(pageNo);
  console.log('TestSWR Render');
  return (
    <div>
      TestSWR
      {/* <input
        onChange={(e) => {
          if (e.target.value) {
            setPageNo(e.target.value);
          }
        }}
      /> */}
      {/* {data && (
        <div>
          {data.result.map((item) => (
            <p>{item[0]}</p>
          ))}
        </div>
      )} */}
    </div>
  );
}
export default TestSWR;
