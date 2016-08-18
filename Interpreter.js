
class Interpreter {

    run() {
        []
            .slice
            .call(document.querySelectorAll('script[type="text/oleg"]'))
            .map(s => s.innerText)
            .forEach(this.compile.bind(this));
    }

    compile(text) {
        const script = text.replace(/\r/g,'')
            .split(/\n/)
            .map(l => l.replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s\s+/g,''))
            .map(this.parseLine.bind(this))
            .join("\n");

        eval(script);
        // console.log(script);
    }

    parseLine(line) {
        let newLine = line
            .replace(/oleg\s([^\s]+)\szovut/g,'var $1 =')
            .replace(/menya\./g, 'document.')
            .replace(/\.zovut/g, '.querySelector')
            .replace(/\szovut\s/g, ' = ')
            .replace(/.menya/g, '.innerHTML')

        if (newLine.length) newLine += ';';

        return newLine;
    }

}

const interpreter = new Interpreter();
window.addEventListener('load', interpreter.run.bind(interpreter));