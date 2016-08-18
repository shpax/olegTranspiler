'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interpreter = function () {
    function Interpreter() {
        _classCallCheck(this, Interpreter);
    }

    _createClass(Interpreter, [{
        key: 'run',
        value: function run() {
            [].slice.call(document.querySelectorAll('script[type="text/oleg"]')).map(function (s) {
                return s.innerText;
            }).forEach(this.compile.bind(this));
        }
    }, {
        key: 'compile',
        value: function compile(text) {
            var script = text.replace(/\r/g, '').split(/\n/).map(function (l) {
                return l.replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s\s+/g, '');
            }).map(this.parseLine.bind(this)).join("\n");

            eval(script);
            // console.log(script);
        }
    }, {
        key: 'parseLine',
        value: function parseLine(line) {
            var newLine = line.replace(/oleg\s([^\s]+)\szovut/g, 'var $1 =').replace(/menya\./g, 'document.').replace(/\.zovut/g, '.querySelector').replace(/\szovut\s/g, ' = ').replace(/.menya/g, '.innerHTML');

            if (newLine.length) newLine += ';';

            return newLine;
        }
    }]);

    return Interpreter;
}();

var interpreter = new Interpreter();
window.addEventListener('load', interpreter.run.bind(interpreter));

//# sourceMappingURL=Interpreter-compiled.js.map