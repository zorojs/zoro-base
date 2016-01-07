var util = require('src/util');

describe('util type related', function() {
    var str = 'foo';
    var num = 1;
    var bool = true;
    var arr = [];
    var func = util.f;
    var obj = util.o;
    var nil = null;
    var none = undefined;
    var date = new Date();
    var reg = /abc/;
    var err = new Error();
    it('typeOf', function() {
        var typeOf = util.typeOf;
        expect(typeOf(str)).toBe('string');
        expect(typeOf(num)).toBe('number');
        expect(typeOf(bool)).toBe('boolean');
        expect(typeOf(arr)).toBe('array');
        expect(typeOf(func)).toBe('function');
        expect(typeOf(obj)).toBe('object');
        expect(typeOf(date)).toBe('date');
        expect(typeOf(reg)).toBe('regexp');
        expect(typeOf(err)).toBe('error');
        expect(typeOf(nil)).toBe('null');
        expect(typeOf(none)).toBe('undefined');
    });
    it('isString', function() {
        expect(util.isString(str)).toBe(true);
        expect(util.isString(num)).toBe(false);
        expect(util.isString(bool)).toBe(false);
        expect(util.isString(arr)).toBe(false);
        expect(util.isString(func)).toBe(false);
        expect(util.isString(obj)).toBe(false);
        expect(util.isString(date)).toBe(false);
        expect(util.isString(reg)).toBe(false);
        expect(util.isString(err)).toBe(false);
        expect(util.isString(nil)).toBe(false);
        expect(util.isString(none)).toBe(false);
    });
    it('isNumber', function() {
        expect(util.isNumber(str)).toBe(false);
        expect(util.isNumber(num)).toBe(true);
        expect(util.isNumber(bool)).toBe(false);
        expect(util.isNumber(arr)).toBe(false);
        expect(util.isNumber(func)).toBe(false);
        expect(util.isNumber(obj)).toBe(false);
        expect(util.isNumber(date)).toBe(false);
        expect(util.isNumber(reg)).toBe(false);
        expect(util.isNumber(err)).toBe(false);
        expect(util.isNumber(nil)).toBe(false);
        expect(util.isNumber(none)).toBe(false);
    });
    it('isBoolean', function() {
        expect(util.isBoolean(str)).toBe(false);
        expect(util.isBoolean(num)).toBe(false);
        expect(util.isBoolean(bool)).toBe(true);
        expect(util.isBoolean(arr)).toBe(false);
        expect(util.isBoolean(func)).toBe(false);
        expect(util.isBoolean(obj)).toBe(false);
        expect(util.isBoolean(date)).toBe(false);
        expect(util.isBoolean(reg)).toBe(false);
        expect(util.isBoolean(err)).toBe(false);
        expect(util.isBoolean(nil)).toBe(false);
        expect(util.isBoolean(none)).toBe(false);
    });
    it('isArray', function() {
        expect(util.isArray(str)).toBe(false);
        expect(util.isArray(num)).toBe(false);
        expect(util.isArray(bool)).toBe(false);
        expect(util.isArray(arr)).toBe(true);
        expect(util.isArray(func)).toBe(false);
        expect(util.isArray(obj)).toBe(false);
        expect(util.isArray(date)).toBe(false);
        expect(util.isArray(reg)).toBe(false);
        expect(util.isArray(err)).toBe(false);
        expect(util.isArray(nil)).toBe(false);
        expect(util.isArray(none)).toBe(false);
    });
    it('isFunction', function() {
        expect(util.isFunction(str)).toBe(false);
        expect(util.isFunction(num)).toBe(false);
        expect(util.isFunction(bool)).toBe(false);
        expect(util.isFunction(arr)).toBe(false);
        expect(util.isFunction(func)).toBe(true);
        expect(util.isFunction(obj)).toBe(false);
        expect(util.isFunction(date)).toBe(false);
        expect(util.isFunction(reg)).toBe(false);
        expect(util.isFunction(err)).toBe(false);
        expect(util.isFunction(nil)).toBe(false);
        expect(util.isFunction(none)).toBe(false);
    });
    it('isObject', function() {
        expect(util.isObject(str)).toBe(false);
        expect(util.isObject(num)).toBe(false);
        expect(util.isObject(bool)).toBe(false);
        expect(util.isObject(arr)).toBe(false);
        expect(util.isObject(func)).toBe(false);
        expect(util.isObject(obj)).toBe(true);
        expect(util.isObject(date)).toBe(false);
        expect(util.isObject(reg)).toBe(false);
        expect(util.isObject(err)).toBe(false);
        expect(util.isObject(nil)).toBe(false);
        expect(util.isObject(none)).toBe(false);
    });
    it('isDate', function() {
        expect(util.isDate(str)).toBe(false);
        expect(util.isDate(num)).toBe(false);
        expect(util.isDate(bool)).toBe(false);
        expect(util.isDate(arr)).toBe(false);
        expect(util.isDate(func)).toBe(false);
        expect(util.isDate(obj)).toBe(false);
        expect(util.isDate(date)).toBe(true);
        expect(util.isDate(reg)).toBe(false);
        expect(util.isDate(err)).toBe(false);
        expect(util.isDate(nil)).toBe(false);
        expect(util.isDate(none)).toBe(false);
    });
    it('isRegExp', function() {
        expect(util.isRegExp(str)).toBe(false);
        expect(util.isRegExp(num)).toBe(false);
        expect(util.isRegExp(bool)).toBe(false);
        expect(util.isRegExp(arr)).toBe(false);
        expect(util.isRegExp(func)).toBe(false);
        expect(util.isRegExp(obj)).toBe(false);
        expect(util.isRegExp(date)).toBe(false);
        expect(util.isRegExp(reg)).toBe(true);
        expect(util.isRegExp(err)).toBe(false);
        expect(util.isRegExp(nil)).toBe(false);
        expect(util.isRegExp(none)).toBe(false);
    });
    it('isError', function() {
        expect(util.isError(str)).toBe(false);
        expect(util.isError(num)).toBe(false);
        expect(util.isError(bool)).toBe(false);
        expect(util.isError(arr)).toBe(false);
        expect(util.isError(func)).toBe(false);
        expect(util.isError(obj)).toBe(false);
        expect(util.isError(date)).toBe(false);
        expect(util.isError(reg)).toBe(false);
        expect(util.isError(err)).toBe(true);
        expect(util.isError(nil)).toBe(false);
        expect(util.isError(none)).toBe(false);
    });
    it('isnull', function() {
        expect(util.isnull(str)).toBe(false);
        expect(util.isnull(num)).toBe(false);
        expect(util.isnull(bool)).toBe(false);
        expect(util.isnull(arr)).toBe(false);
        expect(util.isnull(func)).toBe(false);
        expect(util.isnull(obj)).toBe(false);
        expect(util.isnull(date)).toBe(false);
        expect(util.isnull(reg)).toBe(false);
        expect(util.isnull(err)).toBe(false);
        expect(util.isnull(nil)).toBe(true);
        expect(util.isnull(none)).toBe(false);
    });
    it('notnull', function() {
        expect(util.notnull(str)).toBe(true);
        expect(util.notnull(num)).toBe(true);
        expect(util.notnull(bool)).toBe(true);
        expect(util.notnull(arr)).toBe(true);
        expect(util.notnull(func)).toBe(true);
        expect(util.notnull(obj)).toBe(true);
        expect(util.notnull(date)).toBe(true);
        expect(util.notnull(reg)).toBe(true);
        expect(util.notnull(err)).toBe(true);
        expect(util.notnull(nil)).toBe(false);
        expect(util.notnull(none)).toBe(true);
    });
    it('undef', function() {
        expect(util.undef(str)).toBe(false);
        expect(util.undef(num)).toBe(false);
        expect(util.undef(bool)).toBe(false);
        expect(util.undef(arr)).toBe(false);
        expect(util.undef(func)).toBe(false);
        expect(util.undef(obj)).toBe(false);
        expect(util.undef(date)).toBe(false);
        expect(util.undef(reg)).toBe(false);
        expect(util.undef(err)).toBe(false);
        expect(util.undef(nil)).toBe(false);
        expect(util.undef(none)).toBe(true);
    });
    it('notundef', function() {
        expect(util.notundef(str)).toBe(true);
        expect(util.notundef(num)).toBe(true);
        expect(util.notundef(bool)).toBe(true);
        expect(util.notundef(arr)).toBe(true);
        expect(util.notundef(func)).toBe(true);
        expect(util.notundef(obj)).toBe(true);
        expect(util.notundef(date)).toBe(true);
        expect(util.notundef(reg)).toBe(true);
        expect(util.notundef(err)).toBe(true);
        expect(util.notundef(nil)).toBe(true);
        expect(util.notundef(none)).toBe(false);
    });
    it('exist', function() {
        expect(util.exist(str)).toBe(true);
        expect(util.exist(num)).toBe(true);
        expect(util.exist(bool)).toBe(true);
        expect(util.exist(arr)).toBe(true);
        expect(util.exist(func)).toBe(true);
        expect(util.exist(obj)).toBe(true);
        expect(util.exist(date)).toBe(true);
        expect(util.exist(reg)).toBe(true);
        expect(util.exist(err)).toBe(true);
        expect(util.exist(nil)).toBe(false);
        expect(util.exist(none)).toBe(false);
    });
    it('notexist', function() {
        expect(util.notexist(str)).toBe(false);
        expect(util.notexist(num)).toBe(false);
        expect(util.notexist(bool)).toBe(false);
        expect(util.notexist(arr)).toBe(false);
        expect(util.notexist(func)).toBe(false);
        expect(util.notexist(obj)).toBe(false);
        expect(util.notexist(date)).toBe(false);
        expect(util.notexist(reg)).toBe(false);
        expect(util.notexist(err)).toBe(false);
        expect(util.notexist(nil)).toBe(true);
        expect(util.notexist(none)).toBe(true);
    });
});