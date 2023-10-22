import { Component } from '@angular/core';

interface Idea {
  id: number;
  image: string;
  text: string;
  votes: number;
}

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent {
  ideas: Idea[] = [
    { id: 1, image: 'https://lh4.googleusercontent.com/vjo9LfqOFRgxyv_2DmWrQBPvQvzyGbe9WXS-XRKIVCwcVIrDZjU87i4ay48qXGunylUhzzyhC3Rq01DizzHcgueuO2xdgl8JZmgn-Fv08tbDptptI_Zl45SkokZ-ZJIRmZbvOiCz', text: '1. Develop a Creative Blog', votes: 0 },
    { id: 2, image: 'https://lh5.googleusercontent.com/pRmum4wXn8dQywxSTrmeqDYwLXItJS51rH8ra71W7QUlBXKCwaodBK3MNPLkmkmR7VRHFdqFqEEojxu-OX0UbdQLC_0UE4uTKoCps_dZKOpCnozWqOpApg68Mt4S6v7eEz4J9Rjt', text: '2. Practical Exam Database', votes: 0 },
    { id: 3, image: 'https://lh6.googleusercontent.com/t_yDvz0F1ziu8Cj0Bgmake39YznVuMvuAx8o-Wq9iPOnTUmpnyeHgZjPpd8vtg6Pj_6aWdAJ2z-umrfG9RyMugmWzL6doK2CLThVhmqXSUNNu38xL7NC2SgixqaRrQqwmx1W_hLP', text: '3. Data Visualization projects using Python programs', votes: 0 },
    { id: 4, image: 'https://lh4.googleusercontent.com/KgqEKlbCo_yfUUr_6NYrLROu1aYBpWwRgt2LPhuQzA7lQj6db2HdPZ8ioXalHaHmmefxajIM4M73xDInaSdslr5tkyh5Bfp6_bf8T0CHQ6GVeeI1bItvxtLfTBancOcGoYc4inAp', text: '4. Gamification', votes: 0 },
    // Add more ideas as needed
    { id: 5, image: 'https://lh3.googleusercontent.com/JwiQdZU8IBbGu37fSQ_YD0zXxsMsR28jnqVm2qKG9xwmQTCt_hadjsX9mehp203B6hTQ2b26f6azVIyTFBT5-Evct1pzRE4reHyL6KV-OPunomTtoRm3I2nh19gFp-nV6qvptfYM', text: '5. Ambulance Tracker', votes: 0 },
    { id: 6, image: 'https://lh5.googleusercontent.com/pG5nqQdaizqxq0A2jb58ztsl1MwnyITPMeo8dS06F3nv-CUeO2sAMZZs1r01wL2BFfqw_yIgU9Iw2woyKdywAZKUcO5vgsGfmgcXGRqJGDZgm3-ZxMMvtKf4rMqrnIWKUXJq2n68', text: '6. Facial Recognition for Celebrities', votes: 0 },
    { id: 7, image: 'https://lh4.googleusercontent.com/Em7gviK1h2M8OErEGHo85vblw0i7eF2hxqlrMTTSgUyo4UkfGOA2lfDzoVHym8npMaBNeEfRndlM4VPTx62c5DuF9PSCMamfc-KY7nwCp_IEp5cjlM_9JxPhj3wFzrOCCR8G9bcY', text: '7. Stock Market with Active Tips for Beginners', votes: 0 },
    { id: 8, image: 'https://lh3.googleusercontent.com/GYjbwI2PIKdaeSh05qfvwssZIMNMw3CkJhr8S8z8j56AMKBghqtvh9zWPbPI5U9zSEhYdcvCcgpr3wCdn4gHSqpmm3NBjFyAbq1pRKsuqyiqyPhLWzd9_50Akbo6ebQHdetBFjeq', text: '8. Intelligent Chatbots to solve problems', votes: 0 },

  ];

  getRows(): Idea[][] {
    const itemsPerRow = 4;
    const rows: Idea[][] = [];

    for (let i = 0; i < this.ideas.length; i += itemsPerRow) {
      rows.push(this.ideas.slice(i, i + itemsPerRow));
    }

    return rows;
  }

  vote(idea: Idea): void {
    idea.votes++;
  }
}
