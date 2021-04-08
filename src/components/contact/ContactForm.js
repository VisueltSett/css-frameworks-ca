import React from 'react';

const { Formik } = formik;

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  website: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function ContactForm() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: 'Mark Otto',
        email: '',
        website: '',
        terms: false,
      }}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <FormRow>
            <Form.Group as={Col} xs="12" md="6" controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs="12" md="6" controlId="validationFormik02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs="12" md="6" controlId="validationFormikWebsite">
              <Form.Label>Website</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">https://</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Website"
                  aria-describedby="inputGroupPrepend"
                  name="website"
                  value={values.website}
                  onChange={handleChange}
                  isInvalid={!!errors.website}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.website}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </FormRow>
          <Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Allow us to sell your personal details to whomever we want"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<ContactForm />);