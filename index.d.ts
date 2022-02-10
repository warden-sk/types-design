/*
 * Copyright 2022 Marek Kobida
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
  type B<T> = A & Omit<T, 'className'>;
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      a: B<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
      abbr: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      address: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      area: B<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>>;
      article: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      aside: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      audio: B<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>>;
      b: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      base: B<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>>;
      bdi: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      bdo: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      blockquote: B<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>>;
      body: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>>;
      br: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>>;
      button: B<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
      canvas: B<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>>;
      caption: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      cite: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      code: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      col: B<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
      colgroup: B<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
      data: B<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>>;
      datalist: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>>;
      dd: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      del: B<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLElement>, HTMLElement>>;
      details: B<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>>;
      dfn: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      div: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
      dl: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>>;
      dt: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      em: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      embed: B<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>>;
      fieldset: B<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>>;
      figcaption: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      figure: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      footer: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      form: B<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;
      h1: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h2: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h3: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h4: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h5: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h6: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      head: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>>;
      header: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      hr: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>>;
      html: B<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>>;
      i: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      iframe: B<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>>;
      img: B<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;
      input: B<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
      ins: B<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>>;
      kbd: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      label: B<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>;
      legend: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>>;
      li: B<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
      link: B<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>>;
      main: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      map: B<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>>;
      mark: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      menu: B<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>>;
      meta: B<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>>;
      meter: B<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLElement>, HTMLElement>>;
      nav: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      noscript: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      object: B<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>>;
      ol: B<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>>;
      optgroup: B<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>>;
      option: B<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>;
      output: B<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLElement>, HTMLElement>>;
      p: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>;
      param: B<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>>;
      picture: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      pre: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>>;
      progress: B<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>>;
      q: B<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
      rp: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      rt: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      ruby: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      s: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      samp: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      script: B<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>>;
      section: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      select: B<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>;
      slot: B<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>>;
      small: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      source: B<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>>;
      span: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
      strong: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      style: B<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>>;
      sub: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      summary: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      sup: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      svg: React.SVGProps<SVGSVGElement>;
      table: B<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>>;
      tbody: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
      td: B<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>>;
      template: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>>;
      textarea: B<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>;
      tfoot: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
      th: B<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>>;
      thead: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
      time: B<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLElement>, HTMLElement>>;
      title: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>>;
      tr: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>>;
      track: B<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>>;
      u: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      ul: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>>;
      var: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      video: B<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>>;
      wbr: B<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    }
  }
}
