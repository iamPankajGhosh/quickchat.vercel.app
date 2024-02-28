import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home";
import ChatPages from "./components/ChatPages";

import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home socket={socket} />}></Route>
      <Route path="/chat" element={<ChatPages socket={socket} />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
