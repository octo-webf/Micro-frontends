import React from "react";
import "./Home.css";

function Home({ props }) {
  const handleSubmit = () => {
    if (props.username.length > 0) {
      props.setAuth(true);
    }
  };

  return (
    <>
      <section className="homePage">
        <div className="auth">
          {props.isAuth ? (
            <>
              <h3>Authentication successful!</h3>
              <p>
                Hello <code>{props.username}</code>
              </p>
            </>
          ) : (
            <>
              <h2>Authentication</h2>
              <div>
                <div>
                  <input
                    type="text"
                    value={props.username}
                    onChange={(event) => props.setUsername(event.target.value)}
                    placeholder="Username"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={props.password}
                    onChange={(event) => props.setPassword(event.target.value)}
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="button-green login"
                  onClick={() => {
                    console.log("Username: " + props.username);
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
