import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Recipes from './components/Recipes';
import RecipesList from './components/RecipesList';
import SendForm from './components/SendForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <section>
        <Recipes />
        <RecipesList />
      </section>
      <SendForm />
      <Footer />
    </div>
  );
}

export default App;
