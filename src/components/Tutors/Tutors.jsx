import React, { Component } from "react";

import TutorList from "./TutorsList/TutorsList";
import Button from "../Button/Button";
import Form from "../Form/Form";

import { Container, Box, Title, Img } from "./Tutors.styled";

import src from "./img/cat.png";

// function Tutors() {
//   return (
//     <Container>
//       <Box>
//         <Img src={src} alt="cat" />
//         <Title>Преподаватели</Title>
//       </Box>
//       <TutorList />
//       <Button text={"Добавить преподавателя"} />
//     </Container>
//   );
// }

// export default Tutors;

class Tutors extends Component {
  state = {
    isFormShow: false,
    // лучше называть ключи в стейте так как есть внутри инпута name
    lastName: "",
    firstName: "",
    patreonomic: "",
    phone: "",
    email: "",
    city: "",
  };

  toggleForm = () => {
    this.setState((prev) => ({
      isFormShow: !prev.isFormShow,
    }));
  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, email, patreonomic, city } = this.state;

    console.log({
      firstName,
      lastName,
      phone,
      patreonomic,
      city,
      email,
    });
  };

  render() {
    const { isFormShow, lastName, firstName, phone, patreonomic, city, email } =
      this.state;
    return (
      <Container>
        <Box>
          <Img src={src} alt="cat" />
          <Title>Преподаватели</Title>
        </Box>
        <TutorList />
        <Button text={"Добавить преподавателя"} onClick={this.toggleForm} />
        {isFormShow && (
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="lasttName"
              value={firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="patreonomic"
              placeholder="text"
              value={patreonomic}
              onChange={this.handleChange}
            />
            <input type="text" name="phone" placeholder="phone" value={phone} />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="city"
              value={city}
              onChange={this.handleChange}
            />
          </Form>
        )}
      </Container>
    );
  }
}

export default Tutors;
