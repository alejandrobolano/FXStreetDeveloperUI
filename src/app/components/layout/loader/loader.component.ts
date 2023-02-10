import { Component, OnInit } from '@angular/core';
import {LoaderHandlerService} from '../../../services/loader-handler.service';

@Component({
  selector: 'fx-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading = true;
  constructor(private loader: LoaderHandlerService) {
  }
  ngOnInit(): void {
    this.handle();
  }

  private handle(): void {
    this.loader.loaderObservable.subscribe((response) => {
      this.isLoading = response;
    });
  }

}
