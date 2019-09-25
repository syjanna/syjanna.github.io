import React from 'react';
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      git_projects: []
    };
  }

  render() {
    const { git_projects = [] } = this.state;
    return (
      <div>
      <Container>
        <Row>
          <Col xs="2">
            Work Experience
          </Col>
          <Col>
            {profile.experiences.map(function (experience, i) {

              return (
                <div key={i}>
                  <h5> <a className="pretty-link" href={experience.url}>{experience.companyName}</a> </h5>
                  <subtitle> {experience.title} </subtitle>
                  <p> {experience.location}, {experience.startDate} to {experience.endDate}</p>
                  <p> {experience.desc} </p>
                </div>
              )
            })}
          </Col>

        </Row>
        <Row>
          <Col xs="2">
            Education
          </Col>
          <Col>
            {profile.education.map(function (education, i) {

              return(
                <div key={i}>
                  <h5> {education.name} </h5>
                  <subtitle> {education.degree} {education.graduationYear} </subtitle>

                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
      <br/>
      <div class="footer"></div>
      </div>
    );
  }
}

export default Profile;
