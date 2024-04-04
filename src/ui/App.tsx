import { Suspense, lazy } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import Layer from "./Layer/Layer";

// Lazy load the login page
const LoginPage = lazy(() => import('./containers/Login/LoginContainer'));


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<p> Cargando... </p>} >
                <Layer>
                    <NotFound>
                        <Route path="/iniciar-sesion" element={<LoginPage />} />
                    </NotFound>
                </Layer>
            </Suspense>
        </BrowserRouter>
    )
}

export default App