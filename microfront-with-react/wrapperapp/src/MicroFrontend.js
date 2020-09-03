import React from "react";

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `script-${name}-`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    var manifest_length = 1;
    var loaded = 0;

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        manifest_length = manifest["entrypoints"].length;
        manifest["entrypoints"].forEach((entrypoint) => {
          const script = document.createElement("script");
          script.id = scriptId + entrypoint.split("/")[2];
          script.src = `${host}/${entrypoint}`;
          script.crossOrigin = "";
          document.head.appendChild(script);
          script.onload = () => {
            loaded += 1;
            if (loaded !== manifest_length) {
              return;
            }
            this.renderMicroFrontend();
          };
        });
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;
    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;
    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <div id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
