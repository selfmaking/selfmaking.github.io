jQuery(document).ready(function() {
	var QRBox	=	$(&apos;#QRBox&apos;);
	var MainBox	=	$(&apos;#MainBox&apos;);
	var BTCQR	=	&apos;images/BTCQR.png&apos;;	// &#x4E8C;&#x7EF4;&#x7801;&#x8DEF;&#x5F84;
	var AliPayQR	=	&apos;images/AliPayQR.png&apos;;
	var WeChanQR	=	&apos;images/WeChanQR.png&apos;;

	

	function showQR(QR) {
		if (QR) {
			MainBox.css(&apos;background-image&apos;,&apos;url(&apos;+QR+&apos;)&apos;);
		}
		$(&apos;#DonateText,#donateBox,#github&apos;).addClass(&apos;blur&apos;);
		QRBox.fadeIn(300,function(argument) {
			MainBox.addClass(&apos;showQR&apos;);
		});
	}

	$(&apos;#donateBox&gt;li&apos;).click(function(event) {
		var thisID	=	$(this).attr(&apos;id&apos;);
		if (thisID === &apos;BTC&apos;) {
			showQR(BTCQR);
			new Clipboard(&apos;#BTCBn&apos;);
		} else if (thisID === &apos;AliPay&apos;) {
			showQR(AliPayQR);
		} else if (thisID === &apos;WeChat&apos;) {
			showQR(WeChanQR);
		}
	});

	MainBox.click(function(event) {
		MainBox.removeClass(&apos;showQR&apos;).addClass(&apos;hideQR&apos;);
		setTimeout (function(a) {
			QRBox.fadeOut(300,function(argument) {
				MainBox.removeClass(&apos;hideQR&apos;);
			});
			$(&apos;#DonateText,#donateBox,#github&apos;).removeClass(&apos;blur&apos;);
		},600);

	});
});