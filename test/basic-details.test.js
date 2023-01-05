import { html, fixture, expect, assert } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  let details;
  beforeEach(function() {
    details = document.createElement('basic-details');
    document.querySelector('body').appendChild(details);
  })

  it('num to word function exists', function(done) {
    (async function() {
      const res = await details.updateComplete;
      const amount = details.shadowRoot.querySelector("#amount")
      amount.dispatchEvent(new KeyboardEvent('keyup'));
      const word = details.shadowRoot.querySelector('#word');
      assert( word.innerHTML === "ten thousand ", `incorrect conversion ${word.innerHTML}`);
      // amount.value = "abcdefgh";
      // amount.dispatchEvent(new KeyboardEvent('keyup'));
      // console.log(word, word.innerHTML, amount)
      // assert(word.innerHTML === 'undefined', `incorrect conversion ${word.innerHTML}`);
      done();
    })();
    
  })
});
