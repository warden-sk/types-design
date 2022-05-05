/*
 * Copyright 2022 Marek Kobida
 */

import 'react';
import * as t from '@warden-sk/design/private/storage';
import { EncodedClassName } from '@warden-sk/babel-plugin/private/decodeClassName';
import { EncodedResponsiveClassName } from '@warden-sk/babel-plugin/private/decodeResponsiveClassName';

declare global {
  interface EnhancedElementAttributes {
    alignContent?: EncodedResponsiveClassName<typeof t.AlignContent[number]>;
    alignItems?: EncodedResponsiveClassName<typeof t.AlignItems[number]>;
    alignSelf?: EncodedResponsiveClassName<typeof t.AlignSelf[number]>;
    className?: EncodedClassName;
    display?: EncodedResponsiveClassName<typeof t.Display[number]>;
    flex?: EncodedResponsiveClassName<typeof t.Flex[number]>;
    flexBasis?: EncodedResponsiveClassName<typeof t.FlexBasis[number]>;
    flexDirection?: EncodedResponsiveClassName<typeof t.FlexDirection[number]>;
    flexWrap?: EncodedResponsiveClassName<typeof t.FlexWrap[number]>;
    fontSize?: EncodedResponsiveClassName<typeof t.FontSize[number]>;
    fontWeight?: EncodedResponsiveClassName<typeof t.FontWeight[number]>;
    justifyContent?: EncodedResponsiveClassName<typeof t.JustifyContent[number]>;
    justifyItems?: EncodedResponsiveClassName<typeof t.JustifyItems[number]>;
    justifySelf?: EncodedResponsiveClassName<typeof t.JustifySelf[number]>;
    lineHeight?: EncodedResponsiveClassName<typeof t.LineHeight[number]>;
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
  type EnhancedElement<T> = EnhancedElementAttributes & Omit<T, 'className'>;
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      a: EnhancedElement<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
      abbr: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      address: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      area: EnhancedElement<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>>;
      article: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      aside: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      audio: EnhancedElement<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>>;
      b: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      base: EnhancedElement<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>>;
      bdi: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      bdo: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      blockquote: EnhancedElement<
        React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>
      >;
      body: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>>;
      br: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>>;
      button: EnhancedElement<
        React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
      >;
      canvas: EnhancedElement<
        React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>
      >;
      caption: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      cite: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      code: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      col: EnhancedElement<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
      colgroup: EnhancedElement<
        React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
      >;
      data: EnhancedElement<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>>;
      datalist: EnhancedElement<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>
      >;
      dd: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      del: EnhancedElement<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>>;
      details: EnhancedElement<
        React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>
      >;
      dfn: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      div: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
      dl: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>>;
      dt: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      em: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      embed: EnhancedElement<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>>;
      fieldset: EnhancedElement<
        React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>
      >;
      figcaption: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      figure: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      footer: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      form: EnhancedElement<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;
      h1: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h2: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h3: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h4: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h5: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      h6: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
      head: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>>;
      header: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      hr: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>>;
      html: EnhancedElement<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>>;
      i: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      iframe: EnhancedElement<
        React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>
      >;
      img: EnhancedElement<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;
      input: EnhancedElement<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
      ins: EnhancedElement<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>>;
      kbd: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      label: EnhancedElement<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>;
      legend: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>>;
      li: EnhancedElement<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
      link: EnhancedElement<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>>;
      main: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      map: EnhancedElement<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>>;
      mark: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      menu: EnhancedElement<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>>;
      meta: EnhancedElement<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>>;
      meter: EnhancedElement<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>>;
      nav: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      noscript: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      object: EnhancedElement<
        React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>
      >;
      ol: EnhancedElement<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>>;
      optgroup: EnhancedElement<
        React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>
      >;
      option: EnhancedElement<
        React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
      >;
      output: EnhancedElement<
        React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>
      >;
      p: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>;
      param: EnhancedElement<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>>;
      picture: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      pre: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>>;
      progress: EnhancedElement<
        React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>
      >;
      q: EnhancedElement<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
      rp: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      rt: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      ruby: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      s: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      samp: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      script: EnhancedElement<
        React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>
      >;
      section: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      select: EnhancedElement<
        React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
      >;
      slot: EnhancedElement<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>>;
      small: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      source: EnhancedElement<
        React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>
      >;
      span: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
      strong: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      style: EnhancedElement<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>>;
      sub: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      summary: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      sup: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      svg: React.SVGProps<SVGSVGElement>;
      table: EnhancedElement<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>>;
      tbody: EnhancedElement<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
      >;
      td: EnhancedElement<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>>;
      template: EnhancedElement<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>
      >;
      textarea: EnhancedElement<
        React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
      >;
      tfoot: EnhancedElement<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
      >;
      th: EnhancedElement<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>>;
      thead: EnhancedElement<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
      >;
      time: EnhancedElement<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>>;
      title: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>>;
      tr: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>>;
      track: EnhancedElement<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>>;
      u: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      ul: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>>;
      var: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
      video: EnhancedElement<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>>;
      wbr: EnhancedElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    }
  }
}
