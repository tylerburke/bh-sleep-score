// Create an array of 30 minute increments from 0-24hrs
const DURATIONS = [];
for (let i = 0; i <= 48; i++) {
  DURATIONS.push(i * 30);
}

const SleepScore = () => {
  return (
    <div className="container">
      <header>
        <h1>Sleep Score Calculator</h1>
      </header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="durationInBed">
            Duration in bed
            <select id="durationInBed">
              {DURATIONS.map((duration) => (
                <option key={duration.toString()} value={duration}>
                  {duration / 60} hours
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="durationAsleep">
            Duration asleep
            <select id="durationAsleep">
              {DURATIONS.map((duration) => (
                <option key={duration.toString()} value={duration}>
                  {duration / 60} hours
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Calculate</button>
        </form>

        <div className="output"></div>
      </main>
    </div>
  );
};

export default SleepScore;
