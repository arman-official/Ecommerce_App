import { Outlet } from 'react-router-dom'

const CustomerLayout = () => (
  <div className="min-h-screen bg-white text-slate-900">
    <Outlet />
  </div>
)

export default CustomerLayout
