import Report from "./PDF/Report"
import { PDFViewer } from '@react-pdf/renderer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MilestoneReport from "./PDF/MilestoneReport";
import MilestoneHistoryReport from "./PDF/MilestoneHistoryReport";


function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={
            <PDFViewer width="100%" height="800px">
              <Report />
            </PDFViewer>
          }
          />
          
          
          <Route path="/MilestoneReport" element={
            <PDFViewer width="100%" height="800px">
              <MilestoneReport />
            </PDFViewer>
          }
          />
         
         
          <Route path="/MilestoneHistoryReport" element={
            <PDFViewer width="100%" height="800px">
              <MilestoneHistoryReport />
            </PDFViewer>
          }
          />
          

        </Routes>
      </Router>
    </>
  )
}

export default App
