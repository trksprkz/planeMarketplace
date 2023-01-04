import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Planes = () => {
    const navigate = useNavigate();
    const [planes, setPlanes] = useState([]);

    useEffect(() => {
        const url = "/api/v1/planes/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setPlanes(res))
            .catch(() => navigate("/"))
    }, []);


const allPlanes = planes.map((plane, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={plane.image}
          className="card-img-top"
          alt={`${plane.name} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{plane.name}</h5>
          <Link to={`/plane/${plane.id}`} className="btn custom-button">
            View Plane
          </Link>
        </div>
      </div>
    </div>
  ));
  const noPlane = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No planes listed yet. Why not <Link to="/new_plane">list one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Travel for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular models, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/plane" className="btn custom-button">
              Create New Listing
            </Link>
          </div>
          <div className="row">
            {planes.length > 0 ? allPlanes : noPlane}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};
export default Planes
