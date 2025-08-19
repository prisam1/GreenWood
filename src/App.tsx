import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./layouts/layout";
import Leaderboard from "./pages/LeaderBoard/Leaderboard";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
