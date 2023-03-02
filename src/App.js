import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import SharedLayout from "./SharedLayout/SharedLayout";

function App() {
  return (
    <BackgroundWrapper>
      <Header />
      <MainContainer>
        <SharedLayout />
      </MainContainer>
    </BackgroundWrapper>
  );
}

export default App;
