// // import React from "react";
// // import Start from "./modules/start/Start";
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// // import { Quiz } from "./modules/quiz/Quiz";
// // import { Result } from "./modules/result/Result";
// // import { UserProvider } from "./modules/user/User";
// // function App() {
// //   const router = createBrowserRouter([
// //     {
// //       path: '/',
// //       element: <Start></Start>
// //     },
// //     {
// //       path: '/quiz',
// //       element: <Quiz></Quiz>
// //     },
// //     {
// //       path: '/result',
// //       element: <Result></Result>
// //     },
// //   ])
// //   return (
// //     <UserProvider>
// //        <RouterProvider router={router} />
// //     </UserProvider>
// //   )
// // }
// // export default App

// import React from "react";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Start from "./modules/start/Start";
// import { Quiz } from "./modules/quiz/Quiz";
// import { Result } from "./modules/result/Result";
// import { UserProvider } from "./modules/user/User";
// import MainPage from "./modules/mainpage/MainPage";
// import NavBar from "./shared/components/NavBar";
// import About from "./shared/components/About";
// import Contact from "./shared/components/Contact";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <MainPage/> 
//     },
//     {
//       path: '/start',
//       element: <Start/>
//     },
//     {
//       path: '/quiz/:category',
//       element: <Quiz/> 
//     },
//     {
//       path: '/result',
//       element: <Result/> 
//     },
//     {
//       path: '/about',
//       element: <About/>
//     },
//     {
//       path: '/contact',
//       element: <Contact/> 
//     },
//   ]);

//   return (
//     <UserProvider>
//       <RouterProvider router={router} />
//       <NavBar/>
//     </UserProvider>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Start from "./modules/start/Start";
import { Quiz } from "./modules/quiz/Quiz";
import { Result } from "./modules/result/Result";
import { UserProvider } from "./modules/user/User";
import MainPage from "./modules/mainpage/MainPage";
import NavBar from "./shared/components/NavBar";
import About from "./shared/components/About";
import Contact from "./shared/components/Contact";

function App() {
  return (
    <UserProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/start" element={<Start />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
