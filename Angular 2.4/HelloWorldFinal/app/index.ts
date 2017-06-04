import { Component } from '@angular/core';

@Component({
  selector: 'index-page',
  template: `
  <div class="container" style="height:90%; width: 100%;">
	  <br>
	  <div id="myCarousel" class="carousel slide" data-ride="carousel" style="height:100%; width: 100%;">
	    <!-- Indicators -->
	    <ol class="carousel-indicators">
	      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
	      <li data-target="#myCarousel" data-slide-to="1"></li>
	    </ol>
	
	    <!-- Wrapper for slides -->
	    <div class="carousel-inner" role="listbox">
	
	      <div class="item active">
	        <img src="../img/cartelera.jpg" style="height:550px; width: 800px;">
	        <br>
	        <div class="carousel-caption">
	          <h3>Cartelera</h3>
	          <a [routerLink]="['/cartelera']">Cartelera del VideoClub</a>
	        </div>
	      </div>
	
	      <div class="item">
	        <img src="../img/videoclub.jpg" style="height:550px; width: 800px;">
	        <br>
	        <div class="carousel-caption">
	          <h3>Socios</h3>
	          <a [routerLink]="['/socios']">Socios del VideoClub</a>
	        </div>
	      </div>
	  
	    </div>
	
	    <!-- Left and right controls -->
	    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
	      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	      <span class="sr-only">Previous</span>
	    </a>
	    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
	      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	      <span class="sr-only">Next</span>
	    </a>
	  </div>
	  
	</div>
	<router-outlet></router-outlet>
    `
})

export class Index { 
  
}
