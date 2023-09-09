import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allContacts, removeContact } from "../redux/contactsSlice/operation";
import { selectIsContacts, selectIsIsloading } from "../redux/contactsSlice/selector";
import ContactForm from "../components/ContactForm/ContactForm";
import { Box, Grid, Paper, Button } from "@mui/material";

const ContactsPage = () => {
  const contactList = useSelector(selectIsContacts);
  // const isloading = useSelector(selectIsIsloading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {contactList && (
        <Grid container my={3} spacing={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {contactList.map(({ firstName, lastName, phoneNumber, _id }) => (
            <Grid item width="100%" key={_id}>
              <Paper key={_id}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", padding: "1.5rem" }}>
                  <Box>{firstName}</Box>
                  <Box>{lastName}</Box>
                  <Box>{phoneNumber}</Box>
                  <Button
                    variant="contained"
                    onClick={() => dispatch(removeContact(_id))}
                    color="warning"
                    sx={{ marginLeft: "auto" }}
                  >
                    Delete
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
export default ContactsPage;
