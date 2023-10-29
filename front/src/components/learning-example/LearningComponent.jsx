import { SecondComponent } from "./Firstcomponent";
import FirstComponent from "./Firstcomponent";
import ThirdComponent from "./ThirdComponent";

export default function LearningComponent() {
    return (
      <div className="App">
        My Todo Application
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }