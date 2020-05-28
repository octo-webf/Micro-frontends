import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setAuth] = useState(false);

  const handleSubmit = () => {
    if (username.length > 0) {
      setAuth(true);
    }
  };

  return (
    <>
      <section class="homePage">
        <div class="auth">
          {isAuth ? (
            <h3>Authentication successful!</h3>
          ) : (
            <>
              <h2>Authentication</h2>
              <div>
                <div>
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Username"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="button-green login"
                  onClick={() => {
                    console.log("Username: " + username);
                    handleSubmit();
                  }}
                >
                  Log in
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default Home;
