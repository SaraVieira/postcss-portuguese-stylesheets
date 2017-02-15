var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-portuguese-stylesheets', function () {

    it('converts fundo to background', function (done) {
        test('a{ fundo: #fff; }', 'a{ background: #fff; }', undefined, done);
    });

    it('converts largura to width', function (done) {
        test('a{ largura: 300px; }', 'a{ width: 300px; }', { }, done);
    });

    it('converts altura to height', function (done) {
        test('a{ altura: 300px; }', 'a{ height: 300px; }', { }, done);
    });

    it('converts cima to top', function (done) {
        test('a{ cima: 300px; }', 'a{ top: 300px; }', { }, done);
    });

    it('converts baixo to bottom', function (done) {
        test('a{ baixo: 300px; }', 'a{ bottom: 300px; }', { }, done);
    });

    it('converts esquerda to left', function (done) {
        test('a{ esquerda: 300px; }', 'a{ left: 300px; }', { }, done);
    });

    it('converts direita to right', function (done) {
        test('a{ direita: 300px; }', 'a{ right: 300px; }', { }, done);
    });

    it('converts espaco-letras to letter-spacing', function (done) {
        test('a{ espaco-letras: -1px; }', 'a{ letter-spacing: -1px; }', { }, done);
    });

    it('converts pointer to ponteiro', function (done) {
        test('a{ cursor: ponteiro; }', 'a{ cursor: pointer; }', { }, done);
    });

    it('converts !caralho to !important', function (done) {
        test('a{ color: #000 !caralho; }',
             'a{ color: #000 !important; }', {}, done);
    });

});
