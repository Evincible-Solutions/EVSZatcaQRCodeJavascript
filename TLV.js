var _Seller;
var _VatNo;
var _dateTime;
var _Total;
var _Tax;
function TLVs(Seller, TaxNo, dateTime, Total, Tax) {
	debugger;
	_Seller = Hex(1, Seller);
	_TaxNo = Hex(2, TaxNo);
	_dateTime = Hex(3, dateTime);
	_Total = Hex(4, Total);
	_Tax = Hex(5, Tax);
	var b64 = hexToBase64(_Seller + _TaxNo + _dateTime + _Total + _Tax);
	console.log(b64);
	return b64;
}
function toHexString(byteArray) {
	return Array.from(byteArray, function (byte) {
		return ('0' + (byte & 0xFF).toString(16)).slice(-2);
	}).join('')
}
function Hex(tag, val) {
	let utf8Encode = new TextEncoder();
	var x = utf8Encode.encode(val)
		if (x.length > 9 && x.length < 16) {
			var len = '0' + x.length.toString(16);
		} else if (x.length > 15) {
			var len = x.length.toString(16);
		} else {
			var len = toHexString(x.length.toString());
		}
		var HexTag = toHexString(tag.toString());
	var HexValue = toHexString(x);
	var fval = (HexTag + len + HexValue).toUpperCase();
	console.log(fval);
	return fval;
}
function hexToBase64(hexstring) {
	console.log(hexstring);
	return btoa(hexstring.match(/\w{2}/g).map(function (a) {
			return String.fromCharCode(parseInt(a, 16));
		}).join(""));
}