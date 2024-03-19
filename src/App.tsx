
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import TableView from './pages/TableView';
import TimelineView from './pages/TimelineView';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<TableView />} />
          <Route path='/Timeline' element={<TimelineView />} />
        </Routes>
      </Layout>
    </Router>

  // <TableView></TableView>
  // <div>test</div>
  );
}

export default App;
