import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //First big card content
  public imgUrlFirst: string = '../../../../assets/big-card/minimalism.png';
  public themeFirst: string = 'MINIMALISM';
  public titleFirst: string = 'Culpa sit Laboris Exercitation ea Fugiat';
  public creationFirst: string = 'Leslie Pena - April 25, 2012 (6 mins read)';
  public descriptionFirst: string = `
  Incididunt occaecat et qui dolore consectetur magna. 
  Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. 
  Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.
  `;

  //Second big card content
  public imgUrlSecond: string = '../../../../assets/big-card/technology.png';
  public themeSecond: string = 'TECHNOLOGY';
  public titleSecond: string = 'Amet non Ex Officia nulla Cupidatat';
  public creationSecond: string = 'Jacob Henry - September 27, 2017 (8 mins read)';
  public descriptionSecond: string = `
  Incididunt occaecat et qui dolore consectetur magna. 
  Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. 
  Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.
  `;

  //Third big card content
  public imgUrlThird: string = '../../../../assets/big-card/article.png';
  public themeThird: string = 'ARTICLE';
  public titleThird: string = 'Dolor ex Tempor Cotur Culpa li';
  public creationThird: string = 'Darrell Lane - May 16, 2017 (3 mins read)';
  public descriptionThird: string = `
  Incididunt occaecat et qui dolore consectetur magna. 
  Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. 
  Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.
  `;
}
