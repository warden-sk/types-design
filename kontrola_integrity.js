/*
 * Copyright 2021 Marek Kobida
 */

const fs = require('fs');
const http = require('https');
const path = require('path');

function fileRows(file, from, to) {
  return file
    .toString()
    .split(/\n/)
    .filter((a, b) => b >= from - 1 && b <= to - 1);
}

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

function test(rows) {
  const elements = {};

  rows.forEach(row => {
    const [, l, r] = /^\s+([^:]+):\s+([^;]+);/.exec(row) ?? [];
    l && r && notAllowed.indexOf(l) === -1 && (elements[l.replace(/"/g, '')] = r.replace(/A\s+\|\s+/g, ''));
  });

  return elements;
}

http
  .request(
    {
      host: 'raw.githubusercontent.com',
      path: '/DefinitelyTyped/DefinitelyTyped/master/types/react/index.d.ts',
    },
    response => {
      let i = 0;
      let file = '';

      response.on('data', chunk => {
        file += chunk;
        i += chunk.byteLength;
        console.log(((i / response.headers['content-length']) * 100).toFixed(2));
      });

      response.on('end', () => {
        const a = test(fileRows(file, 3109, 3289));
        const b = test(fileRows(fs.readFileSync(path.resolve(__dirname, './index.d.ts')), 44, 156));

        Object.entries(a).forEach(([aL, aR]) => {
          if (!(aL in b)) console.log(`"${aL}" is not in "b"`);
          else if (aR !== b[aL]) console.log(`"aR" does not equal "bR"\n    - ${aR}\n    - ${b[aL]}`);
        });
      });
    }
  )
  .end();
