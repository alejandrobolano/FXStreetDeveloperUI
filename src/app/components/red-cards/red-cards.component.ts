import {Component, OnInit} from '@angular/core';
import {Card} from '../../models/Card';
import {CardsRepositoryService} from '../../services/cards/cards-repository.service';
import {ErrorHandlerService} from '../../services/error-handler.service';
import {LoaderHandlerService} from '../../services/loader-handler.service';

@Component({
  selector: 'fx-red-cards',
  templateUrl: './red-cards.component.html'
})
export class RedCardsComponent implements OnInit {
  cards: Card[];

  constructor(private repository: CardsRepositoryService,
              private errorHandler: ErrorHandlerService,
              private loader: LoaderHandlerService) {
  }

  ngOnInit(): void {
    this.getRedCards();
  }

  private getRedCards = () => {
    this.repository.getRedCards().subscribe(response => {
        this.cards = response as Card[];
        this.cards.sort((c1, c2) => c1.teamName > c2.teamName ? 1 : -1);
        this.loader.loader$.next(false);
      },
      (error) => {
        this.errorHandler.handleError(error);
      });
  }

}
