import { Assembler } from './Assembler'

const setTargetOf = Assembler.setTargetOf

Assembler.setTargetOf = function(instance, target) {
    setTargetOf.call(this, instance, target)
    Object.defineProperty(target, '__instance__', { value : instance })
}

if(typeof global !== 'undefined') {
    global.Assembler = Assembler
}

if(typeof window !== 'undefined') {
    window.Assembler = Assembler
}
