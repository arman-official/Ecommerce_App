import { Outlet } from 'react-router-dom'

const AdminLayout = () => (
  <div className="min-h-screen bg-white text-slate-900">
    <Outlet />
  </div>
)

export default AdminLayout
