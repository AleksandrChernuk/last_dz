import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../redux/userSlice/operation";
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
  name: yup.string("Введите ваше имя"),
  email: yup.string("Введите вашу почту").email("Enter a valid email").required("Поле обязательное"),
  password: yup.string("Введите пароль").min(4, "Нее мение 4 заков").required("Поле обязательное"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: "", password: "", email: "" },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(registerUser(values));
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Box
      onSubmit={formik.handleSubmit}
      component="form"
      my={2}
      sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      <Grid container justifyContent="center" direction="column" item xs={12} lg={6} sm={6} md={6} xl={6}>
        <Grid>
          <TextField
            label="Имя"
            id="name"
            name="name"
            sx={{ marginBottom: 2, width: "100%" }}
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid>
          <TextField
            label="Email"
            id="email"
            name="email"
            sx={{ marginBottom: 2, width: "100%" }}
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid>
          <TextField
            label="Пароль"
            id="password"
            name="password"
            sx={{ marginBottom: 2, width: "100%" }}
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>

        <Grid item alignSelf="center">
          <Button variant="contained" color="success" type="submit" disabled={!formik.isValid}>
            Регистрация
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
