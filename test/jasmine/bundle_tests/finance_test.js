var Plots = require('@src/plots/plots');
var Plotly = require('@lib/core');
var Ohlc = require('@lib/ohlc');
var Candlestick = require('@lib/candlestick');

var d3Select = require('../../strict-d3').select;
var createGraphDiv = require('../assets/create_graph_div');
var destroyGraphDiv = require('../assets/destroy_graph_div');

describe('Bundle with finance trace type', function() {
    'use strict';

    Plotly.register([Ohlc, Candlestick]);

    var mock = require('@mocks/finance_style.json');

    it('should not register transforms anymore', function() {
        var transformModules = Object.keys(Plots.transformsRegistry);

        expect(transformModules).toEqual([]);
    });

    it('should register the correct trace modules for the generated traces', function() {
        var traceModules = Object.keys(Plots.modules);

        // scatter is registered no matter what
        // ohlc uses some parts of box by direct require but does not need to register it.
        expect(traceModules).toEqual(['ohlc', 'candlestick']);
    });

    it('should graph ohlc and candlestick traces', function(done) {
        Plotly.newPlot(createGraphDiv(), mock.data, mock.layout).then(function() {
            var gSubplot = d3Select('g.cartesianlayer');

            expect(gSubplot.selectAll('g.trace.ohlc').size()).toEqual(1);
            expect(gSubplot.selectAll('g.trace.boxes').size()).toEqual(1);

            destroyGraphDiv();
            done();
        });
    });
});
