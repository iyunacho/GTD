
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import TableView from './components/TableView';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<TableView />} />
          <Route path='/Timeline'  />
        </Routes>
      </Layout>
    </Router>

  // <TableView></TableView>
  // <div>test</div>
  );
}

export default App;
