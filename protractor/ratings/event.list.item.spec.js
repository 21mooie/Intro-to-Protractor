describe('Event List Details: ', () =>{
    describe('When clicking on an event', () =>{
        beforeEach(function(){
            browser.get('http://localhost:3000/#!/EventRatings');

            var firstElement = element.all(by.binding('name')).first()

            var name;

            firstElement.getText().then(function(text){
                name = text;
            });
            
            firstElement.click();

            browser.waitForAngular();
        })

        it('Should navigate to the details page', () => {            
            var header = element(by.binding('name'));

            expect(header.getText()).toMatch('Jazz On The Green');

        });

        it('Should update the url',function(){
            expect(browser.getCurrentUrl()).toMatch('EventRatings/');
        })
    })
})