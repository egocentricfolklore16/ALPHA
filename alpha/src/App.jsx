import Navigation from "./components/common/Navigation";
import ClickSpark from "./components/common/ClickSpark";
import Hero from "./components/pages/Home/sections/Hero/Hero";
import StatsSection from "./components/pages/Home/sections/section2/StatsSection";
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
        <StatsSection />
      </ClickSpark>
    </div>
  );
}

export default App
