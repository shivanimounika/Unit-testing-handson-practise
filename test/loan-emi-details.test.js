import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { localize } from '@lion/localize';
import Sinon, { stub } from 'sinon';
import { Router } from '@vaadin/router';


describe('Loan EMI details', () => {
  // Write test cases inside this block


  let el;
    before(async() => {
        el = await fixture(html `<loanemi-details></loanemi-details>`);
    });

    it("_toBasicDetails() - called Router's go() to navigate to Basic Details Page", () => {
        const spy = Sinon.spy(Router, 'go');
        el._toBasicDetails();
        expect(spy).to.have.called;
        expect(spy.firstCall.args[0]).to.equal('/details')
        spy.restore();
    });

    it("_toCustomer() - called Router's go() to navigate to Customer Page", () => {
        const spy = Sinon.spy(Router, 'go');
        el._toCustomer();
        expect(spy).to.have.called;
        expect(spy.firstCall.args[0]).to.equal('/customer')
        spy.restore();
    });

  // it('checks the loan emi details',async()=>{
  //   const el=await fixture(html `<loanEMI-details></loanEMI-details>`);
  //   await el.shadowRoot.querySelector('.continue-btn').click();
  // });
  // it('cancels the loan emi details',async()=>{
  //   const el=await fixture(html `<loanEMI-details></loanEMI-details>`);
  //   await el.shadowRoot.querySelector('.cancel-btn').click();
  // });

  // it('should contain intRate', async() =>{
  //   const el=await fixture(html`<lion-input label="${localize.msg('change-language:intRate')}"></lion-input>`);
  //   await expect(el.label).to.match(/^[a-zA-Z\s]*$/);
  // });
});
