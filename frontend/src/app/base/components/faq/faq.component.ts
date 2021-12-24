import {Component, OnInit} from '@angular/core';
import {ListCategory} from './question.model';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {faMinusSquare, faPlusSquare,} from '@fortawesome/free-regular-svg-icons';
import {QUESTION_LIST} from './faq.constant';
import {environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FAQComponent implements OnInit {
  faArrowDown = faChevronDown;
  faArrowUp = faChevronUp;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  first = QUESTION_LIST;

  constructor() {
  }

  get firstList() {
    return first;
  }

  get secondList() {
    return second;
  }

  get env() {
    return env;
  }

  get emails() {
    return this.env.emails;
  }

  get contacts() {
    return this.env.contact;
  }

  ngOnInit(): void {
  }

  openClose(m: MyList) {
    if (m.expanded) this.first.forEach((item) => (item.expanded = false));
    m.expanded = !m.expanded;
  }

  getQuestions(category: ListCategory) {
    return this.first.filter((item) => item.category === category);
  }
}

interface MyList {
  category: ListCategory;
  expanded: boolean;
}

export const first: MyList[] = [
  {
    category: ListCategory.category1,
    expanded: false,
  },
  {
    category: ListCategory.category2,
    expanded: false,
  },
  {
    category: ListCategory.category3,
    expanded: false,
  },
  {
    category: ListCategory.category4,
    expanded: false,
  },
];

export const second: MyList[] = [
  {
    category: ListCategory.category5,
    expanded: false,
  },
  {
    category: ListCategory.category6,
    expanded: false,
  },
  {
    category: ListCategory.category7,
    expanded: false,
  },
  {
    category: ListCategory.category8,
    expanded: false,
  },
  {
    category: ListCategory.category9,
    expanded: false,
  },
];
