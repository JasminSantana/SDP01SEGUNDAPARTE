/**
 * 
 */
var matamoros = new google.maps.LatLng(25.859, -97.494);
	var cdMexico = new google.maps.LatLng(19.425, -99.142);
	var veracruz = new google.maps.LatLng(19.197, -96.154);
	var quintanaRoo = new google.maps.LatLng(19.170, -88.077);
	var sinaloa = new google.maps.LatLng(24.766, -107.427);
	var center = new google.maps.LatLng(23.945, -102.810);
	lugares= new Array;
	lugares[0]=['25.859', '-97.494'];
	lugares[1]=['19.425', '-99.142'];
	lugares[2]=['19.197', '-96.154'];
	lugares[3]=['19.170', '-88.077'];
	lugares[4]=['24.766', '-107.427'];
	i = 0;
	dist = 0;
	comp = -1;
	valores= new Array;
	cities= new Array;
	var clean=0;
	var poly;
	var image = 'gas1.png';
	
	function toRad(Value) {
	    /** Converts numeric degrees to radians */
	    return Value * Math.PI / 180;
	}
	
	function distance(lat1, lat2, lon1, lon2){
		if(document.getElementById('mi').checked){
			var R = 3958.7558657440545;
		}else{
			var R = 6371;
		}
	    var dLat = toRad(lat2-lat1);
	    var dLon = toRad(lon2-lon1);
	    var lat1 = toRad(lat1);
	    var lat2 = toRad(lat2);
	    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	    var d = R * c;
	    return d;
	}
	
	function initialize() {
    var myOptions = {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
	  mapTypeControlOptions: {
		  style: google.maps.MapTypeControlStyle.ROADMAP,
		  position: google.maps.ControlPosition.RIGHT_BOTTOM},
	  navigationControlOptions:{
		  style: google.maps.NavigationControlStyle.SMALL,
		  position: google.maps.ControlPosition.LEFT_BOTTOM},
      center: center,
	  styles: [
	           {
				   featureType: "transit",
				   stylers: [ { visibility: "off" } ]
			   },
			   {
				   featureType: "landscape",
				   stylers: [ { visibility: "off" } ]
			   },
			   {
				   featureType: "road",
				   stylers: [ { visibility: "off" } ]
			   },
			   {
				   featureType: "landscape",
				   stylers: [
				             { visibility: "on" },
							 { color: "#b2d06c" } ]
			   },
			   {
				   featureType: "poi",
				   stylers: [ { visibility: "off" } ]
			   },
			   {
				   featureType: "administrative",
				   elementType: "geometry.fill",
				   stylers: [ { visibility: "off" } ]
			   },
			   {
				   featureType: "administrative",
				   elementType: "labels",
				   stylers: [ { visibility: "off" } ]
			   },
			   {
				   featureType: "administrative.province",
				   elementType: "geometry.stroke",
				   stylers: [
				             { weight: 1 },
							 { color: "#fffdfc" } ]
			   },
			   {
				   featureType: "water",
				   elementType: "geometry.fill",
				   stylers: [ { color: "#80b9dd" } ]
			   },
			   {
				   featureType: "water",
				   elementType: "labels",
				   stylers: [ { visibility: "off" } ]
			   } ]
    };
    
    map = new google.maps.Map(document.getElementById("map"), myOptions);
	
	var lineSymbol = {
		path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
		scale: 5,
		strokeColor: '#393'
	};
	
	var polyOptions = {
		icons: [{
			icon: lineSymbol,
			offset: '0%'
		}],
		strokeColor: '#000000',
		strokeOpacity: 1.0,
		strokeWeight: 3
	}
	poly = new google.maps.Polyline(polyOptions);
	
	poly.setMap(map); 
	
	var content1 = '<h1>Matamoros</h1>'+
					'<div>'+
					'<p>Site type: oil.</p>'+
					'<p>Location:  '+matamoros.lat()+', '+matamoros.lng()+'.</p>'+
					'<p>Image: <a href="matamoros.html">Matamoros image</a>.</p>'+
					'</div>'; 
	
	 var infoMatamoros = new google.maps.InfoWindow({
		 content: content1,
		 maxWidth: 300,
		 disableAutoPan: true
	}); 
	
	var content2 = '<h1>Mexico City</h1>'+
					'<div>'+
					'<p>Site type: Gas.</p>'+
					'<p>Location:  '+cdMexico.lat()+', '+cdMexico.lng()+'.</p>'+
					'<p>Image: <a href="ciudadMexico.html">Mexico City image</a>.</p>'+
					'</div>'; 
	
	var infoMexico = new google.maps.InfoWindow({
		 content: content2,
		 maxWidth: 300,
		 disableAutoPan: true
	}); 
	
	var content3 = '<h1>Veracruz</h1>'+
						'<div>'+
						'<p>Site type: oil.</p>'+
						'<p>Location:  '+veracruz.lat()+', '+veracruz.lng()+'.</p>'+
						'<p>Image: <a href="veracruz.html">Veracruz image</a>.</p>'+
						'</div>'; 
	
	var infoVeracruz = new google.maps.InfoWindow({
		 content: content3,
		 maxWidth: 300,
		 disableAutoPan: true
	}); 
	
	var content4 = '<h1>Quintana Roo</h1>'+
						'<div>'+
						'<p>Site type: Oil.</p>'+
						'<p>Location:  '+quintanaRoo.lat()+', '+quintanaRoo.lng()+'.</p>'+
						'<p>Image: <a href="quintanaRoo.html">Quintana Roo image</a>.</p>'+
						'</div>'; 
	
	var infoQuintanaRoo = new google.maps.InfoWindow({
		 content: content4,
		 maxWidth: 300,
		 disableAutoPan: true
	}); 
	
	var content5 = '<h1>Sinaloa</h1>'+
						'<div>'+
						'<p>Site type: Gas.</p>'+
						'<p>Location:  '+sinaloa.lat()+', '+sinaloa.lng()+'.</p>'+
						'<p>Image: <a href="sinaloa.html">Sinaloa image</a>.</p>'+
						'</div>'; 
	
	var infoSinaloa = new google.maps.InfoWindow({
		 content: content5,
		 maxWidth: 300,
		 disableAutoPan: true
	}); 
	
	var image = new google.maps.MarkerImage(
		'oilSite.png',
		new google.maps.Size(26,48),
		new google.maps.Point(0,0),
		new google.maps.Point(13,48)
		);
		
	var shadow = new google.maps.MarkerImage(
		'oilSiteShadow.png',
		new google.maps.Size(50,29),
		new google.maps.Point(0,0),
		new google.maps.Point(26,29)
		);
	
	var mascara = {
		        coords: [5,18, 1,45, 12,47, 25,45, 18,18, 16,13, 23,13, 23,8, 16,1, 11,2, 9,7, 4,5, 1,9, 3,11, 7,12, 8,17],
				type: 'poly'
	}
	
	marker = new google.maps.Marker({
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: matamoros,
		icon: image,
		shadow: shadow,
		shape: mascara,
		title: 'Matamoros'
	});
	google.maps.event.addListener(marker, 'click', function(){
		if (marker.getAnimation() != null) {
		  marker.setAnimation(null);
	  } else {
		  marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	});
	google.maps.event.addListener(marker, 'click', function(){
		if(clean==1)
		{
			var path = poly.getPath();
			path.clear();
			clean=0;
			if(comp != 0)
			{
				valores[i]=lugares[0];
				cities[i]='Matamoros';
				comp=0;
				i++;
			}
		}else{
			if(comp != 0)
			{
				valores[i]=lugares[0];
				cities[i]='Matamoros';
				comp=0;
				i++;
			}
		}
	});
	google.maps.event.addListener(marker, 'click', addLatLng);
	google.maps.event.addListener(marker, 'click', animateCircle());
	google.maps.event.addListener(marker, 'mouseover', function() {
		infoMatamoros.open(map,marker);
	});
	google.maps.event.addListener(marker, 'rightclick', function() {
		infoMatamoros.close(map,marker);
	});
	
	marker2 = new google.maps.Marker({
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: sinaloa,
		icon: image,
		shadow: shadow,
		shape: mascara,
		title: 'Sinaloa'
	});
	google.maps.event.addListener(marker2, 'click', function(){
		if (marker2.getAnimation() != null) {
		  marker2.setAnimation(null);
	  } else {
		  marker2.setAnimation(google.maps.Animation.BOUNCE);
	  }
	});
	google.maps.event.addListener(marker2, 'click', function(){
		if(clean==1)
		{
			var path = poly.getPath();
			path.clear();
			clean=0;
			if(comp != 4)
			{
				valores[i]=lugares[4];
				cities[i]='Sinaloa';
				comp=4;
				i++;
			}
		}else{
			if(comp != 4)
			{
				valores[i]=lugares[4];
				cities[i]='Sinaloa';
				comp=4;
				i++;
			}
		}
	});
	google.maps.event.addListener(marker2, 'click', addLatLng);
	google.maps.event.addListener(marker2, 'click', animateCircle());
	google.maps.event.addListener(marker2, 'mouseover', function() {
		infoSinaloa.open(map,marker2);
	});
	google.maps.event.addListener(marker2, 'rightclick', function() {
		infoSinaloa.close(map,marker2);
	}); 
	
	marker3 = new google.maps.Marker({
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: cdMexico,
		icon: image,
		shadow: shadow,
		shape: mascara,
		title: 'Mexico City'
	});
	google.maps.event.addListener(marker3, 'click', function(){
		if (marker3.getAnimation() != null) {
		  marker3.setAnimation(null);
	  } else {
		  marker3.setAnimation(google.maps.Animation.BOUNCE);
	  }
	});
	google.maps.event.addListener(marker3, 'click', function(){
		if(clean==1)
		{
			var path = poly.getPath();
			path.clear();
			clean=0;
			if(comp != 1)
			{
				valores[i]=lugares[1];
				cities[i]='Mexico City';
				comp=1;
				i++;
			}
		}else{
			if(comp != 1)
			{
				valores[i]=lugares[1];
				cities[i]='Mexico City';
				comp=1;
				i++;
			}
		}
	});
	google.maps.event.addListener(marker3, 'click', addLatLng);
	google.maps.event.addListener(marker3, 'click', animateCircle());
	google.maps.event.addListener(marker3, 'mouseover', function() {
		infoMexico.open(map,marker3);
	});
	google.maps.event.addListener(marker3, 'rightclick', function() {
		infoMexico.close(map,marker3);
	}); 
	
	marker4 = new google.maps.Marker({
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: quintanaRoo,
		icon: image,
		shadow: shadow,
		shape: mascara,
		title: 'Quintana Roo'
	});
	google.maps.event.addListener(marker4, 'click', function(){
		if (marker4.getAnimation() != null) {
		  marker4.setAnimation(null);
	  } else {
		  marker4.setAnimation(google.maps.Animation.BOUNCE);
	  }
	});
	google.maps.event.addListener(marker4, 'click', function(){
		if(clean==1)
		{
			var path = poly.getPath();
			path.clear();
			clean=0;
			if(comp != 3)
			{
				valores[i]=lugares[3];
				cities[i]='Quintana Roo';
				comp=3;
				i++;
			}
		}else{
			if(comp != 3)
			{
				valores[i]=lugares[3];
				cities[i]='Quintana Roo';
				comp=3;
				i++;
			}
		}
	});
	google.maps.event.addListener(marker4, 'click', addLatLng);
	google.maps.event.addListener(marker4, 'click', animateCircle());
	google.maps.event.addListener(marker4, 'mouseover', function() {
		infoQuintanaRoo.open(map,marker4);
	});
	google.maps.event.addListener(marker4, 'rightclick', function() {
		infoQuintanaRoo.close(map,marker4);
	}); 
	
	marker5 = new google.maps.Marker({
		map:map,
		draggable:false,
		animation: google.maps.Animation.DROP,
		position: veracruz,
		icon: image,
		shadow: shadow,
		shape: mascara,
		title: 'Veracruz'
	});
	google.maps.event.addListener(marker5, 'click', function(){
		if (marker5.getAnimation() != null) {
		  marker5.setAnimation(null);
	  } else {
		  marker5.setAnimation(google.maps.Animation.BOUNCE);
	  }
	});
	google.maps.event.addListener(marker5, 'click', function(){
		if(clean==1)
		{
			var path = poly.getPath();
			path.clear();
			clean=0;
			if(comp != 2)
			{
				valores[i]=lugares[2];
				cities[i]='Veraruz';
				comp=2;
				i++;
			}
		}else{
			if(comp != 2)
			{
				valores[i]=lugares[2];
				cities[i]='Veraruz';
				comp=2;
				i++;
			}
		}
	});
	google.maps.event.addListener(marker5, 'click', addLatLng);
	google.maps.event.addListener(marker5, 'click', animateCircle());
	google.maps.event.addListener(marker5, 'mouseover', function() {
		infoVeracruz.open(map,marker5);
	});
	google.maps.event.addListener(marker5, 'rightclick', function() {
		infoVeracruz.close(map,marker5);
	});
	}
	
	function imprimir(){
		var d = document.getElementById('mostrar');
		while (d.hasChildNodes())
		{
			d.removeChild(d.firstChild);
		}
		cadena="Data <br/>";
		for (j=0;j<i;j++)
		{
			if(document.getElementById('y').checked)
			{
				if((j+1)==i)
				{
					var dist = distance(valores[j][0], valores[0][0], valores[j][1], valores[0][1]);
					if(document.getElementById('mi').checked){
						measu=' mi, ';
					}else{
						measu=' km, ';
					}
					if(document.getElementById('months').value!=""){
						var m=document.getElementById('months').value;
					}else{
						var m=6;
					}
					robot=compRobots(dist);
					cadena=cadena+'From '+cities[j]+' to '+cities[0]+' = '+dist.toFixed(2)+measu+robot.toFixed(0)+' robots are needed to check all of the pipes in '+m+" months<br />";
				}
				else
				{
					var dist = distance(valores[j][0], valores[j+1][0], valores[j][1], valores[j+1][1]);
					if(document.getElementById('mi').checked){
						measu=' mi, ';
					}else{
						measu=' km, ';
					}
					if(document.getElementById('months').value!=""){
						var m=document.getElementById('months').value;
					}else{
						var m=6;
					}
					robot=compRobots(dist);
					cadena=cadena+'From '+cities[j]+' to '+cities[j+1]+' = '+dist.toFixed(2)+measu+robot.toFixed(0)+' robots are needed to check all of the pipes in '+m+" months<br />";
					
				}
			}
			else
			{
				if(((j+1)!=i)||i==1)
				{
					var dist = distance(valores[j][0], valores[j+1][0], valores[j][1], valores[j+1][1]);
					if(document.getElementById('mi').checked){
						measu=' mi, ';
					}else{
						measu=' km, ';
					}
					if(document.getElementById('months').value!=""){
						var m=document.getElementById('months').value;
					}else{
						var m=6;
					}
					robot=compRobots(dist);
					cadena=cadena+'From '+cities[j]+' to '+cities[j+1]+' = '+dist.toFixed(2)+measu+robot.toFixed(0)+' robots are needed to check all of the pipes in '+m+" months<br />";
				}
			}
		}
		document.getElementById('mostrar').innerHTML = cadena;
		i=0;
		clean=1;
		comp=-1;
	}
	
	function addLatLng(event) {
		var path = poly.getPath();
		// Because path is an MVCArray, we can simply append a new coordinate
		// and it will automatically appear
		path.push(event.latLng);
	}
	
	function compRobots(k){
		if(document.getElementById('months').value!=""){
			var m=document.getElementById('months').value;
		}else{
			var m=6;
		}
		var hpM=730;
		if(document.getElementById('mi').checked){
			var vh=0.062137119;//Robot speed in miles
		}else{
			var vh=0.1;//Robot speed in kilometers
		}
		var q=m*vh;
		var w=q*hpM;
		var distan=k/w;
		return distan;
	}
	function animateCircle() {
	  var count = 0;
	  offsetId = window.setInterval(function() {
		  count = (count + 1) % 200;
		  
		  var icons = poly.get('icons');
		  icons[0].offset = (count / 2) + '%';
		  poly.set('icons', icons);
	  }, 100);
  }