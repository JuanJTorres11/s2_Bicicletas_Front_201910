import { Component, OnInit } from '@angular/core';

declare var $: any; 

@Component({
  selector: 'app-bicicleta-filters',
  templateUrl: './bicicleta-filters.component.html',
  styleUrls: ['./bicicleta-filters.component.css']
})
export class BicicletaFiltersComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

}
function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}
