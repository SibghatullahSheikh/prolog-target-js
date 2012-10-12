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