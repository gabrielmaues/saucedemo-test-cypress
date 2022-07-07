class SignupPage{
    go(test){
        cy.visit('/')
    }

    login(test){
        //login
        cy.get('input[id="user-name"]').type(test.username)
        cy.get('input[id="password"]').type(test.password)
        cy.get('input[id="login-button"]').click()
        //verifica login
        cy.get('.title').should('have.text','Products')
    }

    filter(){
        cy.get('[data-test="product_sort_container"]').select('lohi')
    }

    selectProducts(){
        //produtos selecionados
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    }
    
    yourCart(){
        //fim das compras
        cy.get('.shopping_cart_badge').click()
        cy.get('.title').should('have.text','Your Cart')
        cy.get('#checkout').click()

    }

    personalInformation(test){
        //checkout information
        cy.get('input[id="first-name"]').type(test.firstname)
        cy.get('input[data-test="lastName"]').type(test.lastname)
        cy.get('input[id="postal-code"]').type(test.postalcode)
        cy.get('#continue').click()
    }
   
    verify(){
        //verificando e prosseguindo
        cy.get('#item_2_title_link').should('have.text','Sauce Labs Onesie')
        cy.get('#item_3_title_link').should('have.text','Test.allTheThings() T-Shirt (Red)')
    }
    
    submit(){
        //finish
        cy.get('#finish').click()
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
    }
}

export default new SignupPage;