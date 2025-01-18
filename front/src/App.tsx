import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "modules/error-boundary";
import { Chat } from "pages/Chat";

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="*" element={<Navigate to="/chat" />} />
      </Routes>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
