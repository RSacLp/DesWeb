import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interfaces";

@Pipe({
  name: 'heroImage',
})

export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero): String {
      if (!hero.id && !hero.alt_img7){
        return 'assets/no-image.png';
      }
      if (!hero.alt_img7) return hero.alt_img7;

      return 'assets/'
  }
}
