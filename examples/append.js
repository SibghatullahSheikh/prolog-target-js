var runtime = require("../runtime.js");
var Var = runtime.Var;
var Struct = runtime.Struct;
var unify_2 = runtime.unify;
function append_3($0, $1, $2, s, cb) {
	function append_3_0($0, $1, $2, s, cb) {
		var $3 = new Var();
		s.push(function() {
			return append_3_1($0, $1, $2, s, cb);
		});
		return unify_2($0, '[]', s, function() {
			return unify_2($1, $3, s, function() {
				return unify_2($2, $3, s, function() {
					return cb;
				});
			});
		});
	}
	function append_3_1($0, $1, $2, s, cb) {
		var $3 = new Var(), $4 = new Var(), $5 = new Var(), $6 = new Var();
		return unify_2($0, new Struct('.', $3, $4), s, function() {
			return unify_2($1, $5, s, function() {
				return unify_2($2, new Struct('.', $3, $6), s, function() {
					return append_3($4, $5, $6, s, function() {
						return cb;
					});
				});
			});
		});
	}
	return append_3_0($0, $1, $2, s, cb);
}
exports.append_3 = append_3;