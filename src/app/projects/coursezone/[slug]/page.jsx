"use client";
import React from "react";
import { maincourses } from "../data";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const { slug } = React.use(params);
  const router = useRouter();
  const course = maincourses.find((c) => c.id.toString() === slug);

  return (
    <div className="container my-5 d-flex justify-content-center">
      {course ? (
        <div
          className="card shadow-lg border-0 rounded-4"
          style={{ maxWidth: "700px" }}
        >
          {/* Header */}
          <div className="card-header bg-primary text-white text-center rounded-top-4">
            <h2 className="mb-0">{course.title}</h2>
          </div>

          {/* Body */}
          <div className="card-body p-4">
            <p className="card-text text-secondary fs-5">
              {course.description}
            </p>

            <div className="row mb-3">
              <div className="col-md-6">
                <p className="mb-1">
                  <span className="fw-bold">Duration:</span> {course.duration}
                </p>
              </div>
              <div className="col-md-6">
                <p className="mb-1">
                  <span className="fw-bold">Level:</span> {course.level}
                </p>
              </div>
            </div>

            <h5 className="fw-bold mb-3">Projects Included</h5>
            <ul className="list-group list-group-flush">
              {course.projects.map((project) => (
                <li
                  key={project.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {project.title}
                  <span className="badge bg-success rounded-pill">✔</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer with buttons */}
          <div className="card-footer bg-light d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary px-4"
              onClick={() => router.back()}
            >
              ← Go Back
            </button>
            <button className="btn btn-primary px-4">Enroll Now →</button>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger">Course not found</div>
      )}
    </div>
  );
}
