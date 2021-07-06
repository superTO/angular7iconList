import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  icons: IconModel[] = [];
  filteredIcons: IconModel[] = [];
  loading: boolean = true;

  private _unsubscribeAll = new Subject();

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(
    private http: HttpClient
  ) {

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.http.get('api/icons')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((icons: any) => {
        this.icons = icons;
        this.filteredIcons = this.icons;
        this.loading = false;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Filter icons
   *
   * @param event
   */
  filterIcons(event: any): void {
    const value = event.target.value;

    this.filteredIcons = this.icons.filter(icon => {
      return icon.name.includes(value) || icon.tags.includes(value);
    });
  }

}

interface IconModel {
  name: string,
  ligature: string,
  tags: string
}