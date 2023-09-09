import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { setUser } from "../../redux/userSlice/slice";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../redux/userSlice/operation";

const validationSchema = yup.object({
  email: yup.string("Введите вашу почту").email("Enter a valid email").required("Поле обязательное"),
  password: yup.string("Введите пароль").min(4, "Нее мение 4 заков").required("Поле обязательное"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "", password: "" },

    validationSchema: validationSchema,

    onSubmit: (data) => {
      console.log(data);
      dispatch(loginUser(data));
      formik.resetForm();
    },
  });

  return (
    <Box
      onSubmit={formik.handleSubmit}
      component="form"
      my={2}
      sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      <ToastContainer />
      <Grid container justifyContent="center" direction="column" item xs={12} lg={6} sm={6} md={6} xl={6}>
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
            id="email"
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
            Войти
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
