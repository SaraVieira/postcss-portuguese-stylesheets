/* global describe it */
var postcss = require('postcss')
var expect  = require('chai').expect

var plugin = require('../')

var test = (input, output, opts, done)  => {
	postcss([ plugin(opts) ]).process(input).then((result) => {
		expect(result.css).to.eql(output)
		expect(result.warnings()).to.be.empty
		done()
	}).catch((error) => done(error))
}

describe('postcss-portuguese-stylesheets', function () {

	it('converts fundo to background', (done) =>
        test('a{ fundo: #fff; }', 'a{ background: #fff; }', undefined, done))

	it('converts borda to border', (done) =>
        test('a{ borda: #fff; }', 'a{ border: #fff; }', {}, done))

	it('converts largura to width', (done) =>
        test('a{ largura: 300px; }', 'a{ width: 300px; }', { }, done))

	it('converts altura to height', (done) =>
        test('a{ altura: 300px; }', 'a{ height: 300px; }', { }, done))

	it('converts topo to top', (done) =>
        test('a{ topo: 300px; }', 'a{ top: 300px; }', { }, done))

	it('converts inferior to bottom', (done) =>
        test('a{ inferior: 300px; }', 'a{ bottom: 300px; }', { }, done))

	it('converts esquerda to left', (done) =>
        test('a{ esquerda: 300px; }', 'a{ left: 300px; }', { }, done))

	it('converts direita to right', (done) =>
        test('a{ direita: 300px; }', 'a{ right: 300px; }', { }, done))

	it('converts espaco-letras to letter-spacing', (done) =>
        test('a{ espaco-letras: -1px; }', 'a{ letter-spacing: -1px; }', { }, done))

	it('converts pointer to ponteiro', (done) =>
        test('a{ cursor: ponteiro; }', 'a{ cursor: pointer; }', { }, done))

	it('converts !caralho to !important', (done) =>
        test('a{ color: #000 !caralho; }', 'a{ color: #000 !important; }', {}, done))

})
