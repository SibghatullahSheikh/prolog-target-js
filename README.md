prolog-target-js
================

Simple Prolog to JS transpiler. The project is at rather incomplete state at the moment.

Example input:

```prolog
append([], Ys, Ys).
append([X|Xs], Ys, [X|Zs]):- append(Xs, Ys, Zs).
```

Example output:

```javascript
var runtime = require("../runtime");
var Var = runtime.Var;
var Struct = runtime.Struct;
var $U = runtime.unification;
var $B = runtime.backtrack;

function append_3_0($0, $1, $2, s, cb) {
    var $3 = new Var();
    s.push(function() {
        return append_3_1($0, $1, $2, s, cb);
    });
    if ($U(s, $0, '[]')) {
        if ($U(s, $1, $3)) {
            if ($U(s, $2, $3)) {
                return cb;
            } else {
                return $B(s);
            }
        } else {
            return $B(s);
        }
    } else {
        return $B(s);
    }
}
function append_3_1($0, $1, $2, s, cb) {
    var $3 = new Var(),
        $4 = new Var(),
        $5 = new Var(),
        $6 = new Var();
    if ($U(s, $0, new Struct('.', $3, $4))) {
        if ($U(s, $1, $5)) {
            if ($U(s, $2, new Struct('.', $3, $6))) {
                return append_3_0($4, $5, $6, s, cb);
            } else {
                return $B(s);
            }
        } else {
            return $B(s);
        }
    } else {
        return $B(s);
    }
}
exports.append_3 = append_3_0;
```

Calling the predicate
---------------------

```javascript
var runtime = require('../runtime');
var util = require('../util');
var append = require('./append');

var list1 = util.array2List([1, 2, 3, 4, 5]);
var list2 = util.array2List([6, 7, 8, 9, 10]);

var result = new runtime.Var();

runtime.run(append.append_3(list1, list2, result, [], null));

console.log('Result is: ' + runtime.toString(result));
```

