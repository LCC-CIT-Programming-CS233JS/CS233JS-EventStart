import './general';
const regeneratorRuntime = require("regenerator-runtime");

/* Part 1 - Check out the validation module in services/formValidation */
import validateRegistrationForm from './services/formValidation/validateRegistrationForm';
import apiCall from './services/api/apiCall';

import toastr from 'toastr';
import 'toastr/toastr.scss';

class Home {
  constructor() {
    /* Part 2 - Finish the constructor
       - Add references to each of these elements on the page
          this.$form = 
          this.$username = 
          this.$email = 
          this.$phone = 
          this.$age = 
          this.$profession = 
          this.$experience = 
          this.$comment = 
          this.$submit = 
          this.$loadingIndicator = 
      - Add a sumbit handler to the form that calls onFormSubmit
        - You don't actually want to submit the form so you'll have to 
          prevent the default behavior on the event when it fires.
          That means that you'll need the event as a parameter to onFormSubmit
    */
  }

  /* Part 3 - Write the first version of onFormSubmit */
  onFormSubmit(event) {
    // make sure the form is not submitted
    // get the values from the form and store in a variable

    /* call the validateRegistrationForm method 
       pass variable from line above as a parameter.
       It will return an object that you should store in a varable
    */

    // if the form is valid
    //    clear the errors
    //    call submitForm with the values from the form as a parameter
    //    (only the stub for submitForm is written. You'll write it  
    //     after testing validation and talking about the ajax call service)
    // otherwise
    //    clear all of the errors
    //    highlight the errors
    // end if
  }

  /* Part 4 - Finish these 4 UI related methods */

  /* This method packages up all of the form data into one object
     Get the data from each of the form fields.
     Notice how the experience that is checked is retrieved.
  */
  getFormValues() {
    return {
      username: "",
      email: "",
      phone: "",
      age: "",
      profession: "",
      experience: parseInt(document.querySelector('input[name="experience"]:checked').value),
      comment: "",
    };
  }

  /* This method clears each of the form fields.
     It gets called after the form is submitted successfully.
  */
  resetForm() {
    this.$username.value = '';
    this.$profession.value = 'school';
    this.$experience.checked = true;
  }

  /* This method styles each of the form fields that contains an error.
     It gets called after the form is validated when errors occurr.
  */
  highlightErrors(result) {
    if(!result.username) {
      this.$username.classList.add('is-invalid');
    }
  }

  /* This method removes the style for errors from all form fields.
     It gets called after the form is validated.
  */
  clearErrors() {
    this.$username.classList.remove('is-invalid');
  }

  /* TEST - Instantiate a Home object at bottom of file first */

  /* Part 5 - Check out the ajax module in services/api/apiCall.js */

  /* Part 6 - Finish this function.  It makes the api call.  TEST */
  submitForm(formValues) {

    // hide the submit button - adding bootstrap style visually-hidden will do that
    // show the loading indicator - removing bootstrap style visually-hidden will do that
    /* call apiCall and
       pass '/registration', the form values, and POST as parameters
       When the ajax call returns successfully
          show the submit button
          hide the loading indicator
          use toastr to show the response message
          toastr.success(response.message);
          reset the form
       When there's an error
          show the submit button
          hide the loading indicator
          use toastr to show an error message
          toastr.error('Error!');
    */
  }
} // end of the class definition

// add a window onload handler. 
// It should create an (unnamed) instance of the class for this page

