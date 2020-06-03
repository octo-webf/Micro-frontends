import { DireflowComponent } from "direflow-component";
import SecondApp from "./SecondApp";

export default DireflowComponent.create({
  component: SecondApp,
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
