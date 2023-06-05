const { assert } = require("chai");
const domainName = require('./domainName')

describe("domain test", () => {
  it("Should pass basic tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("https://123.net"), "123");
    assert.equal(domainName("https://hyphen-site.org"), "hyphen-site");
    assert.equal(domainName("http://codewars.com"), "codewars");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
    assert.equal(domainName("http://www.codewars.com/kata/"), "codewars");
    assert.equal(domainName("icann.org"), "icann");
  })  
});