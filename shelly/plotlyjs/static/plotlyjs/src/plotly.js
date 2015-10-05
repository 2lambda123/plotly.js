// order of requires should matter only for interdependencies
// in attributes definitions. put the common modules first
exports.Lib = require('./lib/lib');
exports.util = require('./lib/plotly_util');

exports.micropolar = require('./polar/micropolar');
exports.micropolar.manager = require('./polar/micropolar_manager');

exports.Color = require('./color');
exports.Colorscale = require('./colorscale');
exports.Drawing = require('./drawing');
// then the plot structure
exports.Plots = require('./graph_obj');
exports.Axes = require('./axes');
exports.Colorbar = require('./colorbar');
exports.Fx = require('./graph_interact');
// then trace modules - scatter has to come first
exports.Scatter = require('./scatter');
exports.Bars = require('./bars');
exports.Boxes = require('./boxes');
exports.ErrorBars = require('./errorbars');
exports.Heatmap = require('./heatmap');
exports.Histogram = require('./histogram');
exports.Pie = require('./pie');
exports.Contour = require('./contour');
// and extra plot components
exports.Annotations = require('./annotations');
exports.Shapes = require('./shapes');
exports.Legend = require('./legend');
exports.ModeBar = require('./modebar');
exports.Icons = require('../build/ploticon');
require('../build/plotcss');

// GL3D
exports.Gl3dLayout = require('./gl3d/defaults/gl3dlayout');
exports.Gl3dAxes = require('./gl3d/defaults/gl3daxes');
exports.Scatter3D = require('./gl3d/defaults/scatter3d');
exports.Surface = require('./gl3d/defaults/surface');
exports.Mesh3D = require('./gl3d/defaults/mesh3d');
exports.Scene = require('./gl3d/scene');

// Geo
exports.GeoLayout = require('./geo/defaults/geolayout');
exports.GeoAxes = require('./geo/defaults/geoaxes');
exports.ScatterGeo = require('./geo/defaults/scattergeo');
exports.Choropleth = require('./geo/defaults/choropleth');
exports.Geo = require('./geo/geo');

// GL2D
exports.Gl2dLayout = require('./gl2d/defaults/gl2dlayout');
exports.Gl2dAxes = require('./gl2d/defaults/gl2daxes');
exports.ScatterGl = require('./gl2d/defaults/scattergl');
exports.Scene2D = require('./gl2d/scene2d');

// plot schema
exports.PlotSchema = require('./plotschema');

// configuration
exports.Config = require('./config');

// imaging Routines
exports.Snapshot = require('./snapshot/snapshot');

// Queue for undo/redo
exports.Queue = require('./queue');

// promise polyfill, embed rather than requiring dependencies
require('../../../../shelly/static/js/plugins/promise-1.0.0.min.js');
require('../../../../shelly/static/js/plugins/promise-done-1.0.0.js');
