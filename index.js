(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    '+GEz': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        i = n('mXGw'),
        a = (r = i) && r.__esModule ? r : { default: r },
        o = n('NgeU'),
        s = n('g4AP'),
        l = n('4xBf'),
        u = n('XnTe'),
        c = n('XDlx'),
        d = n('xGSG'),
        p = n('zaKS'),
        f = n('3Urm');
      (a.default.Children.children = function (e) {
        return (
          a.default.Children.map(e, function (e) {
            return e;
          }) || []
        );
      }),
        Array.prototype.find ||
          Object.defineProperty(Array.prototype, 'find', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
              if (null === this)
                throw new TypeError(
                  'Array.prototype.find called on null or undefined',
                );
              if ('function' != typeof e)
                throw new TypeError('predicate must be a function');
              for (
                var t,
                  n = Object(this),
                  r = n.length >>> 0,
                  i = arguments[1],
                  a = 0;
                a < r;
                a++
              )
                if (a in n && ((t = n[a]), e.call(i, t, a, n))) return t;
            },
          });
      var m = {
        Table: o.Table,
        Tr: s.Tr,
        Td: l.Td,
        Th: u.Th,
        Tfoot: c.Tfoot,
        Thead: d.Thead,
        Sort: p.Sort,
        unsafe: f.unsafe,
      };
      (t.default = m),
        'undefined' != typeof window && (window.Reactable = m),
        (e.exports = t.default);
    },
    '/PKG': function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('W0B4'),
        s = n.n(o),
        l = n('f0d8'),
        u = n('7sLB'),
        c = n('Ka3z'),
        d = n.n(c),
        p = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleToggle = function () {
                t.props.toggleShowSourceQuestion();
              }),
              t
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.content,
                n = e.translatedContent,
                r = e.wrapStyle,
                i = e.isSourceQuestion;
              return a.a.createElement(
                'div',
                { className: d.a.questionDescription, style: r },
                n &&
                  a.a.createElement(
                    'div',
                    { className: d.a.translationTool },
                    a.a.createElement(
                      l.Tooltip,
                      {
                        placement: 'left',
                        title: '显示' + (i ? '中文' : '英文'),
                      },
                      a.a.createElement(l.Switch, {
                        on: i,
                        onToggle: this.handleToggle,
                      }),
                    ),
                  ),
                a.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: i ? t : n || t },
                }),
              );
            }),
            (t.propTypes = {
              content: s.a.string.isRequired,
              translatedContent: s.a.string,
              wrapStyle: s.a.object,
            }),
            (t = r.__decorate([u.withTranslationConfig], t))
          );
        })(a.a.PureComponent);
      t.default = p;
    },
    '3Urm': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      (t.unsafe = function (e) {
        return new i(e);
      }),
        (t.isUnsafe = function (e) {
          return e instanceof i;
        });
      var i = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.content = t);
        }
        return (
          r(e, [
            {
              key: 'toString',
              value: function () {
                return this.content;
              },
            },
          ]),
          e
        );
      })();
    },
    '45dc': function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('W0B4'),
        s = n.n(o),
        l = n('mTjJ'),
        u = n.n(l),
        c = s.a.arrayOf(
          s.a.shape({
            name: s.a.string.isRequired,
            translatedName: s.a.string,
            slug: s.a.string.isRequired,
          }),
        ),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.renderTags = function (e, t) {
              return e
                ? e.map(function (e) {
                    return a.a.createElement(
                      'a',
                      {
                        key: e.slug,
                        className: 'btn btn-xs btn-default',
                        href: t(e.slug),
                        title: e.name,
                      },
                      e.translatedName || e.name,
                    );
                  })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.topicTags,
                n = e.companyTags;
              return a.a.createElement(
                'div',
                { className: u.a.tagsCell },
                this.renderTags(t, function (e) {
                  return '/tag/' + e;
                }),
                this.renderTags(n, function (e) {
                  return '/company/' + e;
                }),
              );
            }),
            (t.propTypes = { topicTags: c, companyTags: c }),
            t
          );
        })(a.a.PureComponent);
      t.default = d;
    },
    '4xBf': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = function (e, t, n) {
          for (var r = !0; r; ) {
            var i = e,
              a = t,
              o = n;
            (r = !1), null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, a);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            (e = u), (t = a), (n = o), (r = !0), (s = u = void 0);
          }
        };
      var o,
        s = n('mXGw'),
        l = (o = s) && o.__esModule ? o : { default: o },
        u = n('vSiS'),
        c = n('M9nm'),
        d = n('3Urm'),
        p = n('DMGM'),
        f = (function (e) {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              a(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
                this,
                arguments,
              );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, l['default'].Component),
            i(t, [
              {
                key: 'stringifyIfNotReactComponent',
                value: function (e) {
                  return !(0, u.isReactComponent)(e) &&
                    (0, c.stringable)(e) &&
                    void 0 !== e
                    ? e.toString()
                    : null;
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = (0, p.filterPropsFrom)(this.props);
                  if ('object' == typeof this.props.column)
                    for (var n in this.props.column)
                      'key' !== n &&
                        'name' !== n &&
                        (t[n] = this.props.column[n]);
                  return (
                    (t.onClick = this.props.handleClick),
                    void 0 === this.props.data &&
                      (e = this.stringifyIfNotReactComponent(
                        this.props.children,
                      )),
                    (0, d.isUnsafe)(this.props.children)
                      ? l.default.createElement(
                          'td',
                          r({}, t, {
                            dangerouslySetInnerHTML: {
                              __html: this.props.children.toString(),
                            },
                          }),
                        )
                      : l.default.createElement(
                          'td',
                          t,
                          e || this.props.children,
                        )
                  );
                },
              },
            ]),
            t
          );
        })();
      t.Td = f;
    },
    '5Gna': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.toArray = function (e) {
          var t = [];
          for (var n in e) t[n] = e;
          return t;
        });
    },
    '7sLB': function (e, t, n) {
      'use strict';
      n.r(t);
      n('k4Gj');
      var r = n('bAEh');
      n.d(t, 'provideTranslationConfig', function () {
        return r.provideTranslationConfig;
      }),
        n.d(t, 'withTranslationConfig', function () {
          return r.withTranslationConfig;
        });
    },
    APty: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('AoLT'),
        s = n('f0d8'),
        l = n('J6Pw'),
        u = n('fY0+'),
        c = n.n(u),
        d = n('FwAx'),
        p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function () {
              var e = this.props.data;
              return e.loading || !e.companyTag
                ? a.a.createElement(s.LoadingArea, {
                    show: !0,
                    style: { height: 600 },
                  })
                : a.a.createElement(l.default, {
                    tag: e.companyTag,
                    favoritesLists: e.favoritesLists,
                    pageType: d.COMPANYTAGPAGE,
                  });
            }),
            (t = r.__decorate(
              [
                Object(o.compose)(
                  Object(o.graphql)(c.a, {
                    options: function (e) {
                      return { variables: { slug: e.slug } };
                    },
                  }),
                ),
              ],
              t,
            ))
          );
        })(a.a.PureComponent);
      t.default = p;
    },
    AmW1: function (e, t, n) {
      var r = n('ziR+');
      'string' == typeof r && (r = [[e.i, r, '']]);
      var i = {
        convertToAbsoluteUrls: !0,
        sourceMap: !1,
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n('UezQ')(r, i);
      r.locals && (e.exports = r.locals);
    },
    DMGM: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.filterPropsFrom = function (e) {
          e = e || {};
          var t = {};
          for (var n in e) n in r || (t[n] = e[n]);
          return t;
        });
      var r = {
        hideTableHeader: !0,
        column: !0,
        columns: !0,
        sortable: !0,
        filterable: !0,
        filtering: !0,
        onFilter: !0,
        filterPlaceholder: !0,
        filterClassName: !0,
        currentFilter: !0,
        sort: !0,
        sortBy: !0,
        sortableColumns: !0,
        onSort: !0,
        defaultSort: !0,
        defaultSortDescending: !0,
        itemsPerPage: !0,
        filterBy: !0,
        hideFilterInput: !0,
        noDataText: !0,
        currentPage: !0,
        onPageChange: !0,
        previousPageLabel: !0,
        nextPageLabel: !0,
        pageButtonLimit: !0,
        childNode: !0,
        data: !0,
        children: !0,
        onItemsPerPageChange: !0,
        rowOptions: !0,
      };
    },
    Dv4K: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('yQMT');
      n.d(t, 'QuestionListTable', function () {
        return r.default;
      });
      var i = n('/PKG');
      n.d(t, 'QuestionDescription', function () {
        return i.default;
      });
    },
    FwAx: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'ENCOUNTER_PERIOD_ENUM', function () {
          return a;
        }),
        n.d(t, 'TOPICTAGPAGE', function () {
          return o;
        }),
        n.d(t, 'COMPANYTAGPAGE', function () {
          return s;
        });
      var r = [
          'encounteredSixMonth',
          'encounteredOneYear',
          'encounteredTwoYear',
          'encounteredAll',
        ],
        i = ['6 months', '1 year', '2 years', 'All time'],
        a = {
          getKeys: function () {
            return r;
          },
          getValues: function () {
            return i;
          },
          getValueForKey: function (e) {
            var t = r.indexOf(e);
            return -1 === t ? 'N/A' : i[t];
          },
        },
        o = 1,
        s = 2;
    },
    GrkK: function (e, t, n) {
      var r = n('kchL');
      'string' == typeof r && (r = [[e.i, r, '']]);
      var i = {
        convertToAbsoluteUrls: !0,
        sourceMap: !1,
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n('UezQ')(r, i);
      r.locals && (e.exports = r.locals);
    },
    HZNx: function (e, t) {
      var n = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'favoriteFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'FavoriteNode' },
            },
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'idHash' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'id' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'name' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isPublicFavorite' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'viewCount' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creator' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isWatched' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'questions' },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'questionId' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'title' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'titleSlug' },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 175 },
      };
      n.loc.source = {
        body:
          'fragment favoriteFields on FavoriteNode {\n  idHash\n  id\n  name\n  isPublicFavorite\n  viewCount\n  creator\n  isWatched\n  questions {\n    questionId\n    title\n    titleSlug\n  }\n}\n',
        name: 'GraphQL request',
        locationOffset: { line: 1, column: 1 },
      };
      e.exports = n;
    },
    J6Pw: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('ooP5'),
        s = n('vdTQ'),
        l = n.n(s),
        u = n('W0B4'),
        c = n.n(u),
        d = n('9va6'),
        p = n.n(d),
        f = n('8Jek'),
        m = n.n(f),
        v = n('Dv4K'),
        h = n('IANA'),
        g = n('YJVQ'),
        y = n('KBpA'),
        b = n('f0d8'),
        k = n('FwAx'),
        S = n('AmW1'),
        P = n.n(S),
        _ = {
          encounteredSixMonth: 0,
          encounteredOneYear: 1,
          encounteredTwoYear: 2,
          encounteredAll: 3,
        },
        T = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = t.initState()),
              (t.filterStore = Object(y.getQuestionFilterStorage)(
                h.userStatus.username,
              )),
              (t.onToggleTags = function () {
                t.setState(function (e) {
                  return { isTagShown: !e.isTagShown };
                });
              }),
              (t.onQuestionClick = function () {
                var e = t.props,
                  n = e.pageType,
                  r = e.tag;
                t.filterStore.setLegacyFilters({
                  companySlugs: n === k.COMPANYTAGPAGE ? [r.slug] : void 0,
                  topicSlugs: n === k.TOPICTAGPAGE ? [r.slug] : void 0,
                });
              }),
              (t.getQuestions = function () {
                var e,
                  n,
                  i = t.props.tag.frequencies,
                  a = t.props.pageType,
                  o = JSON.parse(i),
                  s = [],
                  l = {};
                if (a === k.COMPANYTAGPAGE) {
                  s =
                    t.props.tag.questions &&
                    t.props.tag.questions.filter(t.filterByTimePeriod);
                  try {
                    for (
                      var u = r.__values(Object.entries(o)), c = u.next();
                      !c.done;
                      c = u.next()
                    ) {
                      var d = r.__read(c.value, 2),
                        f = d[0],
                        m = d[1];
                      l[f] = m[_[t.state.encounterTimePeriod] + 4];
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      c && !c.done && (n = u.return) && n.call(u);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                } else (s = t.props.tag.questions), (l = o);
                var v = t.props.favoritesLists,
                  h = {};
                v &&
                  p.a
                    .concat(
                      [],
                      v.privateFavorites[0]
                        ? v.privateFavorites[0].questions
                        : [],
                      v.publicFavorites[0]
                        ? v.publicFavorites[0].questions
                        : [],
                    )
                    .forEach(function (e) {
                      var t = e.questionId;
                      h[t] = !0;
                    });
                return s.map(function (e) {
                  var n = JSON.parse(e.stats),
                    r = t.state.encounterTimePeriod;
                  return Object.assign({}, e, {
                    id: parseInt(e.questionFrontendId, 10),
                    acRate: n.acRate,
                    frequency: l && l[e.questionId],
                    encountered:
                      o && o[e.questionId] ? o[e.questionId][_[r]] : 0,
                    isFavor: !!h[e.questionId],
                  });
                });
              }),
              (t.filterByTimePeriod = function (e) {
                return (
                  e.frequencyTimePeriod <= _[t.state.encounterTimePeriod] + 1
                );
              }),
              (t.handleTimePeriodChange = function (e) {
                t.setState({ encounterTimePeriod: e.value });
              }),
              t
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.initState = function () {
              var e = this,
                t = k.ENCOUNTER_PERIOD_ENUM.getKeys(),
                n = [],
                r = null;
              return (
                t.forEach(function (t) {
                  var i =
                    e.props.tag.questions &&
                    e.props.tag.questions.filter(function (e) {
                      return e.frequencyTimePeriod <= _[t] + 1;
                    });
                  if (i) {
                    var a = !i.length;
                    a || (r = r || t),
                      n.push({
                        label: k.ENCOUNTER_PERIOD_ENUM.getValueForKey(t),
                        value: t,
                        disabled: a,
                      });
                  }
                }),
                { isTagShown: !1, encounterTimePeriod: r, options: n }
              );
            }),
            (t.prototype.renderSubscribeLink = function () {
              return !h.features.subscription || h.userStatus.isPremium
                ? null
                : a.a.createElement(
                    'p',
                    null,
                    a.a.createElement(
                      'a',
                      { href: g.paths.subscribe() },
                      'Subscribe',
                    ),
                    ' to see which companies asked this question',
                  );
            }),
            (t.prototype.render = function () {
              var e = this.props.tag,
                t = e.name,
                n = e.translatedName,
                r = this.props.pageType,
                i = this.getQuestions(),
                s = i.filter(function (e) {
                  return 'ac' === e.status;
                }).length,
                u = i.length;
              return a.a.createElement(
                'div',
                { className: 'container' },
                a.a.createElement(
                  'div',
                  { className: 'row' },
                  a.a.createElement(
                    'div',
                    { className: 'col-md-offset-1 col-md-10' },
                    a.a.createElement(
                      'div',
                      { className: P.a.header },
                      a.a.createElement(
                        'h3',
                        { className: P.a.title },
                        a.a.createElement('span', {
                          className: 'fa fa-bookmark',
                        }),
                        n || t,
                      ),
                      this.renderSubscribeLink(),
                      r === k.COMPANYTAGPAGE &&
                        a.a.createElement(
                          b.Callout,
                          { type: 'info' },
                          a.a.createElement('h4', null, 'Notice'),
                          a.a.createElement(
                            'span',
                            null,
                            a.a.createElement(
                              'p',
                              null,
                              "We've improved our algorithm that calculates company tags and their frequencies to be more accurate and current.",
                            ),
                            a.a.createElement(
                              'p',
                              null,
                              'This page updates weekly on Saturday.',
                            ),
                            a.a.createElement(
                              'p',
                              null,
                              'You can filter the results by different time periods.',
                            ),
                          ),
                        ),
                      l.a
                        .getHTML('tag.problem_solved', {
                          numSolved: s,
                          numTotal: u,
                        })
                        .d(
                          a.a.createElement(
                            'p',
                            null,
                            'You have solved',
                            ' ',
                            a.a.createElement('strong', null, s, ' / ', u),
                            ' ',
                            'problems.',
                          ),
                        ),
                    ),
                    a.a.createElement(
                      'label',
                      { className: P.a.tagsToggl },
                      a.a.createElement('input', {
                        type: 'checkbox',
                        value: this.state.isTagShown,
                        onClick: this.onToggleTags,
                      }),
                      Object(g.t)('tag.show_tags').d('Show problem tags'),
                    ),
                    this.props.tag.frequencies &&
                      r === k.COMPANYTAGPAGE &&
                      a.a.createElement(
                        'span',
                        { className: m()(P.a.flexContainer, 'pull-right') },
                        a.a.createElement(
                          'label',
                          { className: P.a.periodLabel },
                          'Select time period:',
                        ),
                        a.a.createElement(
                          'span',
                          { className: P.a.periodSelector },
                          a.a.createElement(o.default, {
                            placeholder: 'Time Period',
                            clearable: !1,
                            searchable: !1,
                            onChange: this.handleTimePeriodChange,
                            options: this.state.options,
                            value: this.state.encounterTimePeriod,
                            wrapperStyle: { width: '110px', height: '30px' },
                          }),
                        ),
                      ),
                    a.a.createElement(v.QuestionListTable, {
                      questions: i,
                      isTagShown: this.state.isTagShown,
                      gaPrefix: 'tag-page',
                      onQuestionClick: this.onQuestionClick,
                    }),
                  ),
                ),
              );
            }),
            (t.propTypes = {
              tag: c.a.shape({
                name: c.a.string.isRequired,
                translatedName: c.a.string,
                questions: c.a.array.isRequired,
                frequencies: c.a.string,
              }).isRequired,
              pageType: c.a.number.isRequired,
            }),
            t
          );
        })(a.a.PureComponent);
      t.default = T;
    },
    JYjO: function (e, t, n) {
      var r = n('uWBI');
      'string' == typeof r && (r = [[e.i, r, '']]);
      var i = {
        convertToAbsoluteUrls: !0,
        sourceMap: !1,
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n('UezQ')(r, i);
      r.locals && (e.exports = r.locals);
    },
    Ka3z: function (e, t, n) {
      var r = n('Pazx');
      'string' == typeof r && (r = [[e.i, r, '']]);
      var i = {
        convertToAbsoluteUrls: !0,
        sourceMap: !1,
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n('UezQ')(r, i);
      r.locals && (e.exports = r.locals);
    },
    M9nm: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.stringable = function (e) {
          return null != e && typeof ('function' === e.toString);
        });
    },
    NgeU: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = function (e, t, n) {
          for (var r = !0; r; ) {
            var i = e,
              a = t,
              o = n;
            (r = !1), null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, a);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            (e = u), (t = a), (n = o), (r = !0), (s = u = void 0);
          }
        };
      var o,
        s = n('mXGw'),
        l = (o = s) && o.__esModule ? o : { default: o },
        u = n('DMGM'),
        c = n('qmIK'),
        d = n('3Urm'),
        p = n('xGSG'),
        f = (n('XnTe'), n('g4AP')),
        m = n('XDlx'),
        v = n('Y/n/'),
        h = (function (e) {
          function t(e) {
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              a(Object.getPrototypeOf(t.prototype), 'constructor', this).call(
                this,
                e,
              ),
              (this.state = {
                currentPage: this.props.currentPage
                  ? this.props.currentPage
                  : 0,
                currentSort: {
                  column: null,
                  direction: this.props.defaultSortDescending ? -1 : 1,
                },
                itemsPerPage: this.props.itemsPerPage || 0,
                filter: '',
              }),
              !1 !== e.sortBy || !1 !== e.defaultSort)
            ) {
              var n = e.sortBy || e.defaultSort;
              this.state.currentSort = this.getCurrentSort(n);
            }
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, l['default'].Component),
            i(t, [
              {
                key: 'filterBy',
                value: function (e) {
                  this.setState({ filter: e });
                },
              },
              {
                key: 'translateColumnsArray',
                value: function (e) {
                  return e.map(
                    function (e, t) {
                      if ('string' == typeof e) return { key: e, label: e };
                      if (void 0 !== e.sortable) {
                        var n = !0 === e.sortable ? 'default' : e.sortable;
                        this._sortable[e.key] = n;
                      }
                      return e;
                    }.bind(this),
                  );
                },
              },
              {
                key: 'parseChildData',
                value: function (e) {
                  var t = [],
                    n = void 0;
                  return (
                    void 0 !== e.children &&
                      l.default.Children.forEach(
                        e.children,
                        function (e) {
                          if (null != e)
                            switch (e.type) {
                              case p.Thead:
                                break;
                              case m.Tfoot:
                                void 0 !== n &&
                                  console.warn(
                                    'You can only have one <Tfoot>, but more than one was specified.Ignoring all but the last one',
                                  ),
                                  (n = e);
                                break;
                              case f.Tr:
                                var r = e.props.data || {};
                                l.default.Children.forEach(
                                  e.props.children,
                                  function (e) {
                                    if ('object' == typeof e && null != e)
                                      if (void 0 !== e.props.column) {
                                        var t = void 0;
                                        if (void 0 !== e.props.data)
                                          t = e.props.data;
                                        else {
                                          if (void 0 === e.props.children)
                                            return void console.warn(
                                              'exports.Td specified without a `data` property or children, ignoring',
                                            );
                                          t = e.props.children;
                                        }
                                        r[e.props.column] = {
                                          value: t,
                                          props: (0, u.filterPropsFrom)(
                                            e.props,
                                          ),
                                          __reactableMeta: !0,
                                        };
                                      } else
                                        console.warn(
                                          'exports.Td specified without a `column` property, ignoring',
                                        );
                                  },
                                ),
                                  t.push({
                                    data: r,
                                    props: (0, u.filterPropsFrom)(e.props),
                                    __reactableMeta: !0,
                                  });
                                break;
                              default:
                                console.warn(
                                  'The only possible children of <Table> are <Thead>, <Tr>, or one <Tfoot>.',
                                );
                            }
                        }.bind(this),
                      ),
                    { data: t, tfoot: n }
                  );
                },
              },
              {
                key: 'initialize',
                value: function (e) {
                  this.data = e.data || [];
                  var t = this.parseChildData(e),
                    n = t.data,
                    r = t.tfoot;
                  (this.data = this.data.concat(n)),
                    (this.tfoot = r),
                    this.initializeSorts(e),
                    this.initializeFilters(e);
                },
              },
              {
                key: 'initializeFilters',
                value: function (e) {
                  for (var t in ((this._filterable = {}), e.filterable)) {
                    var n = e.filterable[t],
                      r = void 0,
                      i = void 0;
                    if (n instanceof Object) {
                      if (void 0 === n.column) {
                        console.warn(
                          'Filterable column specified without column name',
                        );
                        continue;
                      }
                      (r = n.column),
                        (i =
                          'function' == typeof n.filterFunction
                            ? n.filterFunction
                            : 'default');
                    } else (r = n), (i = 'default');
                    this._filterable[r] = i;
                  }
                },
              },
              {
                key: 'initializeSorts',
                value: function (e) {
                  for (var t in ((this._sortable = {}), e.sortable)) {
                    var n = e.sortable[t],
                      r = void 0,
                      i = void 0;
                    if (n instanceof Object) {
                      if (void 0 === n.column)
                        return void console.warn(
                          'Sortable column specified without column name',
                        );
                      (r = n.column),
                        (i =
                          'function' == typeof n.sortFunction
                            ? n.sortFunction
                            : 'default');
                    } else (r = n), (i = 'default');
                    this._sortable[r] = i;
                  }
                },
              },
              {
                key: 'getCurrentSort',
                value: function (e) {
                  var t = void 0,
                    n = void 0;
                  if (e instanceof Object) {
                    if (void 0 === e.column)
                      return void console.warn(
                        'Default column specified without column name',
                      );
                    if (((t = e.column), void 0 !== e.direction))
                      if (1 === e.direction || 'asc' === e.direction) n = 1;
                      else if (-1 === e.direction || 'desc' === e.direction)
                        n = -1;
                      else {
                        var r = this.props.defaultSortDescending
                          ? 'descending'
                          : 'ascending';
                        console.warn(
                          'Invalid default sort specified. Defaulting to ' + r,
                        ),
                          (n = this.props.defaultSortDescending ? -1 : 1);
                      }
                    else n = this.props.defaultSortDescending ? -1 : 1;
                  } else
                    (t = e), (n = this.props.defaultSortDescending ? -1 : 1);
                  return { column: t, direction: n };
                },
              },
              {
                key: 'updateCurrentSort',
                value: function (e) {
                  !1 !== e &&
                    e.column !== this.state.currentSort.column &&
                    e.direction !== this.state.currentSort.direction &&
                    this.setState({ currentSort: this.getCurrentSort(e) });
                },
              },
              {
                key: 'updateCurrentPage',
                value: function (e) {
                  void 0 !== e &&
                    e !== this.state.currentPage &&
                    this.setState({ currentPage: e });
                },
              },
              {
                key: 'componentWillMount',
                value: function () {
                  this.initialize(this.props),
                    this.sortByCurrentSort(),
                    this.filterBy(this.props.filterBy);
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function (e) {
                  this.initialize(e),
                    this.updateCurrentPage(e.currentPage),
                    this.updateCurrentSort(e.sortBy),
                    this.sortByCurrentSort(),
                    this.filterBy(e.filterBy);
                },
              },
              {
                key: 'applyFilter',
                value: function (e, t) {
                  e = e.toLowerCase();
                  for (var n = [], r = 0; r < t.length; r++) {
                    var i = t[r].props.data;
                    for (var a in this._filterable)
                      if (void 0 !== i[a])
                        if (
                          void 0 === this._filterable[a] ||
                          'default' === this._filterable[a]
                        ) {
                          if (
                            (0, c.extractDataFrom)(i, a)
                              .toString()
                              .toLowerCase()
                              .indexOf(e) > -1
                          ) {
                            n.push(t[r]);
                            break;
                          }
                        } else if (
                          this._filterable[a](
                            (0, c.extractDataFrom)(i, a).toString(),
                            e,
                          )
                        ) {
                          n.push(t[r]);
                          break;
                        }
                  }
                  return n;
                },
              },
              {
                key: 'sortByCurrentSort',
                value: function () {
                  var e = this.state.currentSort;
                  null !== e.column &&
                    this.data.sort(
                      function (t, n) {
                        var r = (0, c.extractDataFrom)(t, e.column);
                        r = (0, d.isUnsafe)(r) ? r.toString() : r || '';
                        var i = (0, c.extractDataFrom)(n, e.column);
                        return (
                          (i = (0, d.isUnsafe)(i) ? i.toString() : i || ''),
                          void 0 === this._sortable[e.column] ||
                          'default' === this._sortable[e.column]
                            ? r < i
                              ? -1 * e.direction
                              : r > i
                              ? 1 * e.direction
                              : 0
                            : 1 === e.direction
                            ? this._sortable[e.column](r, i)
                            : this._sortable[e.column](i, r)
                        );
                      }.bind(this),
                    );
                },
              },
              {
                key: 'onSort',
                value: function (e) {
                  if (void 0 !== this._sortable[e]) {
                    var t = this.state.currentSort;
                    t.column === e
                      ? (t.direction *= -1)
                      : ((t.column = e),
                        (t.direction = this.props.defaultSortDescending
                          ? -1
                          : 1)),
                      this.setState({ currentSort: t }),
                      this.sortByCurrentSort(),
                      'function' == typeof this.props.onSort &&
                        this.props.onSort(t);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = [],
                    n = void 0,
                    i = !1,
                    a = void 0 === this.props.hideTableHeader,
                    o = null;
                  if (
                    (this.props.children &&
                      (this.props.children.length > 0 &&
                      this.props.children[0] &&
                      this.props.children[0].type === p.Thead
                        ? (o = this.props.children[0])
                        : this.props.children.type === p.Thead &&
                          (o = this.props.children)),
                    (n =
                      null !== o
                        ? p.Thead.getColumns(o)
                        : this.props.columns || []).length > 0 &&
                      ((i = !0), (n = this.translateColumnsArray(n))),
                    this.data &&
                      'function' == typeof this.data.map &&
                      (t = t.concat(
                        this.data.map(
                          function (e, t) {
                            var a = e,
                              o = {};
                            for (var s in (!0 === e.__reactableMeta &&
                              ((a = e.data), (o = e.props)),
                            a))
                              a.hasOwnProperty(s) &&
                                !1 === i &&
                                (function () {
                                  var e = { key: s, label: s };
                                  void 0 ===
                                    n.find(function (t) {
                                      return t.key === e.key;
                                    }) && n.push(e);
                                })();
                            return l.default.createElement(
                              f.Tr,
                              r({ columns: n, key: t, data: a }, o),
                            );
                          }.bind(this),
                        ),
                      )),
                    !0 === this.props.sortable)
                  )
                    for (var s = 0; s < n.length; s++)
                      this._sortable[n[s].key] = 'default';
                  var c = !1;
                  this.props.filterable &&
                    Array.isArray(this.props.filterable) &&
                    this.props.filterable.length > 0 &&
                    !this.props.hideFilterInput &&
                    (c = !0);
                  var d = t;
                  '' !== this.state.filter &&
                    (d = this.applyFilter(this.state.filter, d));
                  var m = this.state.itemsPerPage,
                    h = !1,
                    g = void 0,
                    y = this.state.currentPage,
                    b = this.props.pageButtonLimit || 10,
                    k = d;
                  this.props.itemsPerPage > 0 &&
                    (y > (g = Math.ceil(d.length / m)) - 1 && (y = g - 1),
                    (h = !0),
                    (k = d.slice(y * m, (y + 1) * m)));
                  var S = (0, u.filterPropsFrom)(this.props),
                    P = this.props.noDataText
                      ? l.default.createElement(
                          'tr',
                          { className: 'reactable-no-data' },
                          l.default.createElement(
                            'td',
                            { colSpan: n.length },
                            this.props.noDataText,
                          ),
                        )
                      : null,
                    _ = null;
                  return (
                    n &&
                      n.length > 0 &&
                      a &&
                      (_ = l.default.createElement(p.Thead, {
                        columns: n,
                        filtering: c,
                        onFilter: function (t) {
                          e.setState({ filter: t }),
                            e.props.onFilter && e.props.onFilter(t);
                        },
                        filterPlaceholder: this.props.filterPlaceholder,
                        filterClassName: this.props.filterClassName,
                        currentFilter: this.state.filter,
                        sort: this.state.currentSort,
                        sortableColumns: this._sortable,
                        onSort: this.onSort.bind(this),
                        key: 'thead',
                      })),
                    l.default.createElement(
                      'table',
                      S,
                      _,
                      l.default.createElement(
                        'tbody',
                        { className: 'reactable-data', key: 'tbody' },
                        k.length > 0 ? k : P,
                      ),
                      !0 === h
                        ? l.default.createElement(v.Paginator, {
                            colSpan: n.length,
                            pageButtonLimit: b,
                            numPages: g,
                            currentPage: y,
                            rowOptions: this.props.rowOptions,
                            itemsPerPage: m,
                            onPageChange: function (t) {
                              e.setState({ currentPage: t }),
                                e.props.onPageChange && e.props.onPageChange(t);
                            },
                            onItemsPerPageChange: function (t) {
                              e.setState({ itemsPerPage: t }),
                                e.props.onItemsPerPageChange &&
                                  e.props.onItemsPerPageChange(t);
                            },
                            previousPageLabel: this.props.previousPageLabel,
                            nextPageLabel: this.props.nextPageLabel,
                            key: 'paginator',
                          })
                        : null,
                      this.tfoot,
                    )
                  );
                },
              },
            ]),
            t
          );
        })();
      (t.Table = h),
        (h.defaultProps = {
          sortBy: !1,
          defaultSort: !1,
          defaultSortDescending: !1,
          itemsPerPage: 0,
          filterBy: '',
          hideFilterInput: !1,
        });
    },
    Os79: function (e, t, n) {
      var r = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getTopicTag' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'slug' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'String' },
                  },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topicTag' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'name' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'translatedName' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'slug' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'questions' },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'questionId' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'questionFrontendId',
                              },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'titleSlug' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'translatedTitle' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'stats' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'difficulty' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isPaidOnly' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'topicTags' },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'translatedName',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'companyTags' },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'translatedName',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'frequencies' },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favoritesLists' },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publicFavorites' },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'favoriteFields' },
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'privateFavorites' },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'favoriteFields' },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 636 },
      };
      r.loc.source = {
        body:
          '#import "../../question_detail/fragments/favorite.graphql"\n\nquery getTopicTag ($slug: String!) {\n  topicTag(slug: $slug) {\n    name\n    translatedName\n    slug\n    questions {\n      status\n      questionId\n      questionFrontendId\n      title\n      titleSlug\n      translatedTitle\n      stats\n      difficulty\n      isPaidOnly\n      topicTags {\n        name\n        translatedName\n        slug\n      }\n      companyTags {\n        name\n        translatedName\n        slug\n      }\n    }\n    frequencies\n  },\n  favoritesLists {\n    publicFavorites {\n      ...favoriteFields\n    }\n    privateFavorites {\n      ...favoriteFields\n    }\n  }\n}\n',
        name: 'GraphQL request',
        locationOffset: { line: 1, column: 1 },
      };
      var i = {};
      r.definitions = r.definitions.concat(
        n('HZNx').definitions.filter(function (e) {
          if ('FragmentDefinition' !== e.kind) return !0;
          var t = e.name.value;
          return !i[t] && ((i[t] = !0), !0);
        }),
      );
      var a = {};
      function o(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var r = e.definitions[n];
          if (r.name && r.name.value == t) return r;
        }
      }
      r.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          !(function e(t, n) {
            if ('FragmentSpread' === t.kind) n.add(t.name.value);
            else if ('VariableDefinition' === t.kind) {
              var r = t.type;
              'NamedType' === r.kind && n.add(r.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                e(t, n);
              }),
              t.variableDefinitions &&
                t.variableDefinitions.forEach(function (t) {
                  e(t, n);
                }),
              t.definitions &&
                t.definitions.forEach(function (t) {
                  e(t, n);
                });
          })(e, t),
            (a[e.name.value] = t);
        }
      }),
        (e.exports = r),
        (e.exports.getTopicTag = (function (e, t) {
          var n = { kind: e.kind, definitions: [o(e, t)] };
          e.hasOwnProperty('loc') && (n.loc = e.loc);
          var r = a[t] || new Set(),
            i = new Set(),
            s = new Set();
          for (
            r.forEach(function (e) {
              s.add(e);
            });
            s.size > 0;

          ) {
            var l = s;
            (s = new Set()),
              l.forEach(function (e) {
                i.has(e) ||
                  (i.add(e),
                  (a[e] || new Set()).forEach(function (e) {
                    s.add(e);
                  }));
              });
          }
          return (
            i.forEach(function (t) {
              var r = o(e, t);
              r && n.definitions.push(r);
            }),
            n
          );
        })(r, 'getTopicTag'));
    },
    Pazx: function (e, t, n) {
      (t = e.exports = n('Ai0b')(!1)).push([
        e.i,
        '/**\n * No mixins for output here.\n * If you want to expose some mixins,\n * define them to `legacy/common/styles/atomic`\n */\n/* stylelint-disable */\n.question-description__3U1T {\n  line-height: 24px;\n}\n.translation-tool__3Ffj {\n  float: right;\n}\n.translation-tool__3Ffj .tooltip {\n  margin-top: -7px;\n}\n',
        '',
      ]),
        (t.locals = {
          'question-description': 'question-description__3U1T',
          questionDescription: 'question-description__3U1T',
          'translation-tool': 'translation-tool__3Ffj',
          translationTool: 'translation-tool__3Ffj',
        });
    },
    ScHX: function (e, t) {
      var n = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'questionFields' },
            typeCondition: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'QuestionNode' },
            },
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'status' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'questionId' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'questionFrontendId' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'title' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'titleSlug' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'translatedTitle' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stats' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'difficulty' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isPaidOnly' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topicTags' },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'name' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'translatedName' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'slug' },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'frequencyTimePeriod' },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 236 },
      };
      n.loc.source = {
        body:
          'fragment questionFields on QuestionNode {\n  status\n  questionId\n  questionFrontendId\n  title\n  titleSlug\n  translatedTitle\n  stats\n  difficulty\n  isPaidOnly\n  topicTags {\n    name\n    translatedName\n    slug\n  }\n  frequencyTimePeriod\n}\n',
        name: 'GraphQL request',
        locationOffset: { line: 1, column: 1 },
      };
      e.exports = n;
    },
    XDlx: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = function (e, t, n) {
          for (var r = !0; r; ) {
            var i = e,
              a = t,
              o = n;
            (r = !1), null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, a);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            (e = u), (t = a), (n = o), (r = !0), (s = u = void 0);
          }
        };
      var a,
        o = n('mXGw'),
        s = (a = o) && a.__esModule ? a : { default: a },
        l = (function (e) {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              i(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
                this,
                arguments,
              );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, s['default'].Component),
            r(t, [
              {
                key: 'render',
                value: function () {
                  return s.default.createElement('tfoot', this.props);
                },
              },
            ]),
            t
          );
        })();
      t.Tfoot = l;
    },
    XnTe: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = function (e, t, n) {
          for (var r = !0; r; ) {
            var i = e,
              a = t,
              o = n;
            (r = !1), null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, a);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            (e = u), (t = a), (n = o), (r = !0), (s = u = void 0);
          }
        };
      var o,
        s = n('mXGw'),
        l = (o = s) && o.__esModule ? o : { default: o },
        u = n('3Urm'),
        c = n('DMGM'),
        d = (function (e) {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              a(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
                this,
                arguments,
              );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, l['default'].Component),
            i(t, [
              {
                key: 'render',
                value: function () {
                  return (0, u.isUnsafe)(this.props.children)
                    ? l.default.createElement(
                        'th',
                        r({}, (0, c.filterPropsFrom)(this.props), {
                          dangerouslySetInnerHTML: {
                            __html: this.props.children.toString(),
                          },
                        }),
                      )
                    : l.default.createElement(
                        'th',
                        (0, c.filterPropsFrom)(this.props),
                        this.props.children,
                      );
                },
              },
            ]),
            t
          );
        })();
      t.Th = d;
    },
    'Y/n/': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = function (e, t, n) {
          for (var r = !0; r; ) {
            var i = e,
              a = t,
              o = n;
            (r = !1), null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, a);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            (e = u), (t = a), (n = o), (r = !0), (s = u = void 0);
          }
        };
      var a,
        o = n('mXGw'),
        s = (a = o) && a.__esModule ? a : { default: a };
      function l(e) {
        return '#page-' + (e + 1);
      }
      var u = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            i(Object.getPrototypeOf(t.prototype), 'constructor', this).call(
              this,
              e,
            ),
            this.props.rowOptions &&
              (this.rowOptions = this.props.rowOptions
                .split(',')
                .map(function (e) {
                  return 'all' === e ? 'all' : parseInt(e, 10);
                }));
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, s['default'].Component),
          r(t, [
            {
              key: 'handlePrevious',
              value: function (e) {
                e.preventDefault(),
                  this.props.onPageChange(this.props.currentPage - 1);
              },
            },
            {
              key: 'handleNext',
              value: function (e) {
                e.preventDefault(),
                  this.props.onPageChange(this.props.currentPage + 1);
              },
            },
            {
              key: 'handlePageButton',
              value: function (e, t) {
                t.preventDefault(), this.props.onPageChange(e);
              },
            },
            {
              key: 'renderPrevious',
              value: function () {
                if (this.props.currentPage > 0)
                  return s.default.createElement(
                    'a',
                    {
                      className: 'reactable-previous-page',
                      href: l(this.props.currentPage - 1),
                      onClick: this.handlePrevious.bind(this),
                    },
                    this.props.previousPageLabel || 'Previous',
                  );
              },
            },
            {
              key: 'renderNext',
              value: function () {
                if (this.props.currentPage < this.props.numPages - 1)
                  return s.default.createElement(
                    'a',
                    {
                      className: 'reactable-next-page',
                      href: l(this.props.currentPage + 1),
                      onClick: this.handleNext.bind(this),
                    },
                    this.props.nextPageLabel || 'Next',
                  );
              },
            },
            {
              key: 'renderPageButton',
              value: function (e, t) {
                return s.default.createElement(
                  'a',
                  {
                    className: e,
                    key: t,
                    href: l(t),
                    onClick: this.handlePageButton.bind(this, t),
                  },
                  t + 1,
                );
              },
            },
            {
              key: 'render',
              value: function () {
                if (void 0 === this.props.colSpan)
                  throw new TypeError(
                    'Must pass a colSpan argument to Paginator',
                  );
                if (void 0 === this.props.numPages)
                  throw new TypeError(
                    'Must pass a non-zero numPages argument to Paginator',
                  );
                if (void 0 === this.props.currentPage)
                  throw new TypeError(
                    'Must pass a currentPage argument to Paginator',
                  );
                for (
                  var e = [],
                    t = this.props.pageButtonLimit,
                    n = this.props.currentPage,
                    r = this.props.numPages,
                    i = Math.round(t / 2),
                    a = t - i,
                    o = 0;
                  o < this.props.numPages;
                  o++
                ) {
                  var l = o,
                    u = 'reactable-page-button';
                  n === o && (u += ' reactable-current-page'),
                    e.push(this.renderPageButton(u, l));
                }
                return (
                  n - t + i > 0 &&
                    (n > r - i ? e.splice(0, r - t) : e.splice(0, n - t + i)),
                  r - n > a && e.splice(t, e.length - t),
                  s.default.createElement(
                    'tbody',
                    { className: 'reactable-pagination' },
                    s.default.createElement(
                      'tr',
                      null,
                      s.default.createElement(
                        'td',
                        { colSpan: this.props.colSpan },
                        this.rowOptions
                          ? s.default.createElement(
                              'span',
                              { className: 'row-selector' },
                              s.default.createElement(c, {
                                options: this.rowOptions,
                                selected: this.props.itemsPerPage,
                                onItemsPerPageChange: this.props
                                  .onItemsPerPageChange,
                              }),
                              'rows per page.',
                            )
                          : null,
                        r > 1
                          ? s.default.createElement(
                              'span',
                              { className: 'pagination-buttons' },
                              this.renderPrevious(),
                              e,
                              this.renderNext(),
                            )
                          : null,
                      ),
                    ),
                  )
                );
              },
            },
          ]),
          t
        );
      })();
      function c(e) {
        var t = e.options.map(function (e, t) {
          return 'all' === e
            ? s.default.createElement(
                'option',
                { key: t, value: Number.MAX_SAFE_INTEGER },
                'all',
              )
            : s.default.createElement('option', { key: t, value: e }, e);
        });
        return s.default.createElement(
          'select',
          {
            defaultValue: e.selected,
            onChange: function (t) {
              return e.onItemsPerPageChange(parseInt(t.target.value, 10));
            },
          },
          t,
        );
      }
      t.Paginator = u;
    },
    YUMJ: function (e, t, n) {
      (t = e.exports = n('Ai0b')(!1)).push([
        e.i,
        '/**\n * No mixins for output here.\n * If you want to expose some mixins,\n * define them to `legacy/common/styles/atomic`\n */\n/* stylelint-disable */\n.tags-cell__I1pn a {\n  margin: 2px;\n}\n',
        '',
      ]),
        (t.locals = {
          'tags-cell': 'tags-cell__I1pn',
          tagsCell: 'tags-cell__I1pn',
        });
    },
    bAEh: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'provideTranslationConfig', function () {
          return p;
        }),
        n.d(t, 'withTranslationConfig', function () {
          return f;
        });
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('KBpA'),
        s = n('ey5P'),
        l = Object(o.getStorage)(s.USER_SETTINGS),
        u = a.a.createContext(),
        c = u.Provider,
        d = u.Consumer,
        p = function (e) {
          return (function (t) {
            function n(e) {
              var n = t.call(this, e) || this;
              return (
                (n.handleToggleShowSourceQuestion = function () {
                  n.setState(
                    function (e) {
                      return { isSourceQuestion: !e.isSourceQuestion };
                    },
                    function () {
                      l.set(s.IS_SOURCE_QUESTION, n.state.isSourceQuestion);
                    },
                  );
                }),
                (n.state = {
                  isSourceQuestion: !!l.get(s.IS_SOURCE_QUESTION, !1),
                }),
                n
              );
            }
            return (
              r.__extends(n, t),
              (n.prototype.render = function () {
                var t = {
                  isSourceQuestion: this.state.isSourceQuestion,
                  toggleShowSourceQuestion: this.handleToggleShowSourceQuestion,
                };
                return a.a.createElement(
                  c,
                  { value: t },
                  a.a.createElement(e, r.__assign({}, this.props)),
                );
              }),
              n
            );
          })(i.Component);
        },
        f = function (e) {
          return function (t) {
            return a.a.createElement(d, null, function (n) {
              return a.a.createElement(e, r.__assign({}, n, t));
            });
          };
        };
    },
    'fY0+': function (e, t, n) {
      var r = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getCompanyTag' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'slug' },
                },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'String' },
                  },
                },
                directives: [],
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'companyTag' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'name' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'translatedName' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'frequencies' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'questions' },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'questionFields' },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favoritesLists' },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publicFavorites' },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'favoriteFields' },
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'privateFavorites' },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'favoriteFields' },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
        loc: { start: 0, end: 411 },
      };
      r.loc.source = {
        body:
          '#import "../../question_detail/fragments/favorite.graphql"\n#import "../../question_detail/fragments/question.graphql"\n\nquery getCompanyTag ($slug: String!) {\n  companyTag(slug: $slug) {\n    name\n    translatedName\n    frequencies\n    questions {\n      ...questionFields\n    }\n  },\n  favoritesLists {\n    publicFavorites {\n      ...favoriteFields\n    }\n    privateFavorites {\n      ...favoriteFields\n    }\n  }\n}\n',
        name: 'GraphQL request',
        locationOffset: { line: 1, column: 1 },
      };
      var i = {};
      function a(e) {
        return e.filter(function (e) {
          if ('FragmentDefinition' !== e.kind) return !0;
          var t = e.name.value;
          return !i[t] && ((i[t] = !0), !0);
        });
      }
      (r.definitions = r.definitions.concat(a(n('HZNx').definitions))),
        (r.definitions = r.definitions.concat(a(n('ScHX').definitions)));
      var o = {};
      function s(e, t) {
        for (var n = 0; n < e.definitions.length; n++) {
          var r = e.definitions[n];
          if (r.name && r.name.value == t) return r;
        }
      }
      r.definitions.forEach(function (e) {
        if (e.name) {
          var t = new Set();
          !(function e(t, n) {
            if ('FragmentSpread' === t.kind) n.add(t.name.value);
            else if ('VariableDefinition' === t.kind) {
              var r = t.type;
              'NamedType' === r.kind && n.add(r.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                e(t, n);
              }),
              t.variableDefinitions &&
                t.variableDefinitions.forEach(function (t) {
                  e(t, n);
                }),
              t.definitions &&
                t.definitions.forEach(function (t) {
                  e(t, n);
                });
          })(e, t),
            (o[e.name.value] = t);
        }
      }),
        (e.exports = r),
        (e.exports.getCompanyTag = (function (e, t) {
          var n = { kind: e.kind, definitions: [s(e, t)] };
          e.hasOwnProperty('loc') && (n.loc = e.loc);
          var r = o[t] || new Set(),
            i = new Set(),
            a = new Set();
          for (
            r.forEach(function (e) {
              a.add(e);
            });
            a.size > 0;

          ) {
            var l = a;
            (a = new Set()),
              l.forEach(function (e) {
                i.has(e) ||
                  (i.add(e),
                  (o[e] || new Set()).forEach(function (e) {
                    a.add(e);
                  }));
              });
          }
          return (
            i.forEach(function (t) {
              var r = s(e, t);
              r && n.definitions.push(r);
            }),
            n
          );
        })(r, 'getCompanyTag'));
    },
    g4AP: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = function (e, t, n) {
          for (var r = !0; r; ) {
            var i = e,
              a = t,
              o = n;
            (r = !1), null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, a);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            (e = u), (t = a), (n = o), (r = !0), (s = u = void 0);
          }
        };
      var o,
        s = n('mXGw'),
        l = (o = s) && o.__esModule ? o : { default: o },
        u = n('4xBf'),
        c = n('5Gna'),
        d = n('DMGM'),
        p = (function (e) {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              a(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
                this,
                arguments,
              );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, l['default'].Component),
            i(t, [
              {
                key: 'render',
                value: function () {
                  var e = (0, c.toArray)(
                    l.default.Children.children(this.props.children),
                  );
                  this.props.data &&
                    this.props.columns &&
                    'function' == typeof this.props.columns.map &&
                    (void 0 === e.concat && console.log(e),
                    (e = e.concat(
                      this.props.columns.map(
                        function (e, t) {
                          var n = e.props,
                            i = void 0 === n ? {} : n,
                            a = (function (e, t) {
                              var n = {};
                              for (var r in e)
                                t.indexOf(r) >= 0 ||
                                  (Object.prototype.hasOwnProperty.call(e, r) &&
                                    (n[r] = e[r]));
                              return n;
                            })(e, ['props']);
                          if (this.props.data.hasOwnProperty(a.key)) {
                            var o = this.props.data[a.key];
                            return (
                              null != o &&
                                !0 === o.__reactableMeta &&
                                ((i = o.props), (o = o.value)),
                              l.default.createElement(
                                u.Td,
                                r({ column: a, key: a.key }, i),
                                o,
                              )
                            );
                          }
                          return l.default.createElement(u.Td, {
                            column: a,
                            key: a.key,
                          });
                        }.bind(this),
                      ),
                    )));
                  var t = (0, d.filterPropsFrom)(this.props);
                  return l.default.createElement('tr', t, e);
                },
              },
            ]),
            t
          );
        })();
      (t.Tr = p), (p.childNode = u.Td), (p.dataType = 'object');
    },
    kHAy: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('W0B4'),
        s = n.n(o),
        l = n('f0d8'),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.frequency,
                r = void 0 === n ? 0 : n,
                i = t.freqMax,
                o = void 0 === i ? 0 : i;
              e =
                r >= (2 * o) / 3 ? 'success' : r >= o / 3 ? 'warning' : 'info';
              var s = o ? (r / o) * 100 : 0;
              return a.a.createElement(l.ProgressBar, {
                type: e,
                width: s + '%',
              });
            }),
            (t.propTypes = { frequency: s.a.number, freqMax: s.a.number }),
            t
          );
        })(a.a.PureComponent);
      t.default = u;
    },
    kchL: function (e, t, n) {
      (t = e.exports = n('Ai0b')(!1)).push([
        e.i,
        '/**\n * No mixins for output here.\n * If you want to expose some mixins,\n * define them to `legacy/common/styles/atomic`\n */\n/* stylelint-disable */\n.acceptance__TLxK {\n  min-width: 60px;\n}\n.frequency__Hs3t {\n  min-width: 110px;\n}\n.frequency__Hs3t .fa {\n  margin-left: 0.5em;\n}\n.table.table__XKyc tbody {\n  color: #808080;\n}\n.table.table__XKyc tbody > tr:nth-of-type(odd) {\n  background: #fafafa;\n}\n.table.table__XKyc th {\n  border-bottom: 1px solid #dddddd;\n  outline: none;\n}\n.table.table__XKyc td {\n  border-top: none;\n}\n',
        '',
      ]),
        (t.locals = {
          acceptance: 'acceptance__TLxK',
          frequency: 'frequency__Hs3t',
          table: 'table__XKyc',
        });
    },
    mTjJ: function (e, t, n) {
      var r = n('YUMJ');
      'string' == typeof r && (r = [[e.i, r, '']]);
      var i = {
        convertToAbsoluteUrls: !0,
        sourceMap: !1,
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n('UezQ')(r, i);
      r.locals && (e.exports = r.locals);
    },
    o6tC: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('W0B4'),
        s = n.n(o),
        l = n('8Jek'),
        u = n.n(l),
        c = n('YJVQ'),
        d = n('f0d8'),
        p = n('IANA'),
        f = n('JYjO'),
        m = n.n(f),
        v = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.onClick = function (e) {
                e.preventDefault(), e.stopPropagation();
                var n = t.props,
                  r = n.onClick,
                  i = n.slug;
                r && r(i);
                var a = c.paths.questionDetail(i);
                (c.USER_IS_MAC ? e.metaKey : e.ctrlKey)
                  ? window.open(a, '_blank')
                  : window.location.assign(a);
              }),
              t
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.renderOriginalTooltip = function () {
              return this.props.translation
                ? a.a.createElement(d.Tooltip, {
                    className: 'fa fa-info-circle',
                    placement: 'top',
                    title: this.props.title,
                  })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.title,
                n = e.translation,
                r = e.slug,
                i = e.isPaidOnly,
                o = e.isLimited,
                s = e.isFavor,
                l = n || t;
              return a.a.createElement(
                'div',
                { className: m.a.titleCell },
                a.a.createElement(
                  'a',
                  {
                    href: c.paths.questionDetail(r),
                    'data-limit': o,
                    title: o ? l : '',
                    onClick: this.onClick,
                  },
                  l,
                ),
                s
                  ? a.a.createElement('span', {
                      className: u()(m.a.favorIcon, 'fa', 'fa-star'),
                    })
                  : '',
                this.renderOriginalTooltip(),
                i &&
                  a.a.createElement(d.LockTag, {
                    isPaid: p.userStatus.isPremium,
                  }),
              );
            }),
            (t.propTypes = {
              title: s.a.string.isRequired,
              slug: s.a.string.isRequired,
              translation: s.a.string,
              isPaidOnly: s.a.bool.isRequired,
              isLimited: s.a.bool,
              onClick: s.a.func,
            }),
            (t.defaultProps = { isLimited: !1 }),
            t
          );
        })(a.a.PureComponent);
      t.default = v;
    },
    oElZ: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('AoLT'),
        s = n('f0d8'),
        l = n('J6Pw'),
        u = n('Os79'),
        c = n.n(u),
        d = n('FwAx'),
        p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.render = function () {
              var e = this.props.data;
              return e.loading || !e.topicTag
                ? a.a.createElement(s.LoadingArea, {
                    show: !0,
                    style: { height: 600 },
                  })
                : a.a.createElement(l.default, {
                    tag: e.topicTag,
                    favoritesLists: e.favoritesLists,
                    pageType: d.TOPICTAGPAGE,
                  });
            }),
            (t = r.__decorate(
              [
                Object(o.compose)(
                  Object(o.graphql)(c.a, {
                    options: function (e) {
                      return { variables: { slug: e.slug } };
                    },
                  }),
                ),
              ],
              t,
            ))
          );
        })(a.a.PureComponent);
      t.default = p;
    },
    oWOB: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = function (e, t, n) {
          for (var r = !0; r; ) {
            var i = e,
              a = t,
              o = n;
            (r = !1), null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, a);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            (e = u), (t = a), (n = o), (r = !0), (s = u = void 0);
          }
        };
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var l = a(n('mXGw')),
        u = a(n('xARA')),
        c = (function (e) {
          function t() {
            o(this, t),
              i(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
                this,
                arguments,
              );
          }
          return (
            s(t, l['default'].Component),
            r(t, [
              {
                key: 'onChange',
                value: function () {
                  this.props.onFilter(u.default.findDOMNode(this).value);
                },
              },
              {
                key: 'render',
                value: function () {
                  return l.default.createElement('input', {
                    type: 'text',
                    className: this.props.className,
                    placeholder: this.props.placeholder,
                    value: this.props.value,
                    onKeyUp: this.onChange.bind(this),
                    onChange: this.onChange.bind(this),
                  });
                },
              },
            ]),
            t
          );
        })();
      t.FiltererInput = c;
      var d = (function (e) {
        function t() {
          o(this, t),
            i(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
              this,
              arguments,
            );
        }
        return (
          s(t, l['default'].Component),
          r(t, [
            {
              key: 'render',
              value: function () {
                if (void 0 === this.props.colSpan)
                  throw new TypeError(
                    'Must pass a colSpan argument to Filterer',
                  );
                return l.default.createElement(
                  'tr',
                  { className: 'reactable-filterer' },
                  l.default.createElement(
                    'td',
                    { colSpan: this.props.colSpan },
                    l.default.createElement(c, {
                      onFilter: this.props.onFilter,
                      value: this.props.value,
                      placeholder: this.props.placeholder,
                      className: this.props.className
                        ? 'reactable-filter-input ' + this.props.className
                        : 'reactable-filter-input',
                    }),
                  ),
                );
              },
            },
          ]),
          t
        );
      })();
      t.Filterer = d;
    },
    qmIK: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.extractDataFrom = function (e, t) {
          var n;
          n = null != e && !0 === e.__reactableMeta ? e.data[t] : e[t];
          null != n &&
            !0 === n.__reactableMeta &&
            (n =
              void 0 !== n.props.value && null !== n.props.value
                ? n.props.value
                : n.value);
          return (0, r.stringable)(n) ? n : '';
        });
      var r = n('M9nm');
    },
    uWBI: function (e, t, n) {
      (t = e.exports = n('Ai0b')(!1)).push([
        e.i,
        "/**\n * No mixins for output here.\n * If you want to expose some mixins,\n * define them to `legacy/common/styles/atomic`\n */\n/* stylelint-disable */\n.title-cell__ZGos .fa {\n  margin-left: 1em;\n}\n.title-cell__ZGos a[data-limit='true'] {\n  max-width: 200px;\n  display: inline-block;\n  vertical-align: bottom;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.favor-icon__2vM7 {\n  color: #f0ad4e;\n}\n",
        '',
      ]),
        (t.locals = {
          'title-cell': 'title-cell__ZGos',
          titleCell: 'title-cell__ZGos',
          'favor-icon': 'favor-icon__2vM7',
          favorIcon: 'favor-icon__2vM7',
        });
    },
    vSiS: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isReactComponent = function (e) {
          return null !== e && 'object' == typeof e && void 0 !== e.props;
        });
    },
    wezd: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('xARA'),
        s = n('AoLT'),
        l = n('f0d8'),
        u = n('YJVQ'),
        c = n('oElZ'),
        d = n('APty');
      Object(o.render)(
        a.a.createElement(
          l.NojIntlProvider,
          null,
          a.a.createElement(
            s.ApolloProvider,
            { client: u.client },
            a.a.createElement(function () {
              var e = r.__read(
                  location.pathname.match(/\/(tag|company)\/([^\/]+)\/?/i),
                  3,
                ),
                t = e[1],
                n = e[2];
              switch (t) {
                case 'tag':
                  return a.a.createElement(c.default, { slug: n });
                case 'company':
                  return a.a.createElement(d.default, { slug: n });
                default:
                  return null;
              }
            }, null),
          ),
        ),
        document.getElementById('app'),
      );
    },
    xGSG: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = function (e, t, n) {
          for (var r = !0; r; ) {
            var i = e,
              a = t,
              o = n;
            (r = !1), null === i && (i = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(i, a);
            if (void 0 !== s) {
              if ('value' in s) return s.value;
              var l = s.get;
              if (void 0 === l) return;
              return l.call(o);
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            (e = u), (t = a), (n = o), (r = !0), (s = u = void 0);
          }
        };
      var o,
        s = n('mXGw'),
        l = (o = s) && o.__esModule ? o : { default: o },
        u = n('XnTe'),
        c = n('oWOB'),
        d = n('DMGM'),
        p = (function (e) {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              a(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(
                this,
                arguments,
              );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, l['default'].Component),
            i(
              t,
              [
                {
                  key: 'handleClickTh',
                  value: function (e) {
                    this.props.onSort(e.key);
                  },
                },
                {
                  key: 'handleKeyDownTh',
                  value: function (e, t) {
                    13 === t.keyCode && this.props.onSort(e.key);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    for (
                      var e = [], t = 0;
                      t < this.props.columns.length;
                      t++
                    ) {
                      var n = this.props.columns[t],
                        i =
                          'reactable-th-' +
                          n.key.replace(/\s+/g, '-').toLowerCase(),
                        a = '',
                        o = null;
                      this.props.sortableColumns[n.key] &&
                        ((a += 'reactable-header-sortable '), (o = 'button')),
                        this.props.sort.column === n.key &&
                          ((a += 'reactable-header-sort'),
                          1 === this.props.sort.direction
                            ? (a += '-asc')
                            : (a += '-desc')),
                        a.length > 0 && (i += ' ' + a),
                        'object' == typeof n.props &&
                          'string' == typeof n.props.className &&
                          (i += ' ' + n.props.className),
                        e.push(
                          l.default.createElement(
                            u.Th,
                            r({}, n.props, {
                              className: i,
                              key: t,
                              onClick: this.handleClickTh.bind(this, n),
                              onKeyDown: this.handleKeyDownTh.bind(this, n),
                              role: o,
                              tabIndex: '0',
                            }),
                            n.label,
                          ),
                        );
                    }
                    var s = (0, d.filterPropsFrom)(this.props);
                    return l.default.createElement(
                      'thead',
                      s,
                      !0 === this.props.filtering
                        ? l.default.createElement(c.Filterer, {
                            colSpan: this.props.columns.length,
                            onFilter: this.props.onFilter,
                            placeholder: this.props.filterPlaceholder,
                            value: this.props.currentFilter,
                            className: this.props.filterClassName,
                          })
                        : null,
                      l.default.createElement(
                        'tr',
                        { className: 'reactable-column-header' },
                        e,
                      ),
                    );
                  },
                },
              ],
              [
                {
                  key: 'getColumns',
                  value: function (e) {
                    var t = [];
                    return (
                      l.default.Children.forEach(e.props.children, function (
                        e,
                      ) {
                        var n = {};
                        if (e) {
                          if (
                            (void 0 !== e.props &&
                              ((n.props = (0, d.filterPropsFrom)(e.props)),
                              void 0 !== e.props.children &&
                                ((n.label = e.props.children),
                                (n.key = n.label)),
                              'string' == typeof e.props.column &&
                                ((n.key = e.props.column),
                                void 0 === n.label && (n.label = n.key))),
                            void 0 === n.key)
                          )
                            throw new TypeError(
                              '<th> must have either a "column" property or a string child',
                            );
                          t.push(n);
                        }
                      }),
                      t
                    );
                  },
                },
              ],
            ),
            t
          );
        })();
      t.Thead = p;
    },
    yQMT: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('bb6g'),
        i = (n('k4Gj'), n('mXGw')),
        a = n.n(i),
        o = n('W0B4'),
        s = n.n(o),
        l = n('+GEz'),
        u = n('YJVQ'),
        c = n('f0d8'),
        d = n('IANA'),
        p = n('kHAy'),
        f = n('o6tC'),
        m = n('45dc'),
        v = n('GrkK'),
        h = n.n(v),
        g = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.onSort = function (e) {
                var n = t.props.gaPrefix,
                  r = 'sort-' + e.column;
                n && (r = n + '-' + r),
                  window.ga && ga('send', 'event', r, 'click');
              }),
              t
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.parseAcRate = function (e) {
              var t = parseFloat(e);
              return isNaN(t) ? -1 : t;
            }),
            (t.prototype.parseDifficulty = function (e) {
              return {
                difficulty: { Easy: 0, Medium: 1, Hard: 2 }[e.difficulty],
                acRate: this.parseAcRate(e.acRate),
              };
            }),
            (t.prototype.canSeeEncounteredColumn = function () {
              return (
                d.userStatus.isSuperuser &&
                this.props.questions &&
                this.props.questions[0] &&
                this.props.questions[0].encountered
              );
            }),
            (t.prototype.renderFrequencyColumn = function () {
              if (!d.features.subscription) return null;
              var e = d.userStatus.isPremium
                ? a.a.createElement(c.Tooltip, {
                    className: 'fa fa-question-circle',
                    title:
                      'Frequency of problems that appear in real interviews',
                  })
                : a.a.createElement(c.Tooltip, {
                    className: 'fa fa-lock',
                    title: 'Only premium members can see the frequency',
                  });
              return a.a.createElement(
                l.Th,
                { column: 'frequency', className: h.a.frequency },
                Object(u.t)('frequency').d('Frequency'),
                e,
              );
            }),
            (t.prototype.renderEncounterColumn = function () {
              return this.canSeeEncounteredColumn()
                ? a.a.createElement(
                    l.Th,
                    { column: 'encountered' },
                    'Encountered',
                  )
                : null;
            }),
            (t.prototype.renderHead = function () {
              return a.a.createElement(
                l.Thead,
                null,
                a.a.createElement(l.Th, { column: 'status' }, ' '),
                a.a.createElement(l.Th, { column: 'id' }, '#'),
                a.a.createElement(
                  l.Th,
                  { column: 'title' },
                  Object(u.t)('title').d('Title'),
                ),
                this.props.isTagShown &&
                  a.a.createElement(
                    l.Th,
                    { column: 'tags' },
                    Object(u.t)('tags').d('Tags'),
                  ),
                a.a.createElement(
                  l.Th,
                  { column: 'acceptance', className: h.a.acceptance },
                  Object(u.t)('acceptance').d('Acceptance'),
                ),
                a.a.createElement(
                  l.Th,
                  { column: 'difficulty' },
                  Object(u.t)('difficulty').d('Difficulty'),
                ),
                this.renderFrequencyColumn(),
                this.renderEncounterColumn(),
              );
            }),
            (t.prototype.renderStatusTag = function (e) {
              switch (e) {
                case 'ac':
                  return a.a.createElement('span', {
                    className: 'text-success fa fa-check',
                  });
                case 'halfac':
                  return a.a.createElement('span', {
                    className: 'text-danger fa fa-check',
                  });
                case 'notac':
                  return a.a.createElement('span', {
                    className: 'text-info fa fa-question',
                  });
                default:
                  return null;
              }
            }),
            (t.prototype.renderDifficulty = function (e) {
              var t =
                'label-' +
                { Easy: 'success', Medium: 'warning', Hard: 'danger' }[e];
              return a.a.createElement(
                'span',
                { className: 'label ' + t + ' round' },
                Object(u.t)(e.toLowerCase()).d(e),
              );
            }),
            (t.prototype.renderBody = function () {
              var e = this,
                t = this.props.questions.map(function (e) {
                  return e.frequency;
                }),
                n = Math.max.apply(null, t);
              return this.props.questions.map(function (t) {
                return a.a.createElement(
                  l.Tr,
                  { key: t.id },
                  a.a.createElement(
                    l.Td,
                    { column: 'status', value: t.status },
                    e.renderStatusTag(t.status),
                  ),
                  a.a.createElement(l.Td, { column: 'id', value: t.id }, t.id),
                  a.a.createElement(
                    l.Td,
                    { column: 'title', value: t.title },
                    a.a.createElement(f.default, {
                      title: t.title,
                      slug: t.titleSlug,
                      translation: t.translatedTitle,
                      isPaidOnly: t.isPaidOnly,
                      isLimited: e.props.isTagShown,
                      isFavor: t.isFavor,
                      onClick: e.props.onQuestionClick,
                    }),
                  ),
                  e.props.isTagShown &&
                    a.a.createElement(
                      l.Td,
                      { column: 'tags' },
                      a.a.createElement(m.default, {
                        companyTags: t.companyTags,
                        topicTags: t.topicTags,
                      }),
                    ),
                  a.a.createElement(
                    l.Td,
                    { column: 'acceptance', value: e.parseAcRate(t.acRate) },
                    t.acRate,
                  ),
                  a.a.createElement(
                    l.Td,
                    { column: 'difficulty', value: e.parseDifficulty(t) },
                    e.renderDifficulty(t.difficulty),
                  ),
                  d.features.subscription &&
                    a.a.createElement(
                      l.Td,
                      { column: 'frequency', value: t.frequency },
                      a.a.createElement(p.default, {
                        frequency: t.frequency,
                        freqMax: n,
                      }),
                    ),
                  d.userStatus.isSuperuser &&
                    t.encountered &&
                    a.a.createElement(
                      l.Td,
                      { column: 'encountered', value: t.encountered },
                      t.encountered,
                    ),
                );
              });
            }),
            (t.prototype.render = function () {
              return a.a.createElement(
                'div',
                { className: 'table-responsive' },
                a.a.createElement(
                  l.Table,
                  {
                    className: 'table ' + h.a.table,
                    onSort: this.onSort,
                    sortable: [
                      'status',
                      'id',
                      'title',
                      'acceptance',
                      'frequency',
                      'encountered',
                      {
                        column: 'difficulty',
                        sortFunction: function (e, t) {
                          return e.difficulty === t.difficulty
                            ? e.acRate - t.acRate
                            : t.difficulty - e.difficulty;
                        },
                      },
                    ],
                  },
                  this.renderHead(),
                  this.renderBody(),
                ),
              );
            }),
            (t.propTypes = {
              questions: s.a.arrayOf(
                s.a.shape({
                  id: s.a.number.isRequired,
                  title: s.a.string.isRequired,
                  titleSlug: s.a.string.isRequired,
                  translatedTitle: s.a.string,
                  status: s.a.oneOf(['ac', 'notac', 'halfac']),
                  difficulty: s.a.oneOf(['Easy', 'Medium', 'Hard']).isRequired,
                  acRate: s.a.string.isRequired,
                  frequency: s.a.number,
                  isPaidOnly: s.a.bool.isRequired,
                  topicTags: s.a.array,
                  companyTags: s.a.array,
                  onQuestionClick: s.a.func,
                }),
              ),
              isTagShown: s.a.bool,
              gaPrefix: s.a.string,
            }),
            (t.defaultProps = { isTagShown: !1, gaPrefix: null }),
            t
          );
        })(a.a.PureComponent);
      t.default = g;
    },
    zaKS: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = {
        Numeric: function (e, t) {
          var n = parseFloat(e.toString().replace(/,/g, '')),
            r = parseFloat(t.toString().replace(/,/g, ''));
          if (isNaN(n) && isNaN(r)) (n = e), (r = t);
          else {
            if (isNaN(n)) return 1;
            if (isNaN(r)) return -1;
          }
          return n < r ? -1 : n > r ? 1 : 0;
        },
        NumericInteger: function (e, t) {
          return isNaN(e) || isNaN(t) ? (e > t ? 1 : -1) : e - t;
        },
        Currency: function (e, n) {
          return (
            (e = e.replace(/[^0-9\.\-\,]+/g, '')),
            (n = n.replace(/[^0-9\.\-\,]+/g, '')),
            t.Sort.Numeric(e, n)
          );
        },
        Date: (function (e) {
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return (
            (t.toString = function () {
              return e.toString();
            }),
            t
          );
        })(function (e, n) {
          var r = Date.parse(e),
            i = Date.parse(n);
          return isNaN(r) || isNaN(i)
            ? t.Sort.Numeric(e, n)
            : r > i
            ? 1
            : i > r
            ? -1
            : 0;
        }),
        CaseInsensitive: function (e, t) {
          return e.toLowerCase().localeCompare(t.toLowerCase());
        },
      };
      t.Sort = r;
    },
    'ziR+': function (e, t, n) {
      (t = e.exports = n('Ai0b')(!1)).push([
        e.i,
        "/**\n * No mixins for output here.\n * If you want to expose some mixins,\n * define them to `legacy/common/styles/atomic`\n */\n/* stylelint-disable */\n.header__2ZIe {\n  margin: 0 0 1em 0;\n}\n.title__PM_F span {\n  margin-right: 0.5em;\n}\n.tags-toggl__3H2x [type='checkbox'] {\n  margin-right: 5px;\n}\n.flex-container__2fFG {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.flex-container__2fFG .period-selector__fkc_ {\n  margin-top: -10px;\n}\n.flex-container__2fFG .period-label__wEaU {\n  padding-right: 10px;\n}\n",
        '',
      ]),
        (t.locals = {
          header: 'header__2ZIe',
          title: 'title__PM_F',
          'tags-toggl': 'tags-toggl__3H2x',
          tagsToggl: 'tags-toggl__3H2x',
          'flex-container': 'flex-container__2fFG',
          flexContainer: 'flex-container__2fFG',
          'period-selector': 'period-selector__fkc_',
          periodSelector: 'period-selector__fkc_',
          'period-label': 'period-label__wEaU',
          periodLabel: 'period-label__wEaU',
        });
    },
  },
  [['wezd', 0, 2, 1]],
]);
