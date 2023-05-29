import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../pages/MainLayout";
import { Courses } from "../pages/courses/Courses";
import { Anouncements } from "../pages/anouncements/Anouncements";
import { Notification } from "../pages/notifications/Notification";
import { Schedule } from "../pages/schedule/Schedule";
import { Materials } from "../pages/courses/materials/Materials";
import { MaterialsDetails } from "../pages/courses/materials/MaterialsDetails";
import { Submitted } from "../pages/courses/materials/detail-pages/Submitted";
import { Waiting } from "../pages/courses/materials/detail-pages/Waiting";
import { Late } from "../pages/courses/materials/detail-pages/Late";
import { Students } from "../pages/courses/students/Students";
import { StudentDetail } from "../pages/courses/students/StudentDetail";
import { Ratings } from "../pages/courses/Ratings";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="courses" element={<Courses />}>
            <Route path="materials" element={<Materials />} />
            <Route path="materials/:id/details" element={<MaterialsDetails />}>
              <Route path="submitted" element={<Submitted />} />
              <Route path="waiting" element={<Waiting />} />
              <Route path="late" element={<Late />} />
            </Route>
            <Route path="students" element={<Students />} />
            <Route path="students/:id/details" element={<StudentDetail />} />
            <Route path="ratings" element={<Ratings />} />
          </Route>
          <Route path="anouncements" element={<Anouncements />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </div>
  );
};
