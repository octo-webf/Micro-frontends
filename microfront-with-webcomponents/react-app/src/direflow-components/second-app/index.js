import { DireflowComponent } from "direflow-component";
import App from "./App";

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: "second-app",
  },
  plugins: [
    {
      name: "font-loader",
      options: {
        google: {
          families: ["Advent Pro", "Noto Sans JP"],
        },
      },
    },
  ],
});
