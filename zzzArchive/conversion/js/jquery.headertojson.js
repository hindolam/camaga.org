/**
 * headertojson
 * jQuery plugin that reads an CAMAGA header and returns a javascript object artists and instruments
 *
 * @author Srinivasan Ramaswamy
 * @module headertojson
 * @version 0.0.1
 */

(function( $ ) {
	$.fn.headerToJSON = function() {

		var artists = [];
		var date = "";

		var strip = function(content) {
			var result;
			var n = content.indexOf("Concert By:");
			if ( n !== -1) {
				result = $.trim(content.substring(11))
			}
			else {
				n = content.indexOf("Concert\nBy:");
				if ( n !== -1) {
					result = $.trim(content.substring(11))
				}
				else {				
					result = content;
				}
			}
			return result;
		}

		var convertDate = function(content) {

			// month
			var n = content.indexOf("-");
			var m = $.trim(content.substr(0,n));
			var month = parseInt(m);
			var mm  = (month < 10) ? '0' + m : m;

			
			//date
			content = $.trim(content.substr(n+1));
			n = content.indexOf("-");
			var d = $.trim(content.substr(0,n));
			var date = parseInt(d);
			var dd = (date < 10) ? '0' + d : d;

			//year
			var yy = $.trim(content.substr(n+1));
			var year = parseInt(yy);

			// yyyy-mm-dd
			var newDate  = (year < 80) ? '20' + yy : '19' + yy;
		    newDate += '-' + mm + '-' + dd; //1990-01-25

			return newDate;
		}

		var getDate = function(content) {

			var date = "";
			var n = content.indexOf("Date:");
			if (n!== -1) {
				date = $.trim(content.substring(n+5));
			}
			else {
				n = content.indexOf("-");
				if (n!== -1) {
					date = $.trim(content);
				}
			}
			return date;
		}

		var extractArtist = function(content) {
			var artist = {};
			var rest = "";
			var n = content.indexOf("(");
			if ( n !== -1) {
				artist ["name"] = strip($.trim(content.substring(0,n))); 
				content = $.trim(content.substring(n+1));
				var n = content.indexOf(")");
				artist ["instrument"] = $.trim(content.substring(0,n));
				rest  = $.trim(content.substring(n+1));
			}
			else {
				if (content.length > 0) {
					if (date.length === 0) {
						date = getDate(content);
					}
					if (date.length === 0) {
						artist ["name"] = strip(content); 
						artist ["instrument"] = "";
					}
				}
			};

			if (Object.keys(artist).length > 0) {
				artists[artists.length] = artist;
			}

			if (rest.length > 0) {
				date = getDate(rest);
				extractArtist(rest);
			}
		}
			
		this.each(function( index ) {		

			var content = $.trim($(this).text());
			extractArtist(content);

		});

		var result = {};
		result["date"] = convertDate(date);
		result["time"] = "16:00";
		result["venue"] = "Hindu Temple of Atlanta";
		result["artists"] = artists;
		return result;
	};
})( jQuery );

