describe('testing form from Portnov school', () => {
    //переходим на сайт Портнова

   
    it('go to form', () => {
      cy.visit('http://www.energy-telecom.portnov.com/qa/') 
      cy.title().should('include', 'Energy Telecom - Service Review')
      }) 
      //Вод значений в поля формы
   
    it('ввод данных в поля', () => {
        cy.get("input[name='firstName']").click().type('Dmitrii')
        cy.get("input[name='lastName']").click().type('Doronin1$3%ddddddddddddddddddd1')
        cy.get("input[name='address']").click().type('Sunset Boulavard, 245, 1144444444+++++-66ddddd;;;;')
        cy.get("input[name='city']").click().type('Paris, 245, 1144444444+++++-66ddddd;;;;')
        cy.get("input[name='email']").click().type('oranjeviyyashek@gmail.com')
        cy.get("input[name='zip']").click().type('94085')
        cy.get('select.middleEdit1').select('IL')
        cy.get('#phone1').click().type('654')
        cy.get('#phone2').click().type('654')
        cy.get('#phone3').click().type('6545')
        
        cy.get(':nth-child(7) > .middleCombo2').select('Phone')
        cy.get("input[name='refferedBy']").click().type('Barack Obama')
    })
        //отправка формы
        it('отправка формы', () => {
        cy.get("input[name='submitData']").click()
            cy.location('pathname').should('eq', '/qa/FormCompleted.html')
        })

   //возвращение к заполнению данных
     
   it('возвращение', () => {
        cy.go('back')
      
    })  

   //проверка данных сохранившихся в форме

    it('input name', () => {
      cy.get("input[name='firstName']").should('have.value', 'Dmitrii')
      })

    it('input Last name', () => {  
      cy.get("input[name='lastName']").should('have.value', 'Doronin1$3%ddddddddddddddddddd1')
      })

      it('Street Address', () => {  
      cy.get("input[name='address']").should('have.value', 'Sunset Boulavard, 245, 1144444444+++++-66ddddd;;;;')
        })
        it('City', () => {  
          cy.get("input[name='city']").should('have.value', 'Paris, 245, 1144444444+++++-66ddddd;;;;')
            })
            it('email', () => {  
              cy.get("input[name='email']").should('have.value', 'oranjeviyyashek@gmail.com')
                })
                it('zip', () => {  
                  cy.get("input[name='zip']").should('have.value', '94085')
                    })
                    it('State', () => {  
                      cy.get('select.middleEdit1').should('have.value', 'IL')
                        })

      //проверка сообщений о пропуске обязательных данных
 it('missing data message', () => {
  
  //Очиска полей
  
  cy.get("input[name='firstName']").clear()
  cy.get("input[name='lastName']").clear()
  cy.get("input[name='address']").clear()
  cy.get("input[name='city']").clear()
  cy.get("input[name='email']").clear()
  cy.get("input[name='zip']").clear()
  cy.get('select.middleEdit1').select('--')
  cy.get('#phone1').clear()
  cy.get('#phone2').clear()
  cy.get('#phone3').clear()
  cy.get("input[name='refferedBy']").clear()

  //отправка пустой формы

  cy.get("input[name='submitData']").click()
 
//проверка сообщений об ошибках

   cy.get('.redFont').contains('Please enter your City')
})


})
