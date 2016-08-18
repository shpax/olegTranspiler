
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

        // eval(script);
        console.log(script);
    }

    parseLine(line) {
        let newLine = line
            .replace(/Oleg\s([^\s]+)\szovut/g,'var $1 =')
            .replace(/oleshka/g,'function')
            .replace(/menya\./g, 'document.')
            .replace(/\.zovut/g, '.querySelector')
            .replace(/\.zvat/g, '.querySelectorAll')
            .replace(/\szovut\s/g, ' = ')
            .replace(/.menya/g, '.innerHTML')
            .replace(/OLEG/g, 'alert')
            .replace(/yoyoyo/g, '[].slice.call')
            .replace(/\.vseh/g,'.forEach')
            .replace(/YoYo/g,'{')
            .replace(/yoyo/g,'}')
            .replace(/Yo/g,'(')
            .replace(/yo/g,')')

        if (newLine.length) newLine += ';';

        return newLine;
    }

}

const interpreter = new Interpreter();
window.addEventListener('load', interpreter.run.bind(interpreter));