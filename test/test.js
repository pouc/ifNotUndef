var chai = require('chai');
var sinon = require('sinon');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
chai.use(require('chai-things'));

var expect = chai.expect;
var should = chai.should();

var exports = require('../index.js');

describe('ifnotundef...', function() {

	it('should be defined', function() {
		expect(exports.if).to.not.be.undefined;
	});

	it('should work with 2 params', function() {
		expect(exports.if(1, 2)).to.equal(1);
		expect(exports.if('undefined', 2)).to.equal('undefined');

		expect(exports.if(null, 2)).to.equal(2);
		expect(exports.if(undefined, 2)).to.equal(2);
		expect(exports.if(exports.toto, 2)).to.equal(2);
	});

	it('should work with 3 params', function() {
		expect(exports.if(1, 2, 3)).to.equal(2);
		expect(exports.if('undefined', 2, 3)).to.equal(2);

		expect(exports.if(null, 2, 3)).to.equal(3);
		expect(exports.if(undefined, 2, 3)).to.equal(3);
		expect(exports.if(exports.toto, 2, 3)).to.equal(3);

		expect(exports.if(null, 2, undefined)).to.be.undefined;
		expect(exports.if(undefined, 2, undefined)).to.be.undefined;
		expect(exports.if(exports.toto, 2, undefined)).to.be.undefined;
	});

});

describe('ifChildNotUndef...', function() {

	it('should be defined', function() {
		expect(exports.child).to.not.be.undefined;
	});

	var bla0 = {
		bla1: {
			bla2: {
				bla3: '^^'
			}
		}
	};

	it('should work with 3 params', function() {
		expect(exports.child(bla0, ['bla1', 'bla2', 'bla3'], 2)).to.equal('^^');
		expect(exports.child(bla0, ['bla1', 'bla3', 'bla4'], 2)).to.equal(2);

		expect(exports.child(null, undefined, 2)).to.equal(2);
		expect(exports.child(undefined, ['bla'], 2)).to.equal(2);
		expect(exports.child(exports.toto, 'bli', 2)).to.equal(2);
	});

	it('should work with 4 params', function() {
		expect(exports.child(bla0, ['bla1', 'bla2', 'bla3'], 2, 3)).to.equal(2);
		expect(exports.child(bla0, undefined, 2, 3)).to.equal(2);

		expect(exports.child(null, ['bla1', 'bla2', 'bla3'], 2, 3)).to.equal(3);
		expect(exports.child(undefined, ['bla1', 'bla2', 'bla3'], 2, 3)).to.equal(3);
		expect(exports.child(exports.toto, ['bla1', 'bla2', 'bla3'], 2, 3)).to.equal(3);
		expect(exports.child(bla0, ['bla1', 'bla2', 'bla4'], 2, 3)).to.equal(3);
		expect(exports.child(bla0, ['bla1', 'bla4', 'bla3'], 2, 3)).to.equal(3);
		expect(exports.child(bla0, ['bla4', 'bla2', 'bla3'], 2, 3)).to.equal(3);

		expect(exports.child(null, ['bla1', 'bla2', 'bla3'], 2, undefined)).to.be.undefined;
		expect(exports.child(undefined, ['bla1', 'bla2', 'bla3'], 2, undefined)).to.be.undefined;
		expect(exports.child(exports.toto, ['bla1', 'bla2', 'bla3'], 2, undefined)).to.be.undefined;
		expect(exports.child(bla0, ['bla1', 'bla2', 'bla4'], 2, undefined)).to.be.undefined;
	});

});