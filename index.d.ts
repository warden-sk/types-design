/*
 * Copyright 2021 Marek Kobida
 */

import 'react';
import * as t from './types';
import { EncodedClassName } from '@warden-sk/babel-plugin/private/decodeClassName';
import { EncodedResponsiveClassName } from '@warden-sk/babel-plugin/private/decodeResponsiveClassName';

declare global {
  interface A {
    alignContent?: EncodedResponsiveClassName<typeof t.AlignContent[number]>;
    alignItems?: EncodedResponsiveClassName<typeof t.AlignItems[number]>;
    alignSelf?: EncodedResponsiveClassName<typeof t.AlignSelf[number]>;
    className?: EncodedClassName;
    display?: EncodedResponsiveClassName<typeof t.Display[number]>;
    flex?: EncodedResponsiveClassName<typeof t.Flex[number]>;
    flexDirection?: EncodedResponsiveClassName<typeof t.FlexDirection[number]>;
    flexWrap?: EncodedResponsiveClassName<typeof t.FlexWrap[number]>;
    fontSize?: EncodedResponsiveClassName<typeof t.FontSize[number]>;
    justifyContent?: EncodedResponsiveClassName<typeof t.JustifyContent[number]>;
    justifyItems?: EncodedResponsiveClassName<typeof t.JustifyItems[number]>;
    justifySelf?: EncodedResponsiveClassName<typeof t.JustifySelf[number]>;
    m?: EncodedResponsiveClassName<typeof t.S[number]>;
    mB?: EncodedResponsiveClassName<typeof t.S[number]>;
    mL?: EncodedResponsiveClassName<typeof t.MarginLeft[number]>;
    mR?: EncodedResponsiveClassName<typeof t.S[number]>;
    mT?: EncodedResponsiveClassName<typeof t.S[number]>;
    mX?: EncodedResponsiveClassName<typeof t.S[number]>;
    mY?: EncodedResponsiveClassName<typeof t.S[number]>;
    p?: EncodedResponsiveClassName<typeof t.S[number]>;
    pB?: EncodedResponsiveClassName<typeof t.S[number]>;
    pL?: EncodedResponsiveClassName<typeof t.S[number]>;
    pR?: EncodedResponsiveClassName<typeof t.S[number]>;
    pT?: EncodedResponsiveClassName<typeof t.S[number]>;
    pX?: EncodedResponsiveClassName<typeof t.S[number]>;
    pY?: EncodedResponsiveClassName<typeof t.S[number]>;
    textAlign?: EncodedResponsiveClassName<typeof t.TextAlign[number]>;
    width?: EncodedResponsiveClassName<typeof t.Width[number]>;
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      a: A | React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
      abbr: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      address: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      area: A | React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
      article: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      aside: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      audio: A | React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
      b: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      base: A | React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
      bdi: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      bdo: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      blockquote: A | React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
      body: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
      br: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
      button: A | React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      canvas: A | React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
      caption: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      cite: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      code: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      col: A | React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
      colgroup: A | React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
      data: A | React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
      datalist: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
      dd: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      del: A | React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLElement>, HTMLElement>;
      details: A | React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
      dfn: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      div: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      dl: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
      dt: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      em: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      embed: A | React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
      fieldset: A | React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
      figcaption: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      figure: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      footer: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      form: A | React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
      h1: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h4: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h5: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h6: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      head: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
      header: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      hr: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
      html: A | React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
      i: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      iframe: A | React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
      img: A | React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      input: A | React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
      ins: A | React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
      kbd: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      label: A | React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
      legend: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
      li: A | React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
      link: A | React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
      main: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      map: A | React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
      mark: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      menu: A | React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
      meta: A | React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
      meter: A | React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
      nav: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      noscript: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      object: A | React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
      ol: A | React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
      optgroup: A | React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
      option: A | React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
      output: A | React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
      p: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      param: A | React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
      picture: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      pre: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
      progress: A | React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
      q: A | React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
      rp: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      rt: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      ruby: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      s: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      samp: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      script: A | React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
      section: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      select: A | React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
      slot: A | React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
      small: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      source: A | React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
      span: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      strong: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      style: A | React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
      sub: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      summary: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      sup: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      table: A | React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
      tbody: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      td: A | React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
      template: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
      textarea: A | React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
      tfoot: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      th: A | React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
      thead: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
      time: A | React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
      title: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
      tr: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
      track: A | React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
      u: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      ul: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
      var: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      video: A | React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
      wbr: A | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
