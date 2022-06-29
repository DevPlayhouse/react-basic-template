import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

const Homepage = lazy(() => import("pages/Homepage"));
const NotFoundPage = lazy(() => import("pages/404"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
