import { useState } from 'react';
import './App.css';
import { progressStateType } from './AppType';

function App() {
  const [progressState, setProgressState] = useState<progressStateType>({
    data: [
      { text: '1', isActive: true },
      { text: '2', isActive: false },
      { text: '3', isActive: false },
      { text: '4', isActive: false },
    ],
    currentCount: 1,
    lineWidth: 0,
  });

  function handleNext() {
    if (progressState?.currentCount < progressState?.data?.length) {
      updateProgress(progressState?.currentCount, true);
    }
  }

  function handlePrev() {
    let modifiedCount: number = progressState?.currentCount - 1;
    if (modifiedCount !== 0) {
      updateProgress(modifiedCount, false);
    }
  }

  function updateProgress(count: number, isActive: boolean) {
    const modifiedData = [...progressState?.data];
    const modifiedWidth =
      ((isActive ? count : count - 1) / (progressState?.data.length - 1)) * 100;
    modifiedData[count].isActive = isActive;
    setProgressState({
      ...progressState,
      data: modifiedData,
      currentCount: isActive ? count + 1 : count,
      lineWidth: modifiedWidth,
    });
  }

  return (
    <>
      <div className="container">
        <div className="progress-container">
          <div
            className="horizontal-line"
            style={{ width: `${progressState?.lineWidth}%` }}
          ></div>
          {progressState?.data.map((item) => {
            return (
              <div className={`circle ${item.isActive ? 'active' : ''}`}>
                {item.text}
              </div>
            );
          })}
        </div>
        <div>
          <button
            className="btn"
            disabled={progressState?.currentCount === 1}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="btn"
            disabled={
              progressState?.currentCount === progressState?.data?.length
            }
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
