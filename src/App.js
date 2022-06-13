import { useState } from 'react';
import Card from './components/Card';
import SegmentTop from './components/SegmentTop';
import SegmentBottom from './components/SegmentBottom';

function App() {

  

  return (
    <div>
      <Card>
        <div className="app-title">Tip Calculator</div>
        <SegmentTop></SegmentTop>
        <SegmentBottom></SegmentBottom>
      </Card>
    </div>
  );
}

export default App;
