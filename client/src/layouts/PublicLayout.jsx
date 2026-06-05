import { Outlet } from 'react-router-dom'

const PublicLayout = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <Outlet />
  </div>
)

export default PublicLayout
