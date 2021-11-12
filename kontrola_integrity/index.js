/*
 * Copyright 2021 Marek Kobida
 */

const fs = require('fs');
const path = require('path');

const notAllowed = [
  'animate',
  'animateMotion',
  'animateTransform',
  'circle',
  'clipPath',
  'defs',
  'desc',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'metadata',
  'mpath',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'switch',
  'symbol',
  'text',
  'textPath',
  'tspan',
  'use',
  'view',
];

function test(input) {
  const elements = {};

  const rows = input.split(/\n/);

  rows.forEach(row => {
    const [, l, r] = /^\s+([^:]+):\s+([^;]+);/.exec(row) ?? [];
    l && r && notAllowed.indexOf(l) === -1 && (elements[l.replace(/"/g, '')] = r.replace(/A\s+\|\s+/g, ''));
  });

  return elements;
}

const a = test(fs.readFileSync(path.resolve(__dirname, './a.txt')).toString());
const b = test(fs.readFileSync(path.resolve(__dirname, './b.txt')).toString());

Object.entries(a).forEach(([aL, aR]) => {
  if (!(aL in b)) console.log(`"${aL}" is not in "b"`);
  else if (aR !== b[aL]) console.log(`"aR" does not equal "bR"\n    - ${aR}\n    - ${b[aL]}`);
});
