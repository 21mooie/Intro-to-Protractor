describe('Adding a new event', function(){
    beforeEach(function(){
        browser.get('http://localhost:3000/#!/EventRatings/new');

        
    })
    describe('When the form is empty', function(){
        

        it('Should disable the Create button', function(){
            var button = element(by.buttonText('Create'));

            var css = button.getAttribute('class')

            expect(css).toMatch('disabled');
        })
    })
    describe('When specifying the name', function(){
        it('Should enable the Create button', function(){
            var button = element(by.buttonText('Create'));
            element(by.model('event.name')).sendKeys('A Sample Event');

            var css = button.getAttribute('class');

            expect(css).not.toMatch('disabled');
        })
    })
    describe('When the form is empty',()=>{
        describe('When specifying the name', ()=>{
            describe('When saving the form',()=>{
                it('Should add the event to the list', ()=>{
                    element(by.model('event.name')).sendKeys('Module 3');

                    var button = element(by.buttonText('Create'));

                    button.click();

                    browser.waitForAngular();

                    var list = element.all(by.binding('name'));

                    expect(list.getText()).toMatch('Module 3');
                })
            })
        })
    })
    
})