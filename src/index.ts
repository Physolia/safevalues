/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Safe builders */
export {safeAttrPrefix} from './builders/attribute_builders';
export {
  htmlFragment,
  safeFragment,
  svgFragment,
} from './builders/document_fragment_builders';
export {
  concatHtmls,
  doctypeHtml,
  htmlEscape,
  joinHtmls,
  scriptToHtml,
  scriptUrlToHtml,
} from './builders/html_builders';
export {
  HtmlSanitizer,
  sanitizeHtml,
  sanitizeHtmlAssertUnchanged,
  sanitizeHtmlToFragment,
} from './builders/html_sanitizer/html_sanitizer';
export {HtmlSanitizerBuilder} from './builders/html_sanitizer/html_sanitizer_builder';
export {
  appendParams,
  appendPathSegment,
  objectUrlFromScript,
  replaceFragment,
  toAbsoluteResourceUrl,
  trustedResourceUrl,
} from './builders/resource_url_builders';
export {
  concatScripts,
  safeScript,
  safeScriptWithArgs,
  valueAsScript,
} from './builders/script_builders';
export {
  concatStyleSheets,
  safeStyleSheet,
} from './builders/style_sheet_builders';
/** Types, constants and unwrappers */
export {
  SafeAttributePrefix,
  unwrapAttributePrefix,
} from './internals/attribute_impl';
export {EMPTY_HTML, SafeHtml, isHtml, unwrapHtml} from './internals/html_impl';
export {
  TrustedResourceUrl,
  isResourceUrl,
  unwrapResourceUrl,
} from './internals/resource_url_impl';
export {
  EMPTY_SCRIPT,
  SafeScript,
  isScript,
  unwrapScript,
} from './internals/script_impl';
export {
  SafeStyleSheet,
  isStyleSheet,
  unwrapStyleSheet,
} from './internals/style_sheet_impl';
