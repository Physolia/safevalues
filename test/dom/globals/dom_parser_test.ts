/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {domParserParseXml} from '../../../src/dom/globals/dom_parser';

const ERROR_REGEX = /unsafe XML/;

describe('domParserParseXml', () => {
  it('can parse XML', () => {
    const doc = domParserParseXml(new DOMParser(), '<mydoc />');
    expect(doc.documentElement.tagName).toEqual('mydoc');
  });

  it('rejects XML that contains root implicitly from the HTML namespace', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<img xmlns="http://www.w3.org/1999/xhtml" />',
      );
    }).toThrowError(ERROR_REGEX);
  });

  it('rejects XML that contains root explicitly from the HTML namespace', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<h:img xmlns:h="http://www.w3.org/1999/xhtml" />',
      );
    }).toThrowError(ERROR_REGEX);
  });

  it('rejects XML that contains nested element implicitly from the HTML namespace', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<doc xmlns="http://www.w3.org/1999/xhtml"><img /></doc>',
      );
    }).toThrowError(ERROR_REGEX);
  });

  it('rejects XML that contains nested element explicitly from the HTML namespace', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<doc xmlns:h="http://www.w3.org/1999/xhtml"><h:img /></doc>',
      );
    }).toThrowError(ERROR_REGEX);
  });

  it('rejects XML that contains nested HTML document', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<doc><root xmlns="http://www.w3.org/1999/xhtml"><img /></root></doc>',
      );
    }).toThrowError(ERROR_REGEX);
  });

  it('rejects XML that contains nested HTML document with explicit namespace', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<doc><root xmlns:h="http://www.w3.org/1999/xhtml"><h:img /></root></doc>',
      );
    }).toThrowError(ERROR_REGEX);
  });

  it('rejects XML that contains an element from encoded HTML namespace', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<img xmlns="http://www.w3.org/1999&#47;xhtml" />',
      );
    }).toThrowError(ERROR_REGEX);
  });

  it('rejects XML that contains element from the SVG namespace', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<doc><svg xmlns="http://www.w3.org/2000/svg" /></doc>',
      );
    }).toThrowError(ERROR_REGEX);
  });

  it('rejects XML that contains element from the MathML namespace', () => {
    expect(() => {
      domParserParseXml(
        new DOMParser(),
        '<doc><math xmlns="http://www.w3.org/1998/Math/MathML">oops!</math></doc>',
      );
    }).toThrowError(ERROR_REGEX);
  });
});
