import { Route, Routes } from "react-router-dom"

const NotFound: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <Routes>
      <Route path="*" element={<div>NotFound</div>} />
      { children }
    </Routes>
  )
}

export default NotFound