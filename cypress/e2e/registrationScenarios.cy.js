import {
    LaunchApp, ValidateRegister, FillRegistration,
    ValidateRegistrationSuccess
} from "../pages/registrationPage";

describe('This will test the Registration Page', () => {

    it('Register the User', () => {
        cy.fixture('registrationData').then((data) => {

            LaunchApp();
            ValidateRegister();
            FillRegistration(data);
            ValidateRegistrationSuccess(data.username);
        });
    })

})