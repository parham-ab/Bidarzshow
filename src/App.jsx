import Layout from "./components/layout";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
import SectionD from "./components/SectionD";

const App = () => {
  return (
    <>
      <Layout>
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
      </Layout>
    </>
  );
};

export default App;
