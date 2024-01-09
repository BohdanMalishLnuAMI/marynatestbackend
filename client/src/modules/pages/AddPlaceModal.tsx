import { Form, Field, Formik } from 'formik';
import { Button, DialogActions, Grid, Input, InputAdornment, Modal, Rating } from '@mui/material';
import { TAddFormValues } from './AllPlacesPage';
import { GoogleMap } from '../../components/GoogleMap';
import { splitCamelCase } from '../../utils/commonFunctions';
import { ILocation } from '../../utils/types';
import { addPlaceValidationSchema } from '../../utils/validationSchemas';

interface IAddPlaceModalProps {
  open         : boolean;
  handleClose  : () => void;
  handleSubmit : (val: TAddFormValues) => void;
}

const formFields = [
  { name: 'name' },
  { name: 'description' },
  {
    name: 'price',
    type: 'number',
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">$</InputAdornment>
      ),
    }
  },
  { name: 'formattedAddress' },
];

const initialValues = {
  name: '',
  description: '',
  price: 0,
  formattedAddress: '',
  rating: 0,
  location: {} as ILocation,
  photos: [],
};

export const AddPlaceModal = ({ open, handleClose, handleSubmit }: IAddPlaceModalProps) => {

  return (
    <Modal title="Add New Place" open={open}>
      <Formik
        validateOnChange
        initialValues    = {initialValues}
        validationSchema = {addPlaceValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors }) => {
          console.log('values', values, errors  )
          return (
            <Form>
              <GoogleMap
                width='100%'
                height='200px'
                places={[]}
                errorMsg={!values.location.lat ? 'Please select place' : ''}
                onMapClick={(value) => setFieldValue('location', value)}
              />

              <Grid container spacing={2} marginTop={2}>
                {formFields.map((field) => (
                  <Grid item xs={6}>
                    <Field
                      {...field}
                      label={splitCamelCase(field.name)}
                      name={field.name}
                      type={field.type || 'text'}
                      placeholder={`Enter ${splitCamelCase(field.name) }`}
                      component={Input}
                    />
                  </Grid>
                ))}
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="rating"
                  component={Rating}
                  onChange={(value: number) => setFieldValue('rating', value)}
                />
              </Grid>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
              </DialogActions>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  );
}