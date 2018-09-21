describe('Event List Details: ', () =>{
    describe('When clicking on an event', () =>{
        it('Should navigate to the details page', () => {            
            browser.get('http://localhost:3000/#!/EventRatings');

            var firstElement = element.all(by.binding('name')).first()

            var name;

            firstElement.getText().then(function(text){
                name = text;
            });
            
            firstElement.click();

            browser.waitForAngular();

            var header = element(by.binding('name'));

            expect(header.getText()).toMatch('Jazz On The Green');

        })
    })
})