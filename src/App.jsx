import Report from "./PDF/Report"
import { PDFViewer } from '@react-pdf/renderer';


function App() {
  

  return (
    <>
      <PDFViewer width="100%" height="800px">
      <Report />
      </PDFViewer>
    </>
  )
}

export default App
