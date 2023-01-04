import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Plane = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [plane, setPlane] = useState({ location: "" });

    useEffect(() => {
        const url = `/api/v1/show/${params.id}`;
        fetch(url)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((response) => setRecipe(response))
          .catch(() => navigate("/planes"));
      }, [params.id]);

      const addHtmlEntities = (str) => {
        return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      };

      const planePrice = addHtmlEntities(plane.price);

  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={plane.image}
          alt={`${plane.name} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {plane.name}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="mb-2">Price;</h5>
              {priceList()}
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Price:</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: `${priceInstruction}`,
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-2">
            <button
              type="button"
              className="btn btn-danger"
            >
              Delete Listing
            </button>
          </div>
        </div>
        <Link to="/planes" className="btn btn-link">
          Back to directory
        </Link>
      </div>
    </div>
  );
};


  export default Plane;
