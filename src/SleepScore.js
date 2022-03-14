import { useState } from 'react';

// Create an array of 30 minute increments from 0-24hrs
const DURATIONS = [];
for (let i = 0; i <= 48; i++) {
  DURATIONS.push(i * 30);
}

const SleepScore = () => {
  const [durationInBed, setDurationInBed] = useState(0);
  const [durationAsleep, setDurationAsleep] = useState(0);
  const [outputText, setOutputText] = useState('output');

  function calculateScore() {
    // Check for valid inputs
    if (!durationInBed || !durationAsleep) {
      setOutputText('Oops there was a problem. Unable to calculate a score.');
      return;
    }

    // Calculate score up to 1 decimal place.
    const score = +Number.parseFloat(
      100 * (durationAsleep / durationInBed)
    ).toFixed(1);

    setOutputText(`Score: ${score}`);
  }

  return (
    <div className="container">
      <header>
        <h1>Sleep Score Calculator</h1>
      </header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateScore();
          }}
        >
          <label htmlFor="durationInBed">
            Duration in bed
            <select
              id="durationInBed"
              value={durationInBed}
              onChange={(e) => {
                setDurationInBed(+e.target.value);
              }}
              onBlur={(e) => {
                setDurationInBed(+e.target.value);
              }}
            >
              {DURATIONS.map((duration) => (
                <option key={duration.toString()} value={duration}>
                  {duration / 60} hours
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="durationAsleep">
            Duration asleep
            <select
              id="durationAsleep"
              value={durationAsleep}
              onChange={(e) => {
                setDurationAsleep(+e.target.value);
              }}
              onBlur={(e) => {
                setDurationAsleep(+e.target.value);
              }}
            >
              {DURATIONS.map((duration) => (
                <option key={duration.toString()} value={duration}>
                  {duration / 60} hours
                </option>
              ))}
            </select>
          </label>

          <button type="submit" disabled={!durationInBed || !durationAsleep}>
            Calculate
          </button>
        </form>

        <div className="output">{outputText}</div>
      </main>
    </div>
  );
};

export default SleepScore;
