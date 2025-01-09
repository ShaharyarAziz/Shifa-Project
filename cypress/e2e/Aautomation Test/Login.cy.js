import url_link from "./url.cy";

describe("Automation Testing", () => {
  beforeEach(() => {
    cy.visit(url_link);
    cy.viewport("macbook-16");
  });
  it("Login", () => {
    cy.visit(url_link);

    cy.get(".text-center > .mt-3").should("have.text", "Senegal786");
    cy.get("#email_address").type("cand1@test.com");
    cy.get("#password").type("GHJ78YUI)(b");
    cy.get("#login_frm > .btn").click();

    cy.wait(3000);
    //Work
    cy.get(":nth-child(1) > .nav-link").click();

    cy.wait(1500);

    //Talent
    cy.get('[for_tab="Talents"] > a').click();

    cy.wait(1500);

    //Add Talent
    //Add Talent
    cy.get('div[data-toggle="dropdown"]').eq(1).click();
    //Create
    cy.get('a[name="create"]').click();

    //Create Talent Form

    //First Name*
    cy.get("#Users_UID_first_name_create").type("Shaharyar");
    //Last Name*
    cy.get("#Users_UID_last_name_create").type("Aziz");
    // Date of Birth*
    cy.get("#Users_UID_dob_create_reset").click();
    cy.get("#Users_UID_dob_create").type("03/23/1998{enter}");
    // Mobile Number*
    cy.get('input[data-hidden="Users_UID_phone_work_create"]').type(3334445555);
    // Address*
    cy.get("#Users_UID_street_address_create").type("Islamabad");
    // City/State/Country*
    cy.get(".date_input > .selectize-control > .selectize-input").type(
      "New York, "
    );
    cy.contains(" New York, New York, United States of America").click();
    cy.wait(2000);
    // Email*
    cy.get("#Users_UID_email_address_create").type("shaharyar.aziz21@test.com");
    // Zip Code*
    cy.get("#Users_UID_zipcode_create").type(10001);

    //Save Form
    cy.get("#savebutton_bottom_EditView").click()
  });
});
