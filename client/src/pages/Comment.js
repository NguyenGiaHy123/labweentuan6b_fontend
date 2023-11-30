import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Basic() {
  return (
    <MDBContainer className="mt-0" style={{ maxWidth: "2000px" }}>
      <MDBRow className="justify-content-center">
        <MDBCol >
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5" }}
          >
            <MDBCardBody>
             

              <MDBCard className="mb-4">
                <MDBCardBody>

                <p className="small mb-0 ">By: Hy </p>
                  <p>Blog nay hay qua ban oi </p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      
                     
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0"></p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}