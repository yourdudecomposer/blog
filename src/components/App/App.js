import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';
import module from './App.module.scss';
function App() {



  return (
    <div className={module["wrapper"]}>
      <Header />
      <main className={module["main"]}>
        <ArticleList/>
        <Pagination/>
      </main>
    </div>
  );
}

export default App;
