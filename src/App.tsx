import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { ScrollManager } from './components/ScrollManager'
import { Landing } from './pages/Landing'
import { DevLayout } from './sites/dev/DevLayout'
import { DevHome } from './sites/dev/DevHome'
import { ProjectPage } from './sites/dev/ProjectPage'
import { TeachLayout } from './sites/teach/TeachLayout'
import { TeachHome } from './sites/teach/TeachHome'

// Old links (/projects/:slug) predate the dev/teach split.
function LegacyProjectRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/dev/projects/${slug}`} replace />
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dev" element={<DevLayout />}>
            <Route index element={<DevHome />} />
            <Route path="projects/:slug" element={<ProjectPage />} />
          </Route>
          <Route path="/teach" element={<TeachLayout />}>
            <Route index element={<TeachHome />} />
          </Route>
          <Route path="/projects/:slug" element={<LegacyProjectRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  )
}
