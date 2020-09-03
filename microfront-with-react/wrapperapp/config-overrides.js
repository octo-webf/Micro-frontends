module.exports = (config, env) => {
  config.externals = {
    react: "React",
    "react-dom": "ReactDOM",
  };
  return config;
};
