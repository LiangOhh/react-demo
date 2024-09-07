// import './App.css'
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobPage from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage, { jobLoader } from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// 方式一
const router = createBrowserRouter(
  // 创建路由元素
  createRoutesFromElements(
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route index element={<HomePage />} />,
      <Route path="/jobs" element={<JobPage />} />,
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const addJob = (jobMessage) => {
  // console.log(jobMessage);
  const res = fetch("api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobMessage),
  });
  return;
};
const deleteJob = async (id) => {
  // console.log("delete", id);
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
};
const updateJob = async (job) => {
  const res = fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
};
// 方式二
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "jobs", element: <JobPage /> },
      { path: "*", element: <NotFoundPage /> },
      {
        path: "job/:id",
        element: <DetailPage deleteJob={deleteJob} />,
        loader: jobLoader,
      },
      {
        path: "add-job",
        element: <AddPage addJobSubmit={addJob} />,
      },
      {
        path: "edit-job/:id",
        element: <EditPage updateJobSubmit={updateJob} />,
        loader: jobLoader,
      },
    ],
  },
  {
    path: "/test",
    element: <h1>hello world</h1>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
