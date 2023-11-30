import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Add() {
  return (
    <section className="" style={{}}>
      <MDBContainer className="py-0" style={{ maxWidth: "2000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  

                  <div className="w-100">
                    <MDBTypography tag="h5">Add a comment</MDBTypography>
                    <div>
                      <a href="">
                      
                      </a>
                    </div>
                    <MDBTextArea label="What is your view?" rows={4} />

                    <div className="d-flex justify-content-between mt-3">
                    
                      <MDBBtn color="danger">
                        Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}