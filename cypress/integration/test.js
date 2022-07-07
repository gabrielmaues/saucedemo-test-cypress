import signup from '../pages/signupPage'
import signupFactory from '../factories/signupFactory'

describe('SD',()=>{

    it('Shopping', () =>{
        
        var test = signupFactory.test()
        
        signup.go()

        signup.login(test)
        
        signup.filter()

        signup.selectProducts()

        signup.yourCart()

        signup.personalInformation(test)

        signup.verify()
        
        signup.submit()
        
    })
    
});