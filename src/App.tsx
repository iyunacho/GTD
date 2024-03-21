
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import TableView from './pages/TableView';
import TimelineView from './pages/TimelineView';
import { SampleInterface } from './interfaces/SampleInterface';

function App() {
  const sampleData: SampleInterface[] = [
    {
      id: new Date(), 
      title: "Inbox1",
      startDate: new Date(2024, 3, 21),
      endDate: new Date(2024, 3, 23),
    },
    {
      id: new Date(), 
      title: "Inbox2",
      startDate: new Date(2024, 3, 21),
      endDate: new Date(2024, 3, 25),
    },
    {
      id: new Date(), 
      title: "Inbox3",
      startDate: new Date(2024, 3, 23),
      endDate: new Date(2024, 3, 24),
    }
  ]
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<TableView />} />
          <Route path='/Timeline' element={<TimelineView eventData = {sampleData} />} />
        </Routes>
      </Layout>
    </Router>

  // <TableView></TableView>
  // <div>test</div>
  );
}

export default App;
