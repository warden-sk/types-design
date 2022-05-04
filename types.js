"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Width = exports.TextAlign = exports.MarginLeft = exports.S = exports.LineHeight = exports.JustifySelf = exports.JustifyItems = exports.JustifyContent = exports.FontWeight = exports.FontSize = exports.FlexWrap = exports.FlexDirection = exports.FlexBasis = exports.Flex = exports.Display = exports.AlignSelf = exports.AlignItems = exports.AlignContent = exports.SelfPosition = exports.DisplayOutside = exports.DisplayLegacy = exports.DisplayInternal = exports.DisplayInside = exports.DisplayBox = exports.ContentPosition = exports.ContentDistribution = void 0;
// https://drafts.csswg.org/css-align/#typedef-content-distribution
exports.ContentDistribution = ['space-around', 'space-between', 'space-evenly', 'stretch'];
// https://drafts.csswg.org/css-align/#typedef-content-position
exports.ContentPosition = ['center', 'end', 'flex-end', 'flex-start', 'start'];
// https://drafts.csswg.org/css-display-3/#typedef-display-box
exports.DisplayBox = ['contents', 'none'];
// https://drafts.csswg.org/css-display-3/#typedef-display-inside
exports.DisplayInside = ['flex', 'grid'];
// https://drafts.csswg.org/css-display-3/#typedef-display-internal
exports.DisplayInternal = [];
// https://drafts.csswg.org/css-display-3/#typedef-display-legacy
exports.DisplayLegacy = ['inline-block', 'inline-flex', 'inline-grid'];
// https://drafts.csswg.org/css-display-3/#typedef-display-outside
exports.DisplayOutside = ['block', 'inline'];
// https://drafts.csswg.org/css-align/#typedef-self-position
exports.SelfPosition = ['center', 'end', 'flex-end', 'flex-start', 'self-end', 'self-start', 'start'];
/**
 * Properties
 */
// https://drafts.csswg.org/css-align/#propdef-align-content
exports.AlignContent = ['baseline', ...exports.ContentDistribution, ...exports.ContentPosition];
// https://drafts.csswg.org/css-align/#propdef-align-items
exports.AlignItems = ['baseline', 'stretch', ...exports.SelfPosition];
// https://drafts.csswg.org/css-align/#propdef-align-self
exports.AlignSelf = ['baseline', 'stretch', ...exports.SelfPosition];
// https://drafts.csswg.org/css-display-3/#propdef-display
exports.Display = [
    ...exports.DisplayBox,
    ...exports.DisplayInside,
    ...exports.DisplayInternal,
    ...exports.DisplayLegacy,
    ...exports.DisplayOutside,
];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex
exports.Flex = ['1', 'none'];
exports.FlexBasis = [
    '0',
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    '100',
    'auto',
];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction
exports.FlexDirection = ['column', 'column-reverse', 'row', 'row-reverse'];
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-wrap
exports.FlexWrap = ['nowrap', 'wrap', 'wrap-reverse'];
exports.FontSize = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
exports.FontWeight = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
// https://drafts.csswg.org/css-align/#propdef-justify-content
exports.JustifyContent = ['left', 'right', ...exports.ContentDistribution, ...exports.ContentPosition];
// https://drafts.csswg.org/css-align/#propdef-justify-items
exports.JustifyItems = ['baseline', 'stretch', ...exports.SelfPosition];
// https://drafts.csswg.org/css-align/#propdef-justify-self
exports.JustifySelf = ['baseline', 'stretch', ...exports.SelfPosition];
exports.LineHeight = ['1', '2', '3', '4', '5'];
/**
 * Spacing
 */
exports.S = [
    '!1',
    '!2',
    '!3',
    '!4',
    '!5',
    '!6',
    '!7',
    '!8',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    'auto',
];
exports.MarginLeft = [
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    ...exports.S,
];
exports.TextAlign = ['center', 'end', 'justify', 'left', 'right', 'start'];
exports.Width = exports.FlexBasis;
