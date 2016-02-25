function loadJquery() {
  var url = "https://www-ssl.intel.com/content/dam/www/global/wap/jquery.js";
  var callback = loadCss;
  // Adding the script tag to the head
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  script.onreadystatechange = callback;
  script.onload = callback;

  // Fire the loading
  head.appendChild(script);
}

var loadBootStrap = function() {
  if (typeof $().modal == 'undefined') {
    var url = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js";
    var callback = showElqModal;
    // Adding the script tag to the head
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
  } else {
    showElqModal();
  }

}



function loadFont() {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://www-ssl.intel.com/sites/sitewide/HAT/50recode/css/secure.intel.clear.latin.css';
  link.media = 'all';
  head.appendChild(link);
}


var loadCss = function() {
  loadFont();
  var ss = document.styleSheets;
  var found = false;
  for (var i = 0; i < ss.length && !found; i++) {
    if (/bootstrap.css/i.test(ss[i].href) || /bootstrap.min.css/i.test(ss[i].href)) found = true;
  }
  if (!found) {
    var callback = loadBootStrap;
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css';
    link.media = 'all';
    head.appendChild(link);

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    link.onreadystatechange = callback;
    link.onload = callback;

    // Fire the loading
    head.appendChild(link);
  } else {
    loadBootStrap();
  }
}

//Returns true if a script with the recived source is loaded on the page


function isScriptAlreadyIncluded(src) {
  var scripts = document.getElementsByTagName("script");
  if (typeof scripts != 'undefined') {
    for (var i = 0; i < scripts.length; i++)
    if (scripts[i].getAttribute('src') == src) return true;
  }
  return false;
}

//Returns true if a script with the recived source is loaded on the page


function isCssAlreadyIncluded(src) {
  var scripts = document.getElementsByTagName("script");
  if (typeof scripts != 'undefined') {
    for (var i = 0; i < scripts.length; i++)
    if (scripts[i].getAttribute('src') == src) return true;
  }
  return false;
}

var showElqModal = function() {
  var dialogOpening = "<div class='modal fade' id='elqValidator' role='dialog' data-backdrop='static' data-keyboard='false' style='font-family:intel-clear; padding:0px; font-size:20px'> <div style='width:1400px' class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-body' style='padding:20px'><div class='container-fluid'style='background-color:#0071c5; padding:10px; margin-top:0px; color:white'><img class='col-md-1' src='https://www-ssl.intel.com/content/dam/intel/dm/image/logo.png'><span class='col-md-11' style='font-size:28px; font-weight:bold; padding-top:6px; padding-left:20px'>Eloqua Analytics QA Checklist</span></div>";
  var dialogClosing = "</br><button style='margin:0px' type='button' id='btnDoc' class='btn btn-primary'>Implementation documentation ></button></br><p style='margin-top:10px'>Don't have access to documentation? Send a request to <a href='mailto:map.prod.team@intel.com'>map.prod.team@intel.com</a></p><div style='padding:10px 0 0 0' class='modal-footer'><button id='btnClose' type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div></div>";

  if (typeof wap_ga != "undefined" && wap_ga.section == "elq" && wap_tms != "undefined" && wap_tms.eloqua != "undefined") {
    var checkCharacter = "\u2713";
    var xCharacter = "\u2717";
    var loaded = isScriptAlreadyIncluded("https://www-ssl.intel.com/content/dam/www/global/wap/eloqua.sync.js");
	var maploaded = isScriptAlreadyIncluded("https://www-ssl.intel.com/content/dam/www/global/map/map-loader.js");
    var local = $("meta[name=country][property=wap\\:country]").attr("content");
    var cLocal = checkCharacter;
    var geo = $("meta[name=language][property=wap\\:language]").attr("content");
    var cGeo = checkCharacter;
    var sector = $("meta[name=sector][property=wap\\:sector]").attr("content");
    var cSector = checkCharacter;
    var pageType = $("meta[name=regStatus][property=wap\\:regStatus]").attr("content");
    var cPageType = xCharacter;
    var tLoaded = "not loaded";
    var cLoaded = xCharacter;
	var tMapLoaded = "not loaded";
    var cMapLoaded = xCharacter;
	
	var title =  $("meta[name=title][property=og\\:title]").attr("content");
	var cTitle = checkCharacter;
	var siteName =  $("meta[name=site_name][property=og\\:site_name]").attr("content");
	var cSiteName = checkCharacter;
	var type =  $("meta[name=type][property=og\\:type]").attr("content");
	var cType = checkCharacter;
	var description =  $("meta[name=description][property=og\\:description]").attr("content");
	var cDescription = checkCharacter;
	var image =  $("meta[name=image][property=og\\:image]").attr("content");
	var cImage = checkCharacter;

    var tURL = $("meta[name=url][property=og\\:url]").attr("content");
    var cURL = checkCharacter;
    var tPageType = "landing page";
    var tSourceListingId = $("input[name='SourceId'][id='SourceId']").attr("value");
    var cSourceListingId = checkCharacter;
    if (loaded) {
      tLoaded = "loaded";
      cLoaded = checkCharacter;
    }
	if (maploaded) {
      tMapLoaded = "loaded";
      cMapLoaded = checkCharacter;
    }
    if (typeof local == 'undefined' || local.length == 0) {
      local = "meta tag \"wap:country\" is not set";
      cLocal = xCharacter;
    }
    if (typeof geo == 'undefined' || geo.length == 0) {
      geo = "meta tag \"wap:language\" is not set";
      cGeo = xCharacter;
    }
    if (typeof sector == 'undefined' || sector.length == 0) {
      sector = "meta tag \"wap:sector\" is not set";
      cSector = xCharacter;
    }
    if (typeof pageType != 'undefined' && pageType == "start") {
      tPageType = "registration start";
	  cPageType = checkCharacter;
	  if($("form[method='post']").length == 0)
	  {
		  cPageType = xCharacter; 
		  tPageType +=", but there is not any form with post method on the page"; 
	  }      
    } else if (typeof pageType != 'undefined' && pageType == "complete") {
      tPageType = "registration complete";
      cPageType = checkCharacter;
	  if($("form[method='post']").length > 0)
	  {
		  cPageType = xCharacter; 
		  tPageType +=", but there is a form with post method on the page that indicates this is a registration start page"; 
	  }  
    }
    if (typeof tURL == 'undefined' || tURL.length == 0 || !(/intel.com/i.test(tURL)) || tURL != location.href) {
      tURL = "meta tag \"og:url\" is not set correctly";
      cURL = xCharacter;
    }
	if (typeof tSourceListingId  == 'undefined' || tSourceListingId .length == 0) {
      tSourceListingId  = "SourceId is not set correctly";
      cSourceListingId  = xCharacter;
    }
    if (typeof title == 'undefined' || title.length == 0) {
      title = "meta tag \"og:title\" is not set";
      cTitle = xCharacter;
    }
	if (typeof siteName == 'undefined' || siteName.length == 0) {
      siteName = "meta tag \"og:siteName\" is not set";
      cSiteName = xCharacter;
    }
	if (typeof type == 'undefined' || type.length == 0 || type != "website") {
      type = "meta tag \"og:type\" is not set correctly, value should be \"website\"";
      cType = xCharacter;
    }
	if (typeof description == 'undefined' || description.length == 0) {
      description = "meta tag \"og:description\" is not set";
      cDescription = xCharacter;
    }
	if (typeof image == 'undefined' || image.length == 0) {
      image = "meta tag \"og:image is not set";
      cImage = xCharacter;
    }
	
    if (pageType == "start") {
      document.body.innerHTML += dialogOpening + "<table style='width:100%; color:#666'><tr style='background-color:#E0E0E0; color:#0071c5; font-weight: bold'><td>Check</td><td>Value</td><td>Status</td></tr><tr><td style='font-weight: bold'>Analytics</td><td>" + tLoaded + "</td><td class='Character'>" + cLoaded + "</td></tr><tr><td style='font-weight: bold'>MAP</td><td>" + tMapLoaded + "</td><td class='Character'>" + cMapLoaded + "</td></tr><tr><td style='font-weight: bold'>Country</td><td>" + local + "</td><td class='Character'>" + cLocal + "</td></tr><tr><td style='font-weight: bold'>Language</td><td>" + geo + "</td><td class='Character'>" + cGeo + "</td></tr><tr><td style='font-weight: bold'>Sector</td><td>" + sector + "</td><td class='Character'>" + cSector + "</td></tr><tr><td style='font-weight: bold'>URL</td><td>" + tURL + "</td><td class='Character'>" + cURL + "</td></tr><tr><td style='font-weight: bold'>Page Type</td><td>" + tPageType + "</td><td class='Character'>" + cPageType + "</td></tr><td style='font-weight: bold'>Title</td><td>" + title + "</td><td class='Character'>" + cTitle + "</td></tr><tr><td style='font-weight: bold'>Site Name</td><td>" + siteName + "</td><td class='Character'>" + cSiteName + "</td></tr><td style='font-weight: bold'>Type</td><td>" + type + "</td><td class='Character'>" + cType + "</td></tr><td style='font-weight: bold'>Description</td><td>" + description + "</td><td class='Character'>" + cDescription + "</td></tr><td style='font-weight: bold'>Image</td><td>" + image + "</td><td class='Character'>" + cImage + "</td></tr><td style='font-weight: bold'>Source Listing ID</td><td>" + tSourceListingId + "</td><td class='Character'>" + cSourceListingId + "</td></tr></table>" + dialogClosing;
    } else {
      //document.body.innerHTML += dialogOpening + "<table style='width:100%; color:#666'><tr style='background-color:#E0E0E0; color:#0071c5; font-weight: bold'><td>Check</td><td>Value</td><td>Status</td></tr><tr><td style='font-weight: bold'>Analytics</td><td>" + tLoaded + "</td><td class='Character'>" + cLoaded + "</td></tr><tr><td style='font-weight: bold'>Country</td><td>" + local + "</td><td class='Character'>" + cLocal + "</td></tr><tr><td style='font-weight: bold'>Language</td><td>" + geo + "</td><td class='Character'>" + cGeo + "</td></tr><tr><td style='font-weight: bold'>Sector</td><td>" + sector + "</td><td class='Character'>" + cSector + "</td></tr><tr><td style='font-weight: bold'>URL</td><td>" + tURL + "</td><td class='Character'>" + cURL + "</td></tr><tr><td style='font-weight: bold'>Page Type</td><td>" + tPageType + "</td><td class='Character'>" + cPageType + "</td></tr></table>" + dialogClosing;
	  document.body.innerHTML += dialogOpening + "<table style='width:100%; color:#666'><tr style='background-color:#E0E0E0; color:#0071c5; font-weight: bold'><td>Check</td><td>Value</td><td>Status</td></tr><tr><td style='font-weight: bold'>Analytics</td><td>" + tLoaded + "</td><td class='Character'>" + cLoaded + "</td></tr><tr><td style='font-weight: bold'>MAP</td><td>" + tMapLoaded + "</td><td class='Character'>" + cMapLoaded + "</td></tr><tr><td style='font-weight: bold'>Country</td><td>" + local + "</td><td class='Character'>" + cLocal + "</td></tr><tr><td style='font-weight: bold'>Language</td><td>" + geo + "</td><td class='Character'>" + cGeo + "</td></tr><tr><td style='font-weight: bold'>Sector</td><td>" + sector + "</td><td class='Character'>" + cSector + "</td></tr><tr><td style='font-weight: bold'>URL</td><td>" + tURL + "</td><td class='Character'>" + cURL + "</td></tr><tr><td style='font-weight: bold'>Page Type</td><td>" + tPageType + "</td><td class='Character'>" + cPageType + "</td></tr><td style='font-weight: bold'>Title</td><td>" + title + "</td><td class='Character'>" + cTitle + "</td></tr><tr><td style='font-weight: bold'>Site Name</td><td>" + siteName + "</td><td class='Character'>" + cSiteName + "</td></tr><td style='font-weight: bold'>Type</td><td>" + type + "</td><td class='Character'>" + cType + "</td></tr><td style='font-weight: bold'>Description</td><td>" + description + "</td><td class='Character'>" + cDescription + "</td></tr><td style='font-weight: bold'>Image</td><td>" + image + "</td><td class='Character'>" + cImage + "</td></tr></table>" + dialogClosing;
    }
    $('td').css("border-left", "1px solid #E0E0E0");
    $('td').css("border-right", "1px solid #E0E0E0");
    $('td').css("padding", "1px 0px 1px 10px");
    $('td').css("height", "30px");
    $('p').css("color", "#666");
    $('table').css("border", "1px solid #E0E0E0");
    $('.Character').css("text-align", "center");
    $('.Character').each(function(index) {
      if ($(this).html() == checkCharacter) {
        $(this).css("color", "green");
      } else {
        $(this).css("color", "red");
      }
    });
  } else {
    document.body.innerHTML += dialogOpening + "</br>This tool is only designed to work on Eloqua Platform sites.</br>" + dialogClosing;
  }
  attachEvents();
  opened = true;
  $('#elqValidator').modal()
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function attachEvents() {
  $('#btnDoc').on('click', function() {
    openInNewTab("#");
  })
  $('#btnClose').on('click', function() {
    location.reload();
    var opened = false;
  })
}

function jQueryVersion() {
  var version = $.fn.jquery.split('.');
  return (version[0] >= 1 && version[1] >= 9 && version[2] >= 1);
}
var opened;
if ((typeof jQuery == "undefined" || !jQueryVersion()) && !opened) {
  loadJquery();
} else if (!opened) {
  loadCss();
}