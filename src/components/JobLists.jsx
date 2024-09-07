/* eslint-disable react/prop-types */
import JobCard from "./JobCard";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";
const JobLists = ({ isHome = true }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [jobs]);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "All Jobs"}
          </h2>

          {/* 遍历 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              <Spinner loading={loading} />
            ) : (
              <>
                {jobs.map((job) => {
                  return <JobCard job={job} key={job.id}></JobCard>;
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobLists;
