describe("visit aceinvoice", function(){

	beforeEach(() => {
    // before each test, we can automatically preserve the
    // 'session_id' and 'remember_token' cookies. this means they
    // will not be cleared before the NEXT test starts.
    //
    // the name of your cookies will likely be different
    // this is an example

	    Cypress.Cookies.preserveOnce('_aceinvoice_session')
  })


	it("Visit URL", function(){
		cy.visit("https://www.aceinvoice.com/")
	})

	it("Click On Sign Up", function(){
		cy.get("ul li:last-child").click()
	})

	it("Enter Email", function(){
		cy.get("[data-test-id=signup-email]").type("sbgps49am079-march-19-2021-2142@example.com")
	} )

	it("Click Submit", function(){
		cy.get(".form-buttons input").click()
	} )

	it("Enter Password", function(){
		cy.get("[data-test-id=signup-password]").type("qwerssqsssassssertyqwerty")
	} )

	it("Click Continue", function(){
		cy.get(".form-buttons input").click()
	} )

	it("Enter First Name", function(){
		cy.get("[data-test-id=introduction-first-name]").type("Oliver")
	} )


	it("Enter Last Name", function(){
		cy.get("[data-test-id=introduction-last-name]").type("Smith")
	} )

	it("Select Time Zone", function(){
		cy.get("select").select('New Delhi').should('have.value', 'New Delhi')
	} )

	it("Select radio", function(){
		cy.get('input[type="radio"]').check('%d/%m/%Y',{force:true} )
	} )


	it("Select CheckBox", function(){
		cy.get('[type="checkbox"]').check({force:true})
	} )


	it("Click Cont", function(){
		cy.get("[data-test-id=introduction-submit]").click()
	} )


	it("Enter Company Name", function(){
		cy.get("[data-test-id=organization-name]").type("shubham00079 Private Limited")
	} )


	it("Click Cont Add Company", function(){
		cy.get("[data-test-id=organization-submit]").click()
	} )


	it("Click on Skip", function(){
		cy.get("[data-test-id=client-form-skip]").click()
	} )

	it("Assert 1", function(){
		cy.get("h4.pl-4").contains("Congratulations, you're all set!")

	} )


	it("Click on Continue", function(){
		cy.get("button[data-test-id=onboarding-continue]").click()

	} )


	it("Assert 2", function(){
		cy.get("div.verification-banner").contains("Verification email sent to")
	} )

	it("Click On Client", function(){
		cy.get("[data-test-id=header-clients]").click();
	} )


	it("Click on Add new Client", function(){
		cy.get("[data-test-id=client-add-new]").click()
	} )

	it("Enter Client Name", function(){
		cy.get("[data-test-id=client-name]").type("Trix Inc")
	} )


	it("Click on Client Submit", function(){
		cy.get("[data-test-id=client-submit]").click()
	} )

	it("Assert 3", function(){
		cy.get("[data-test-id=project-add-new]").contains("Add New Project")
	} )

	it("Enter Client Name", function(){
		cy.get("[data-test-id=project-name]").type("Trix Web Development")
	} )

	it("Select Billing Method", function(){
		cy.get("select[data-test-id=project-billing-method]").select("hourly_project_rate").should('have.value','hourly_project_rate')
	} )


	it("Enter Amount", function(){
		cy.get("input[data-test-id=project-rate]").clear().type(20)
	} )

	it("Click on Add-New-Project Submit", function(){
		cy.get("[data-test-id=project-save]").click({force:true})
	} )

	it("Assert 4", function(){
		cy.get("[data-test-id=project-name]").should('have.value',"Trix Web Development");
	} )

	it("Assert 5", function(){
		cy.get("div[data-test-id=project-billing-method]").contains("Hourly Project Rate")
	} )


	it("Assert 6", function(){
		cy.get("div span").contains("No rounding")
	} )

	it("Assert 7", function(){
		cy.get("[data-test-id=project-team-member-table-name-1]").contains("Oliver Smith")
	} )


} )


