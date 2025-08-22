import Navigation from "./components/common/Navigation";
import ClickSpark from "./components/common/ClickSpark";
import Loader from "./components/common/Loader";
import Hero from "./components/pages/Home/sections/Hero/Hero";
import secSec from "./components/pages/Home/sections/section2/sec2";
function App() {
  return (
    <div className="h-[100vh]">
      <ClickSpark
        sparkColor="#334155"
        sparkSize={15}
        sparkRadius={20}
        sparkCount={9}
        duration={700}
      >
        <Navigation />
        <Hero />
        <secSec />
      </ClickSpark>
    </div>
  );
}

export default App
