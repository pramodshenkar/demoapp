import AppHeader from '@/components/AppHeader'              //import component that we want to test
import {mount} from '@vue/test-utils'                       //for mounting that component 

describe('AppHeader',() => {
        test('If user != LoggedIn => Dont show Logout button',() => {
            //create a variable through which we can assess various elements of mounted components.
            //Here we mounted AppHeader & create wrapper variable though which we can access AppHeader's button
            const wrapper = mount(AppHeader)    
            //Use find Method of wrapper to get button element from AppHeader. & check its visibility is true or false           
            expect(wrapper.find('button').isVisible()).toBe(false)
        })


        test('If user == LoggedIn => show Logout button',async () => {
            const wrapper = mount(AppHeader)
            //our isLoggedIn value is set to false 
            //we need to change it to true to check this test.
            //set isLoggedIn value => true using setData() method of wrapper

            //BUT main issue is that our test is not waiting to change DOM for button aftr setting isLoggedIn variable.
            //So here we use async while calling clouser & await with setData.
            
            await wrapper.setData({isLoggedIn:true})
            expect(wrapper.find('button').isVisible()).toBe(true)
        })
    })