import ELD from "./Employee_Locator_URL.cy";

describe("Main Login", () => {
    beforeEach(() => {
        cy.visit(ELD);
        cy.viewport("macbook-16");
    });
    it('TestCase-01----Accounts/Finance', () => {
        cy.EmployeeLocator_login("1872", 12345);
        cy.get('.filter-card > .ant-card-body').should('be.visible');
        cy.get('.leaflet-container').should('be.visible');

        //Department Filter
        cy.get(':nth-child(1) > .ant-radio > .ant-radio-inner').click({ force: true });

        // cy.get('#rc_select_2').click();
        cy.get('#rc_select_2').then(($dropdown) => {
            $dropdown[0].scrollTop = 0; // Reset scroll position
        });
        cy.get('#rc_select_2').click();

        //Account/Finance
        cy.contains("Accounts / Finance").click()
        cy.get('.leaflet-container').should('be.visible');
        cy.wait(2000)

        //City
        cy.get('#rc_select_0').click();
        cy.get('div[title="Rawalpindi"] div').click()
        cy.wait(2000)
        // cy.contains('Rawalpindi').click({ force: true })
        //Sub-Area
        cy.get('#rc_select_1').click();
        cy.get('div[title="Mehmood Abad Pindora"] div').click();
        cy.get('.leaflet-container').should('be.visible');
    })
    it('Testcase-02----Admission & Discharge', () => {
        cy.EmployeeLocator_login("1872", 12345);
        cy.get('.filter-card > .ant-card-body').should('be.visible');
        cy.get('.leaflet-container').should('be.visible');

        //Department Filter
        cy.get(':nth-child(1) > .ant-radio > .ant-radio-inner').click({ force: true });
        // cy.get('#rc_select_2').click();
        // cy.get('#rc_select_2').then(($dropdown) => {
        //     $dropdown[0].scrollTop = 0; // Reset scroll position
        // });
        //Admission & Discharge"
        cy.get('#rc_select_2').click();
        cy.contains("Admission & Discharge").click()
        // cy.get('div.ant-select-item-option-active div').click();
        cy.get('.leaflet-container').should('be.visible');
        cy.wait(2000)

        //City
        cy.get('#rc_select_0').click();
        cy.get('div[title="Rawalpindi"] div').click()
        cy.wait(2000)
        // cy.contains('Rawalpindi').click({ force: true })
        //Sub-Area
        cy.get('#rc_select_1').click();
        cy.get('div[title="Mehmood Abad Pindora"] div').click({ force: true });
        cy.get('.leaflet-container').should('be.visible');


    })

    it('Testcase-03----Allied Services', () => {
        cy.EmployeeLocator_login("1872", 12345);
        cy.get('.filter-card > .ant-card-body').should('be.visible');
        cy.get('.leaflet-container').should('be.visible');

        //Department Filter
        cy.get(':nth-child(1) > .ant-radio > .ant-radio-inner').click({ force: true });
        cy.get('#rc_select_2').click();
        cy.get('#rc_select_2').then(($dropdown) => {
            $dropdown[0].scrollTop = 0; // Reset scroll position
        }); 
        //Admission & Discharge"
        // cy.get('#rc_select_2').click();
        cy.contains("Allied Services").click()
        // cy.get('div.ant-select-item-option-active div').click();
        cy.get('.leaflet-container').should('be.visible');
        cy.wait(2000)

        //City
        cy.get('#rc_select_0').click();
        cy.get('div[title="Rawalpindi"] div').click()
        cy.wait(2000)
        // cy.contains('Rawalpindi').click({ force: true })
        //Sub-Area
        cy.get('#rc_select_1').click();
        cy.get('div[title="Mehmood Abad Pindora"] div').click({ force: true });
        cy.get('.leaflet-container').should('be.visible');


    })

    it('Testcase-04----Bio-medical', () => {
        cy.EmployeeLocator_login("1872", 12345);
        cy.get('.filter-card > .ant-card-body').should('be.visible');
        cy.get('.leaflet-container').should('be.visible');

        //Department Filter
        cy.get(':nth-child(1) > .ant-radio > .ant-radio-inner').click({ force: true });
        cy.get('#rc_select_2').click();
        cy.get('#rc_select_2').then(($dropdown) => {
            $dropdown[0].scrollTop = 0; // Reset scroll position
        });
        //Admission & Discharge"
        // cy.get('#rc_select_2').click();
        cy.contains("Bio-medical").click()
        // cy.get('div.ant-select-item-option-active div').click();
        cy.get('.leaflet-container').should('be.visible');
        cy.wait(2000)

        //City
        cy.get('#rc_select_0').click();
        cy.get('div[title="Rawalpindi"] div').click()
        cy.wait(2000)
        // cy.contains('Rawalpindi').click({ force: true })
        //Sub-Area
        cy.get('#rc_select_1').click();
        cy.get('div[title="Mehmood Abad Pindora"] div').click({ force: true });
        cy.get('.leaflet-container').should('be.visible');


    })
})
