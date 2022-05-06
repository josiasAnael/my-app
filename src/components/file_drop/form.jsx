import http from "../../services/serviceHttp";

import { Form, Formik, Field, ErrorMessage } from "formik";
import { ErrorInput } from "../../pages/alumno/custonError";
import { useUser } from "../../context/authcontext";
const { Get, Put } = http;

export const FormDocument = ({ file , setsending}) => {
  const { isadmin } = useUser();
  const onSubmit = (values) => {
    if (isadmin) {
      Put("/documents/" + file._id, values)
        .then((res) => {
          console.log("res", res);
          setsending(true);
        })
        .catch((err) => {});
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.status) {
      errors.status = "Seleccione un estado";
    }
    if (!values.feedback) {
      errors.status = "Ingrese un comentario";
    }
    return errors;
  };

  return (
    <div className="drop-file-preview">
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          status: "",
          feedback: "",
        }}
        validate={validate}
      >
        {({ errors ,isValid, isSubmitting}) => (
          <Form>
            <div className="form-group">
              <Field
                type="text"
                name="feedback"
                className="form-control input-sm mt-3"
                placeholder="Ingrese un comentario"
              />

              <ErrorMessage
                name="feedback"
                component={() => <ErrorInput error={errors.feedback} />}
              />
            </div>
            <div className="form-group">
              <Field
                component="select"
                name="status"
                className="form-control input-sm mt-3"
              >
                <option value="" disabled defaultValue={""}>
                  Seleccione un estado
                </option>
                <option value="Approved">Aprobado</option>
                <option value="Deprecated">Rechazado</option>
              </Field>
              <ErrorMessage
                name="status"
                component={() => <ErrorInput error={errors.status} />}
              />
            </div>
            <button type="submit"  disabled={isSubmitting || !isValid} className="btn btn-sm btn-primary mt-3 mb-3">
              Guardar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
