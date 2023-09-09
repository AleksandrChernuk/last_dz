import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../../redux/contactsSlice/operation";

const ContactForm = () => {
  const [phoneBook, setPhoneBook] = useState({ firstName: "", phoneNumber: "", lastName: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "firstName":
        return setPhoneBook((prev) => ({ ...prev, firstName: value }));
      case "lastName":
        return setPhoneBook((prev) => ({ ...prev, lastName: value }));
      case "phoneNumber":
        return setPhoneBook((prev) => ({ ...prev, phoneNumber: value }));

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber } = phoneBook;
    if (!firstName.trim() || !lastName.trim() || !phoneNumber.trim()) {
      return;
    }
    dispatch(createContact(phoneBook));

    setPhoneBook({ firstName: "", lastName: "", phoneNumber: "" });
  };

  return (
    <Grid
      container
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ flexDirection: { xs: "column", sm: "column", md: "row" }, my: 1, gap: "10px", flexWrap: "nowrap" }}
    >
      <Grid item sx={{ width: "100%" }} xs={12} sm={12} md={6} lg={6}>
        <TextField
          size="small"
          fullWidth
          id="outlined-basic"
          label="Имя"
          value={phoneBook.firstName}
          variant="outlined"
          name="firstName"
          onChange={handleChange}
        />
      </Grid>
      <Grid item sx={{ width: "100%" }} xs={12} sm={12} md={6} lg={6}>
        <TextField
          size="small"
          fullWidth
          id="outlined-basic"
          label="Фамилия"
          value={phoneBook.lastName}
          variant="outlined"
          name="lastName"
          onChange={handleChange}
        />
      </Grid>
      <Grid item sx={{ width: "100%" }} xs={12} sm={12} md={12} lg={12}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Номер телефона"
          variant="outlined"
          name="phoneNumber"
          type="phone"
          value={phoneBook.phoneNumber}
          onChange={handleChange}
          // helperText="Введите только цифры номера"
        />
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} xs={12} sm={12} md={6} lg={6}>
        <Button variant="contained" color="success" type="submit">
          Добавить
        </Button>
      </Grid>
    </Grid>
  );
};
export default ContactForm;
