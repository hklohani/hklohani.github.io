import "./index.css";
const Ott = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#primevideo">Amazon Prime Video</a>
            </li>
            <li>
              <a href="#hotstar">Hotstar</a>
            </li>
            <li>
              <a href="#sonyliv">Sony LIV</a>
            </li>
            <li>
              <a href="#zee5">ZEE5</a>
            </li>
            <li>
              <a href="#discovery">Discovery+</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="ott-container">
        <div className="platform" id="primevideo">
          <a href="https://www.primevideo.com">Amazon Prime Video</a>
          <div className="credentials">
            <p>
              <strong>Username:</strong> 8404968268
            </p>
            <p>
              <strong>Password:</strong> qwert12345
            </p>
          </div>
        </div>
        <div className="platform" id="hotstar">
          <a href="https://www.disneyplus.com">Hotstar</a>
          <div className="credentials">
            <p>
              <strong>Username:</strong> 8404968268
            </p>
            <p>
              <strong>Password:</strong> Send OTP
            </p>
          </div>
        </div>
        <div className="platform" id="sonyliv">
          <a href="https://www.disneyplus.com">Sony LIV</a>
          <div className="credentials">
            <p>
              <strong>Username:</strong> 8404968268
            </p>
            <p>
              <strong>Password:</strong> Send OTP
            </p>
          </div>
        </div>
        <div className="platform" id="zee5">
          <a href="https://www.disneyplus.com">ZEE5</a>
          <div className="credentials">
            <p>
              <strong>Username:</strong> 8404968268
            </p>
            <p>
              <strong>Password:</strong> Send OTP
            </p>
          </div>
        </div>
        <div className="platform" id="discovery">
          <a href="https://www.disneyplus.com">Discovery+</a>
          <div className="credentials">
            <p>
              <strong>Username:</strong> 8404968268
            </p>
            <p>
              <strong>Password:</strong> Send OTP
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ott;
