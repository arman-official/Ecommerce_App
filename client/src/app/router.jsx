import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import CustomerLayout from '../layouts/CustomerLayout'
import SellerLayout from '../layouts/SellerLayout'
import AdminLayout from '../layouts/AdminLayout'
import ProtectedRoute from '../components/ProtectedRoute'
import HomePage from '../pages/public/HomePage'
import ProductsPage from '../pages/public/ProductsPage'
import ProductDetailsPage from '../pages/public/ProductDetailsPage'
import LoginPage from '../pages/public/LoginPage'
import RegisterPage from '../pages/public/RegisterPage'
import ForgotPasswordPage from '../pages/public/ForgotPasswordPage'
import ResetPasswordPage from '../pages/public/ResetPasswordPage'
import CustomerProfilePage from '../pages/customer/CustomerProfilePage'
import CustomerOrdersPage from '../pages/customer/CustomerOrdersPage'
import CustomerWishlistPage from '../pages/customer/CustomerWishlistPage'
import CustomerCartPage from '../pages/customer/CustomerCartPage'
import CustomerCheckoutPage from '../pages/customer/CustomerCheckoutPage'
import SellerDashboardPage from '../pages/seller/SellerDashboardPage'
import SellerProductsPage from '../pages/seller/SellerProductsPage'
import SellerOrdersPage from '../pages/seller/SellerOrdersPage'
import SellerAnalyticsPage from '../pages/seller/SellerAnalyticsPage'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import AdminUsersPage from '../pages/admin/AdminUsersPage'
import AdminSellersPage from '../pages/admin/AdminSellersPage'
import AdminProductsPage from '../pages/admin/AdminProductsPage'
import AdminCategoriesPage from '../pages/admin/AdminCategoriesPage'
import AdminOrdersPage from '../pages/admin/AdminOrdersPage'
import AdminAnalyticsPage from '../pages/admin/AdminAnalyticsPage'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailsPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/forgot-password', element: <ForgotPasswordPage /> },
      { path: '/reset-password', element: <ResetPasswordPage /> }
    ]
  },
  {
    element: <ProtectedRoute roles={['customer']} />,
    children: [
      {
        element: <CustomerLayout />,
        children: [
          { path: '/account/profile', element: <CustomerProfilePage /> },
          { path: '/account/orders', element: <CustomerOrdersPage /> },
          { path: '/account/wishlist', element: <CustomerWishlistPage /> },
          { path: '/cart', element: <CustomerCartPage /> },
          { path: '/checkout', element: <CustomerCheckoutPage /> }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoute roles={['seller']} />,
    children: [
      {
        element: <SellerLayout />,
        children: [
          { path: '/seller', element: <SellerDashboardPage /> },
          { path: '/seller/products', element: <SellerProductsPage /> },
          { path: '/seller/orders', element: <SellerOrdersPage /> },
          { path: '/seller/analytics', element: <SellerAnalyticsPage /> }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoute roles={['admin']} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: '/admin', element: <AdminDashboardPage /> },
          { path: '/admin/users', element: <AdminUsersPage /> },
          { path: '/admin/sellers', element: <AdminSellersPage /> },
          { path: '/admin/products', element: <AdminProductsPage /> },
          { path: '/admin/categories', element: <AdminCategoriesPage /> },
          { path: '/admin/orders', element: <AdminOrdersPage /> },
          { path: '/admin/analytics', element: <AdminAnalyticsPage /> }
        ]
      }
    ]
  }
])
