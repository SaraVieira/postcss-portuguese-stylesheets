var postcss = require('postcss');

module.exports = postcss.plugin('postcss-portuguese-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls(function transformDecl(decl) {
            // Properties
            decl.prop = decl.prop.replace('fundo', 'background');
            decl.prop = decl.prop.replace('borda', 'border');
            decl.prop = decl.prop.replace('borda-debaixo', 'border-bottom');
            decl.prop = decl.prop.replace('borda-decima', 'border-top');
            decl.prop = decl.prop.replace('borda-esquerda', 'border-left');
            decl.prop = decl.prop.replace('borda-direita', 'border-right');
            decl.prop = decl.prop.replace('conteudo', 'content');
            decl.prop = decl.prop.replace('pointeiro', 'cursor');
            decl.prop = decl.prop.replace('filtro', 'filter');
            decl.prop = decl.prop.replace('float', 'float');
            decl.prop = decl.prop.replace('tipografia', 'font-family');
            decl.prop = decl.prop.replace('largura', 'width');
            decl.prop = decl.prop.replace('altura', 'height');
            decl.prop = decl.prop.replace('raio-borda', 'border-radius');
            decl.prop = decl.prop.replace('altura-linha', 'line-height');
            decl.prop = decl.prop.replace('margem', 'margin');
            decl.prop = decl.prop.replace('margem-debaixo', 'margin-top');
            decl.prop = decl.prop.replace('margem-decima', 'margin-bottom');
            decl.prop = decl.prop.replace('margem-esquerda', 'margin-left');
            decl.prop = decl.prop.replace('margem-direita', 'margin-right');
            decl.prop = decl.prop.replace('largura-maxima', 'max-width');
            decl.prop = decl.prop.replace('largura-minima', 'min-width');
            decl.prop = decl.prop.replace('altura-maxima', 'max-height');
            decl.prop = decl.prop.replace('altura-minima', 'min-height');
            decl.prop = decl.prop.replace('transborda', 'overflow');
            decl.prop = decl.prop.replace('posição', 'position');
            decl.prop = decl.prop.replace('tabela', 'table');
            decl.prop = decl.prop.replace('index-z', 'z-index');
            decl.prop = decl.prop.replace('visibilidaed', 'visibility');
            decl.prop = decl.prop.replace('animação', 'animation');
            decl.prop = decl.prop.replace('atraso-animação', 'animation-delay');
            decl.prop = decl.prop.replace('direcao-animação', 'animation-direction');
            decl.prop = decl.prop.replace('duracao-animação', 'animation-duration');
            decl.prop = decl.prop.replace('sombra-caixa', 'box-shadow');
            decl.prop = decl.prop.replace('sombra-texto', 'text-shadow');
            decl.prop = decl.prop.replace('estilo-lista', 'list-style');
            decl.prop = decl.prop.replace('transparencia', 'opacity');
            decl.prop = decl.prop.replace('transicao', 'transition');
            decl.prop = decl.prop.replace('duracao-transicao', 'transition-duration');
            decl.prop = decl.prop.replace('propriadade-transicao', 'transition-property');
            decl.prop = decl.prop.replace('indentacao', 'text-indent');
            decl.prop = decl.prop.replace('espaco-letras', 'letter-spacing');

            // Position Values and Properties
            decl.value = decl.value.replace('esquerda', 'left');
            decl.prop = decl.prop.replace('esquerda', 'left');
            decl.value = decl.value.replace('direita', 'right');
            decl.prop = decl.prop.replace('direita', 'right');
            decl.value = decl.value.replace('cima', 'top');
            decl.prop = decl.prop.replace('cima', 'top');
            decl.value = decl.value.replace('baixo', 'bottom');
            decl.prop = decl.prop.replace('baixo', 'bottom');

            // Values
            decl.value = decl.value.replace('sombreado', 'underline');
            decl.value = decl.value.replace('ponteiro', 'pointer');
            decl.value = decl.value.replace('maiuscula', 'uppercase');
            decl.value = decl.value.replace('centro', 'center');
            decl.value = decl.value.replace('meio', 'middle');
            decl.value = decl.value.replace('nenhuma', 'none');
            decl.value = decl.value.replace('herdar', 'inherit');
            decl.value = decl.value.replace('repetir', 'repeat');
            decl.value = decl.value.replace('negrito', 'bold');
            decl.value = decl.value.replace('italico', 'italic');
            decl.value = decl.value.replace('transparente', 'transparent');
            decl.value = decl.value.replace('fixa', 'fixed');
            decl.value = decl.value.replace('absoluta', 'absolute');
            decl.value = decl.value.replace('relativa', 'relative');
            decl.value = decl.value.replace('colapsar', 'collapse');
            decl.value = decl.value.replace('escondido', 'hidden');

            if (decl.value.indexOf('!caralho') >= 0) {
                decl.value = decl.value.replace(/\s*!caralho\s*/, '');
                decl.important = true;
            }
        });
    };
});
